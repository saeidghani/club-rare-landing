import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { StringLiteral } from 'typescript'
import { useWallet } from 'use-wallet'
import useSushi from '../../../hooks/useSushi'
import { BigNumber, Web3 } from '../../../sushi'
import { getLPTokenStaked, getNewRewardPerBlock } from '../../../sushi/utils'
import { getContract } from '../../../utils/erc20'
import { provider } from 'web3-core'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useBlock from '../../../hooks/useBlock'
import useStakedValue from '../../../hooks/useStakedValue'
import { NUMBER_BLOCKS_PER_YEAR } from '../../../sushi/lib/constants'
import useLuaPrice from '../../../hooks/useLuaPrice'
import useNewReward from '../../../hooks/useNewReward'
import config from '../../../config'


import '../../../i18n'
import { useTranslation } from 'react-i18next'

interface ApyProps {
  pid: number
  lpTokenAddress: string
  symbolShort: string
  tokenSymbol: string
  token2Symbol: string
}

const Apy: React.FC<ApyProps> = ({
  pid,
  lpTokenAddress,
  symbolShort,
  tokenSymbol,
  token2Symbol,
}) => {
  const { t, i18n } = useTranslation()
  const sushi = useSushi()
  const { ethereum } = useWallet()

  // const block = useBlock()
  const stakedValue = useStakedValue(pid)
  const luaPrice = useLuaPrice()
  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const newReward = useNewReward(pid + 1)

  const [totalStake, setTotalStake] = useState<BigNumber>()
  useEffect(() => {
    async function fetchData() {
      const web3 = new Web3(config.rpc)
      const ctx = new web3.eth.Contract(config.uniswapABI, lpTokenAddress)
      const totalSupply = await ctx.methods.totalSupply().call()

      setTotalStake(new BigNumber(totalSupply))
    }
    if (sushi && lpContract) {
      fetchData()
    }
  }, [sushi, setTotalStake, lpContract])

  return (
    <StyledApy>
      <StyledBox className="col-3">
        <StyledLabel>{t('apy')}</StyledLabel>
        <StyledContent>
          {newReward &&
          stakedValue &&
          luaPrice &&
          stakedValue.usdValue &&
          stakedValue.totalToken2Value &&
          stakedValue.poolWeight
            ? `${parseFloat(
                luaPrice
                  .times(NUMBER_BLOCKS_PER_YEAR)
                  .times(newReward.div(10 ** 18))
                  .div(stakedValue.usdValue)
                  .div(10 ** 8)
                  .times(100)
                  .toFixed(2),
              ).toLocaleString('en-US')}%`
            : 'loading'}
        </StyledContent>
      </StyledBox>
      <StyledBox className="col-7">
        <StyledLabel>{t('totalstaked')}</StyledLabel>
        <StyledContent>
          {stakedValue && stakedValue.tokenAmount
            ? (stakedValue.tokenAmount as any).toLocaleString('en-US')
            : '~'}{' '}
          <span style={{ fontSize: 10 }}>{tokenSymbol}</span>
          &nbsp; + &nbsp;
          {stakedValue && stakedValue.token2Amount
            ? (stakedValue.token2Amount as any).toLocaleString('en-US')
            : '~'}{' '}
          <span style={{ fontSize: 10 }}>{token2Symbol}</span>
        </StyledContent>
        <StyledEquility>
          {totalStake ? getBalanceNumber(totalStake) : '~'}{' '}
          <span style={{ fontSize: 10 }}>{symbolShort} LP</span>
        </StyledEquility>
      </StyledBox>
      <StyledBox className="col-2">
        <StyledLabel>{t('rewardperblock')}</StyledLabel>
        <StyledContent>
          {newReward ? getBalanceNumber(newReward).toFixed(2) : '~'} AGOV
        </StyledContent>
        <StyledEquility>
          ≈{' '}
          {stakedValue &&
            newReward &&
            luaPrice &&
            luaPrice
              .times(newReward)
              .div(10 ** 18)
              .div(10 ** 8)
              .toFixed(2)}{' '}
          USD
        </StyledEquility>
      </StyledBox>
    </StyledApy>
  )
}
const StyledApy = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing[3]}px;
  border: 2px solid ${(props) => props.theme.color.grey[200]};
  border-radius: 12px;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`
const StyledBox = styled.div`
  &.col-2 {
    width: 20%;
  }
  &.col-4 {
    width: 40%;
  }
  &.col-8 {
    width: 60%;
  }
`
const StyledLabel = styled.span`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 14px;
  display: block;
`

const StyledContent = styled.span`
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  display: block;
  padding: 10px 0;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const StyledEquility = styled.span`
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 14px;
  display: block;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export default Apy
