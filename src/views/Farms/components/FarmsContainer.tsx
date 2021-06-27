import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import Luas from '../../../assets/img/luas-icon.svg'

import Button from '../../../components/Button'
import Page from '../../../components/Page'
import PageHeader from '../../../components/PageHeader'
import WalletProviderModal from '../../../components/WalletProviderModal'

import useModal from '../../../hooks/useModal'

import Farm from '../../Farm'

import FarmCards from './FarmCards'
import '../../../i18n'
import { useTranslation } from 'react-i18next'
import Container from '../../../components/Container'
import Balances from '../../Home/components/Balances'
import styled from 'styled-components'
import IconButton from '../../../components/IconButton'

const FarmsContainer: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { path } = useRouteMatch()
  // const { account } = useWallet()
  // const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  
  return <>
    <Route exact path={path}>


      <PageHeader
        icon={<img src="coin.png" height="120" />}
        subtitle={t('earnagov')}
        title={t('selectyourfields')}
      />
<Page>
<Container>
                <Balances />


            </Container>


<Container>
<StyledNav>
<br/><br/><br/>
{/* <br/><Button variant="tertiary"
size="sm"
href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc1ad269f10bf36d6972ee30827051b59d0d2456b" 
                text={t('buyagov')}
              />&nbsp;&nbsp;
              <Button variant="tertiary"
size="sm"
href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x099540cea8919d103ba1954af970b9753d9f0bf1"
                text={t('buywhint')}
              />&nbsp;&nbsp;
              <Button variant="tertiary"
size="sm"
href="https://app.uniswap.org/#/add/ETH/0xc1AD269f10bF36D6972eE30827051b59d0d2456b"
                text={t('addliquidity')}
              /> */}
        {/* <StyledAbsoluteLink href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc1ad269f10bf36d6972ee30827051b59d0d2456b" target="_blank">
        {t('buyagov')} 
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x099540cea8919d103ba1954af970b9753d9f0bf1" target="_blank">
        {t('buywhint')} 
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="https://app.uniswap.org/#/add/ETH/0xc1AD269f10bF36D6972eE30827051b59d0d2456b" target="_blank">
      {t('addliquidity')}
      </StyledAbsoluteLink>     */}
      </StyledNav>

</Container>

<div id="staketoken">

        <Box className="mt-4">



     <FarmCards />
     </Box></div>



     </Page>
    </Route>
    <Route path={`${path}/:farmId`}>
      <Farm />
    </Route>


  </>
  // return (
  //   <Page>
  //     {!!account ? (
  //       <>
  //         <Route exact path={path}>
  //           <PageHeader
  //             icon={<img src={Luas} height="120" />}
  //             subtitle="Earn AGOV tokens by staking LuaSwap SPL Tokens."
  //             title="Select Your Favorite Dishes"
  //           />
  //           <FarmCards />
  //         </Route>
  //         <Route path={`${path}/:farmId`}>
  //           <Farm />
  //         </Route>
  //       </>
  //     ) : (
  //       <div
  //         style={{
  //           alignItems: 'center',
  //           display: 'flex',
  //           flex: 1,
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <Button variant="secondary"
  //           onClick={onPresentWalletProviderModal}
  //           text="🔓 Unlock Wallet To Continue"
  //         />
  //       </div>
  //     )}
  //   </Page>
  // )
}
const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
`
const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`
const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`
interface StyledButtonProps {
  disabled?: boolean
}


export default FarmsContainer
