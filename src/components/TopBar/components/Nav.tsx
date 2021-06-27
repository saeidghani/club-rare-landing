import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import '../../../i18n'
import { useTranslation } from 'react-i18next'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


const Nav: React.FC = () => {

  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  return (

  
    <StyledNav>

      <BrowserView>
        

    
        <StyledLink exact activeClassName="active" to="/">
      {t('home')} 
      </StyledLink>
      { <StyledLink exact activeClassName="active" to="/farms">
      {t('farm')} 
      </StyledLink> }
      {/* <StyledAbsoluteLink href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc1ad269f10bf36d6972ee30827051b59d0d2456b" target="_blank">
        {t('buyagov')} 
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x099540cea8919d103ba1954af970b9753d9f0bf1" target="_blank">
        {t('buywhint')} 
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="https://app.uniswap.org/#/add/ETH/0xc1AD269f10bF36D6972eE30827051b59d0d2456b" target="_blank">
      {t('addliquidity')}
      </StyledAbsoluteLink> */}

      <StyledAbsoluteLink onClick={changelanguageToEn}>
      EN
      </StyledAbsoluteLink>
      <StyledAbsoluteLink onClick={changelanguageToKo}>
      KR
      </StyledAbsoluteLink>

      {/* <StyledAbsoluteLink href="https://snapshot.luaswap.org/#/luaswap" target="_blank">
        Proposals
      </StyledAbsoluteLink> */}
      {/* <StyledLink exact activeClassName="active" to="/swap">
        Swap
      </StyledLink> */}

        
        </BrowserView>

        <MobileView>        
        <span style={{color: '#ffffff', fontSize: 9}}>
        {/* <StyledAbsoluteLink href="/">
        {t('home')}  
      </StyledAbsoluteLink> */}
      <StyledAbsoluteLink href="https://agov.finance/#/farms">
      {t('farm')} 
      </StyledAbsoluteLink>


      <StyledAbsoluteLink onClick={changelanguageToEn}>
      EN
      </StyledAbsoluteLink>
      <StyledAbsoluteLink onClick={changelanguageToKo}>
      KR
      </StyledAbsoluteLink>
        </span>
        </MobileView>


      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  margin-left: ${(props) => props.theme.spacing[4]}px;
  margin-right: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[4]}px;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  position: relative;
  &:after{
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  &:hover {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  &.active {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media (max-width: 767px) {
    display: none;
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

export default Nav
