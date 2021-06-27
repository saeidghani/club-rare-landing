import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getFarms,
  getLPValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import axios from 'axios'
import config from '../config'
import { getContract } from '../utils/erc20'
import Web3 from 'web3'

export interface StakedValue {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  poolWeight: BigNumber
  usdValue: BigNumber
  pid: string
}

var CACHE : {time: any, old: any, value: any} = {
  time: 0,
  old: 0,
  value: []
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState(CACHE.value as Array<StakedValue>)
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    // const balances: Array<StakedValue> = await Promise.all(
    //   farms.map(
    //     ({
    //       pid,
    //       lpContract,
    //       tokenContract,
    //       token2Contract
    //     }: {
    //       pid: number
    //       lpContract: Contract
    //       tokenContract: Contract
    //       token2Contract: Contract
    //     }) =>
    //       getLPValue(
    //         masterChefContract,
    //         lpContract,
    //         tokenContract,
    //         token2Contract,
    //         pid,
    //       ),
    //   ),
    // )

    //const web3 = new Web3(config.rpc);
    const ethereum = (window as any).ethereum;
    const web3 = new Web3(ethereum)

    const ctx0 = new web3.eth.Contract(config.masterchefABI, config.masterchef);
    const poolLength = await ctx0.methods.poolLength().call();

    const pids = Array.from({length: poolLength}).map((_, pid) => pid);
    const balances: any[] = Array.from({length: poolLength}).map((_, pid) => ({pid}));
    
    const lpTokens: string[] = Array.from({length: poolLength});
    const totalAllocPoint = await ctx0.methods.totalAllocPoint().call();


    await Promise.all(pids.map(pid => ctx0.methods.poolInfo(pid).call().then((info: any) => {
      lpTokens[pid] = info.lpToken;
      balances[pid].poolWeight = info.allocPoint / totalAllocPoint;
    })));
    await Promise.all(pids.map(pid => ctx0.methods.getNewRewardPerBlock(pid).call().then((newRewardPerBlock: any) => {
      balances[pid].newRewardPerBlock = newRewardPerBlock / (10 ** 18);
    })));
    await Promise.all(pids.map(async pid => {
      const ctx1 = new web3.eth.Contract(config.uniswapABI, lpTokens[pid]);
      let [token0, token1] = await Promise.all([ctx1.methods.token0().call(), ctx1.methods.token1().call()]);
      token0 = token0.toLowerCase();
      token1 = token1.toLowerCase();

      const isSwap = [config.eth, config.usdt, config.usdc].includes(token0);
     
      const {_reserve0, _reserve1} = await ctx1.methods.getReserves().call();
      let tokenAmount = 0;
      let token2Amount = 0;

      if ([config.usdt, config.usdc].includes(token0)) tokenAmount = _reserve0 / (10 ** 6);
      else tokenAmount = _reserve0 / (10 ** 18);

      if ([config.usdt, config.usdc].includes(token1)) token2Amount = _reserve1 / (10 ** 6);
      else token2Amount = _reserve1 / (10 ** 18);

      if (isSwap) {
        const temp = token0;
        token0 = token1;
        token1 = temp;
      }

      if (isSwap || [5, 10].includes(pid)) {
        const temp = tokenAmount;
        tokenAmount = token2Amount;
        token2Amount = temp;
      }

      const totalToken2Value = token2Amount * 2;

      let usdValue = 0;
      if ([config.usdt, config.usdc].includes(token1)) usdValue = totalToken2Value;
      else if (token1 === config.eth) {
        const ctx2 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt); 
        const reserves = await ctx2.methods.getReserves().call();
        const ethUsd = reserves['_reserve1'] / reserves['_reserve0'] * (10 ** 12);

        usdValue = totalToken2Value * ethUsd;
      } else {
        const ctx0 = new web3.eth.Contract(config.uniswapABI, config.lua_eth);
        const ctx1 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt);

        const result0 = await ctx0.methods.getReserves().call();
        const result1 = await ctx1.methods.getReserves().call();

        const tokenEth = result0._reserve1 / result0._reserve0;
        const ethUsd = result1._reserve1 / result1._reserve0 * (10 ** 12);
        const usd = tokenEth * ethUsd;

        usdValue = totalToken2Value * usd;
      }

      balances[pid] = {
        ...balances[pid],
        tokenAmount,
        token2Amount,
        totalToken2Value,
        tokenPriceInToken2: token2Amount / tokenAmount,
        usdValue,
      };
    }));

    CACHE.time = new Date().getTime()
    CACHE.value = balances;

    const _balances = [
      //balances[3],
      balances[0],
      balances[1],
      balances[2],
      // balances[4],
      // balances[5],
      // balances[6],
      // balances[7],
      // balances[8],
      // balances[9],
      // balances[10],
      // balances[11],
      // balances[12],
      // balances[13],
      // balances[14],
    ];
  //  setBalance(_balances)
     setBalance(balances)
  }, [masterChefContract, sushi])

  useEffect(() => {
    if (masterChefContract && sushi
      && CACHE.time + CACHE.old <= new Date().getTime()) {
      fetchAllStakedValue()
    }
  }, [block, masterChefContract, setBalance, sushi])

  return balances
}

export default useAllStakedValue
