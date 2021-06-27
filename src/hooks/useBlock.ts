import { useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
import config from '../config'
import axios from 'axios'
import { getContract } from '../utils/erc20'
// import debounce from 'debounce'

var CACHE : any = {
  time: parseInt(localStorage.getItem('CACHE_useBlock_time') || '0'),
  old: 15 * 1000,
  value: parseInt(localStorage.getItem('CACHE_useBlock_value') || '0')
}

const useBlock = () => {
  const [block, setBlock] = useState(CACHE.value)
  const getBlock = useCallback(async () => {
    if (CACHE.time + CACHE.old <= new Date().getTime()) {
      //const web3 = new Web3(config.rpc);
      const ethereum = (window as any).ethereum;
      const web3 = new Web3(ethereum)

      const data = await web3.eth.getBlockNumber();

      var latestBlockNumber = data
      if (block !== latestBlockNumber) {
        CACHE.time = new Date().getTime()
        CACHE.value = block;
        localStorage.setItem('CACHE_useBlock_time', CACHE.time)
        localStorage.setItem('CACHE_useBlock_value', CACHE.value)
        setBlock(latestBlockNumber)
      }
    }
    else {
      setBlock(CACHE.value)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      getBlock()
    }, 15000)

    getBlock()

    return () => clearInterval(interval)
  }, [])

  return block
}

export default useBlock
