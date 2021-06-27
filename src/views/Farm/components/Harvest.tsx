import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Lua from '../../../assets/img/lua-icon.svg'

// import '../../../i18n'
// import { useTranslation } from 'react-i18next'


interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)
  //const { t, i18n } = useTranslation()
  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            {/* <CardIcon><img src={Lua} alt="AGOV Reward"/></CardIcon> */}
            <StyledValue>
              <Label text="AGOV Reward" />
              <br/>
              <Value value={getBalanceNumber(earnings)}/>
              <br/>
              <div style={{fontSize: 13, color: 'rgb(255,152,0,0.7)'}}>AGOV 유동성 보상 프로그램은 첫 13주간 동안에는 채굴보상의 10%의 물량만 언락 상태로 바로 지급됩니다.</div>
              <div style={{marginTop: 10, fontSize: 13, color: 'rgb(255,152,0,0.7)'}}>나머지 90%의 보상 물량은 AGOV 유동성 보상 프로그램이 런칭된지 14주차가 되는 시점부터, 1년에 걸쳐 순차적으로 언락 물량이 일정수량씩 나누어 지급되는 구조로 설계되어 있습니다.</div>
            </StyledValue>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting AGOV' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledValue = styled.div`
  text-align: center;
  span{
    color: ${(props) => props.theme.color.white};
  }  
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
