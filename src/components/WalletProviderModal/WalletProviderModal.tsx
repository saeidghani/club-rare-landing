import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

import '../../i18n'
import { useTranslation } from 'react-i18next'


const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, activate: connect } = useWallet()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (account) {
      onDismiss()
      if (localStorage.useWalletConnectType && localStorage.useWalletConnectType === 'injected') {
        localStorage.useWalletConnectStatus = 'connected'
      }
    }
  }, [account, onDismiss])

  function tryConnect(type: any) {
    if (type == 'injected') {
      localStorage.useWalletConnectType = type
      localStorage.useWalletConnectStatus = 'pending'
    }
    connect(type)
  }

  return (
    <Modal>
      <ModalTitle text={t('selectwalletprovider')} />

      <ModalContent>
        <StyledWalletsWrapper>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={metamaskLogo} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected')}
              title="Metamask"
            />
          </StyledWalletCard>
          <Spacer size="sm" />
          <StyledWalletCard>
            <WalletCard
              icon={<img src={walletConnectLogo} style={{ height: 24 }} />}
              onConnect={() => tryConnect('walletconnect')}
              title="WalletConnect"
            />
          </StyledWalletCard>
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
