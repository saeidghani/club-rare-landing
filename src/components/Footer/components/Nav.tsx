import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>

      <StyledLink
        target="_blank"
        href="https://scope.klaytn.com/token/0x588c62ed9aa7367d7cd9c2a9aaac77e44fe8221b?tabId=tokenTransfer"
      >
        Contract(Klaytn)
      </StyledLink>
      {/* <StyledLink
        target="_blank"
        href="https://etherscan.io/token/0xc1ad269f10bf36d6972ee30827051b59d0d2456b"
      >
        Contract(Ethereum)
      </StyledLink> */}
      <StyledLink target="_blank" href="https://t.me/ANSWER_GOVERNANCE">
        Telegram 
      </StyledLink>
      { <StyledLink target="_blank" href="https://github.com/answerswap/agov">
        Github
      </StyledLink> }
      <StyledLink target="_blank" href="https://twitter.com/agov_finance">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  &:hover {
    color: ${(props) => props.theme.color.primary.main};
  }
`

export default Nav
