import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'

import '../../../i18n'
import { useTranslation } from 'react-i18next'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')


  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account, activate: connect } = useWallet()

  useEffect(() => {
    if (localStorage.useWalletConnectStatus === 'connected' && localStorage.useWalletConnectType) {
      connect(localStorage.useWalletConnectType)
    }
  }, [])

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    

    <StyledAccountButton>      
      
      {!account ? (
        
        <Button onClick={handleUnlockClick} size="sm" variant="secondary" text={t("unlockwallet")} />
      ) : (
        <BoxWallet>
            <div>{account.substr(0, 7)}...</div>
            <Button onClick={onPresentAccountModal} size="sm" variant="secondary" text={t("mywallet")} />
        </BoxWallet>
      )}
      
      {/* <button style={{color: '#000000', fontSize: 15}} size="sm"  onClick={changelanguageToEn}>English Page</button> */}
{/*     
      <Button onClick={changelanguageToEn} size="sm" variant="tertiary" text="English" />
    <Button onClick={changelanguageToKo} size="sm" variant="tertiary" text="Korean" /> */}
    
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div``

const BoxWallet = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    div {
        background: #4c5050;
        padding: 0 16px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        position: relative;
        &:before{
            position: absolute;
            content: '';
            background: #4c5050;
            height: 100%;
            width: 50%;
            z-index: -1;
            right: -25%;
        }
    }
`

export default AccountButton
