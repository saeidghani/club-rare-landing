import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'

import useSushi from './useSushi'
import axios from 'axios'
import config from '../config'
import Web3 from 'web3'
const useAgovPrice = () => {
  const [price, setPrice] = useState(new BigNumber(0))
  const sushi = useSushi()

  const fetchBalance = useCallback(async () => {
    //const web3 = new Web3(config.rpc);
    const ethereum = (window as any).ethereum;
    const web3 = new Web3(ethereum)

    const ctx0 = new web3.eth.Contract(config.uniswapABI, config.agov_eth);
    const ctx1 = new web3.eth.Contract(config.uniswapABI, config.eth_usdt);

    const result0 = await ctx0.methods.getReserves().call();
    const result1 = await ctx1.methods.getReserves().call();

    //const tokenEth = result0._reserve1 / result0._reserve0;
    const tokenEth = result0._reserve0 / result0._reserve1;
    const ethUsd = result1._reserve1 / result1._reserve0 * (10 ** 12);
    const usd = tokenEth * ethUsd;

    const value = usd;
    setPrice(new BigNumber(value * 10 ** 8))
  }, [sushi])

  useEffect(() => {
    if (sushi) {
      fetchBalance()
    }
  }, [setPrice, sushi])

  return price
}

export default useAgovPrice
