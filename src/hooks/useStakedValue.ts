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

const useStakedValue = (pid: number) => {
  const [balance, setBalance] = useState<StakedValue>()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const block = useBlock()

  const fetchStakedValue = useCallback(async () => {
    // const balances: Array<StakedValue> = await Promise.all(
    //   farms.filter((e: any) => e.pid == pid).map(
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

    let balances: any = {};
    
    let lpToken = '';
    const totalAllocPoint = await ctx0.methods.totalAllocPoint().call();

    await ctx0.methods.poolInfo(pid).call().then((info: any) => {
      lpToken = info.lpToken;
      balances.poolWeight = info.allocPoint / totalAllocPoint;
    });
    await ctx0.methods.getNewRewardPerBlock(pid).call().then((newRewardPerBlock: any) => {
      balances.newRewardPerBlock = newRewardPerBlock / (10 ** 18);
    });
    
    const ctx1 = new web3.eth.Contract(config.uniswapABI, lpToken);
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
    const lpSupply = await ctx1.methods.balanceOf(config.masterchef).call();
    const lpSupplyAll = await ctx1.methods.totalSupply().call();
    tokenAmount = tokenAmount * lpSupply / lpSupplyAll;
    token2Amount = token2Amount * lpSupply / lpSupplyAll;

    const totalToken2Value = token2Amount * 2;
    const totalTokenValue = tokenAmount * 2;

    let usdValue = 0;
    if ([config.usdt, config.usdc].includes(token1)) usdValue = totalToken2Value;
    else if (token1 === config.eth) { 
      const ctx2 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt); 
      const reserves = await ctx2.methods.getReserves().call();
      const ethUsd = reserves['_reserve1'] / reserves['_reserve0'] * (10 ** 12);

      usdValue = totalToken2Value * ethUsd; 
    }
    else if (token0 === config.answ) {  //ANSW-AGOV

      const ctx0 = new web3.eth.Contract(config.uniswapABI, config.lua_eth);
      const result0 = await ctx0.methods.getReserves().call();
      const tokenEth = result0._reserve1 / result0._reserve0; // token ETh = 10260 =  1 eTH = 10260  
      const tokenEth2 = result0._reserve0 / result0._reserve1; // 1AGOV =  0.0463 ETH (AGOV in ETH Price )

      //GET ETH in USD Price 
      const ctx2 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt); 
      const reserves = await ctx2.methods.getReserves().call();
      const ethUsd = reserves['_reserve1'] / reserves['_reserve0'] * (10 ** 12);
      const usd = tokenEth2 * ethUsd;
    
      usdValue =  totalToken2Value *usd  ; // Locked Value(AGOV) * AGOV in USD Price 
    }
    else if (token1 === config.agov) {  //AGOV-WHINT

      const ctx0 = new web3.eth.Contract(config.uniswapABI, config.lua_eth);
      const result0 = await ctx0.methods.getReserves().call();
      const tokenEth = result0._reserve1 / result0._reserve0; // token ETh = 10260 =  1 eTH = 10260  
      const tokenEth2 = result0._reserve0 / result0._reserve1; // 1AGOV =  0.0463 ETH (AGOV in ETH Price )

      //GET ETH in USD Price 
      const ctx2 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt); 
      const reserves = await ctx2.methods.getReserves().call();
      const ethUsd = reserves['_reserve1'] / reserves['_reserve0'] * (10 ** 12);
      const usd = tokenEth2 * ethUsd;
    
      usdValue =  totalToken2Value *usd ; // Locked Value(AGOV) * AGOV in USD Price 

    }  else { 
      const ctx0 = new web3.eth.Contract(config.uniswapABI, config.lua_eth);
      const ctx1 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt);

      const result0 = await ctx0.methods.getReserves().call();
      const result1 = await ctx1.methods.getReserves().call();

      const tokenEth = result0._reserve1 / result0._reserve0;
      const ethUsd = result1._reserve1 / result1._reserve0 * (10 ** 12);
      const usd = tokenEth * ethUsd;

      usdValue = totalToken2Value * usd;
    }
    balances = {
      ...balances,
      tokenAmount,
      token2Amount,
      totalToken2Value,
      tokenPriceInToken2: token2Amount / tokenAmount,
      usdValue,
    };

    setBalance(balances)
  }, [masterChefContract, block, sushi])

  useEffect(() => {
    if (masterChefContract && sushi) {
      fetchStakedValue()
    }
  }, [masterChefContract, block, setBalance, sushi])

  return balance
}

export default useStakedValue
