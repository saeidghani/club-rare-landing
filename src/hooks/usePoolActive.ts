import { useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
import config from '../config'
import axios from 'axios'
// import debounce from 'debounce'

const usePoolActive = (pid: number) => {
  const [active, setActive] = useState(false)
  const getData = useCallback(async () => {
    setActive(true)
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return active
}

export default usePoolActive
