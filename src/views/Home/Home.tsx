import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
// import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import CustomCountDown from './components/CustomCountDown'
import Icon_Tip from '../../assets/img/pro-tip-icon.svg'
import { START_REWARD_AT_BLOCK } from '../../sushi/lib/constants'
import LuaLogo from '../../assets/img/logo.png'
import useAgovPrice from '../../hooks/useLuaPrice'
import IntroImage1 from '../../assets/img/intro1.png'
import IntroImage2 from '../../assets/img/intro2.png'
import AgovImage from '../../assets/img/ans.png'
import WhintImage from '../../assets/img/whint.png'

import FarmCards from '../Farms/components/FarmCards'
import TotalLockValue from './components/TotalLockValue'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const Home: React.FC = () => {
    const { t, i18n } = useTranslation()

    var block = 99999999999
    const launchBlock = START_REWARD_AT_BLOCK
    const agovPrice = useAgovPrice()
    const [atDate, setDate] = useState<any>()
    return (
        <Page>
            {/* <SpacerRes> */}
            {/* <Spacer size="md" /> */}
            {/* <StyledLogo>
                <img className="d-md-none" src={LuaLogo} height="150" style={{ marginTop: -4 }} />
            </StyledLogo> */}
            {/* </SpacerRes> */}


            <div style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>


                <BrowserView>
                    <StyledHeading>
                        <p> <img className="d-md-none" src={t('newmain_image_1')} width="1394" style={{ marginTop: 0 }} /></p>

                    </StyledHeading>
                </BrowserView>

                <MobileView>
                    <StyledHeading>
                        <p> <img className="d-md-none" src={t('newmain_image_1')} width="350" style={{ marginTop: 0 }} /></p>

                    </StyledHeading>
                </MobileView>


                {/* 
        <p> <span style={{ marginBottom: -20,fontWeight: 'bold',color: '#ffffff' ,fontSize: 30}}> {t('namespace')}</span><br/>                   
        <span style={{ color: '#18ABEE', fontSize: 23}}> {t('highprofit')}</span></p>                     */}
                {/* <p>AGOV Token Pool Currently Has <span style={{color: '#4caf50', fontSize: 20}}>$<TotalLockValue /></span> Of Total Locked Value. </p>
             */}
                {/* <StyledHeading> <span style={{color: '#4caf50', fontSize: 15}}> AGOV Token Holder can get a Revenue-Sharing of AGOV Food Exchange.</span></StyledHeading>  */}
            </div>


            {/* {block < launchBlock && atDate && <>
            <Spacer size="sm" />
            <CustomCountDown date={atDate}/>
            <Spacer size="md" />
        
            <div>
                <ReadMore href="https://agov.finance/agov_guide.pdf" target="__blank"> 👉 {t('announce')} 👈</ReadMore>
            </div>
            <Spacer size="lg" />
            </>
        } */}

            {/* <Spacer size="sm" /> */}

            {/* <div style={{ fontWeight: 'bold', fontSize: 15, color: '#ffffff' }}> */}

                {/* <p> 현재 AGOV 토큰 가격: 
        ${parseFloat(
                agovPrice                                                      
                  .div(10 ** 8)
                  .toFixed(10),
              ).toLocaleString('en-US')}
             (Uniswap 기준) </p>  */}

                {/* <BrowserView>
                    <StyledHeading>
                        <p>{t('agovhas')}<span style={{ color: '#4594E4', fontSize: 25 }}>$<TotalLockValue /></span> {t('agovhas2')} </p>

                    </StyledHeading>
                </BrowserView>

                <MobileView>
                    <StyledHeading>
                        <p><span style={{ color: '#ffffff', fontSize: 10 }}>{t('agovhas')}</span>
                            <span style={{ color: '#4594E4', fontSize: 11 }}>$<TotalLockValue /></span>
                            <span style={{ color: '#ffffff', fontSize: 10 }}> {t('agovhas2')} </span></p>

                    </StyledHeading>
                </MobileView> */}



                {/* <StyledHeading> <span style={{color: '#4caf50', fontSize: 15}}> AGOV Token Holder can get a Revenue-Sharing of AGOV Food Exchange.</span></StyledHeading>  */}
            {/* </div> */}


            <div>
                <div style={{ color: 'rgb(255,255,255,255)', textAlign: 'center', marginTop: 0 }}>


                    <BrowserView>
                        <StyledHeading>

                            <a href="https://agov.finance/agov_guide_kr.pdf"> <img className="d-md-none" src="Litepaper(Kr).png" width="150" /></a>
                            <a href="https://agov.finance/agov_guide_kr.pdf"> <img className="d-md-none" src="Litepaper(En).png" width="150" /></a>



                        </StyledHeading>
                    </BrowserView>

                    <MobileView>
                        <StyledHeading>
                            <a href="https://agov.finance/agov_guide_kr.pdf"> <img className="d-md-none" src="Litepaper(Kr).png" width="100" /></a>
                            <a href="https://agov.finance/agov_guide_kr.pdf"> <img className="d-md-none" src="Litepaper(En).png" width="100" /></a>

                        </StyledHeading>
                    </MobileView>



                    {/* <ReadMore href="https://agov.finance/agov_guide_kr.pdf" target="__blank"> &nbsp;&nbsp; {t('announce_kr')}</ReadMore>&nbsp;&nbsp;
            <ReadMore href="https://agov.finance/agov_guide_kr.pdf" target="__blank"> &nbsp;&nbsp; {t('announce')}</ReadMore>&nbsp;&nbsp;<br/><br/> */}
                    <Spacer size="lg" />
                    <Container size="lg">
                        <div style={{
                            border: '1px solid #2C3030'
                        }}>
                        </div>
                    </Container>
                    <Spacer size="lg" />

                    <BrowserView>
                        <StyledHeading>

                            <p> <img className="d-md-none" src={t('newmain_image_2')} width="1394" style={{ marginTop: -4 }} /></p>
                            <Spacer size="lg" />
                            <p> <img className="d-md-none" src={t('newmain_image_3')} width="1394" style={{ marginTop: 16 }} /></p>


                        </StyledHeading>
                    </BrowserView>

                    <MobileView>
                        <StyledHeading>
                            <p> <img className="d-md-none" src={t('newmain_image_2')} width="350" style={{ marginTop: -4 }} /></p>
                            <Spacer size="lg" />
                            <p> <img className="d-md-none" src={t('newmain_image_3')} width="350" style={{ marginTop: 16 }} /></p>

                        </StyledHeading>
                    </MobileView>




                </div>
                {/* <div style={{color: 'rgb(255,255,255,0.6)', textAlign: 'center', marginTop: 3, fontSize: 12 }}> {t('donotcomplain')}{t('projectinbeta')} </div> */}
            </div>
            {/* <Spacer size="lg" /> */}
            {/* </> */}

            {/* <div style={{color: '#fa4c4c'}}>{t('projectinbeta')}</div> */}



            <div id="staketoken">
                <Box className="mt-4">
                    {/* <StyledHeading>{t('selectyourfields')}</StyledHeading>
            <StyledParagraph>{t('earnagov')}</StyledParagraph> */}
                    {/* <SpacerRes>
                <Spacer size="sm" />
            </SpacerRes> */}
                    {/* <StyledInfo>
                <img src={Icon_Tip} alt="Pro Tip"/>
                <div>
                <b>Pro Tip</b>: {t('protip')}<b>{t('protip2')}</b> {t('protip3')}
                </div>
            </StyledInfo> */}
                    {/* <Spacer size="lg" /> */}

                    {/* <FarmCards /> */}

                </Box>
                {/* <Container>
                <Balances />
            </Container> */}
            </div>


            <BrowserView>
                <StyledHeading>



                </StyledHeading>
            </BrowserView>

            <MobileView>
                <StyledHeading>

                </StyledHeading>
            </MobileView>


            <div id="listing">
                <Box className="mt-4">
                    <Spacer size="lg" /><Spacer size="lg" />
                    <StyledHeading>{t('listing_home')}</StyledHeading>
                    {/* <StyledParagraph>{t('listing_comments')}</StyledParagraph> */}
                    <SpacerRes>
                        <Spacer size="lg" />
                        <Spacer size="lg" />
                    </SpacerRes>


                    <BrowserView>
                        <StyledHeading>

                            <a href="https://klayswap.com/app/pool/detail/0x5C6795E72c47D7FA2B0C7A6446D671Aa2e381D1e"> <img className="d-md-none" src="KLAY_logo.png" width="350" style={{ marginTop: -4 }} /></a>
                            <a href="https://www.bithumb.pro/en-us/spot/trade?q=AGOV-USDT"> <img className="d-md-none" src={t('bg_logo')} width="350" style={{ marginTop: -4 }} /></a>
                            {/* <a href="https://info.uniswap.org/token/0xc1ad269f10bf36d6972ee30827051b59d0d2456b"> <img className="d-md-none" src={t('uniswap_logo')} width="350" style={{ marginTop: -4 }} /></a> */}
                            <a href="https://coinmarketcap.com/currencies/agov-answer-governance/"><img className="d-md-none" src={t('cmc_logo')} width="350" style={{ marginTop: -4 }} />  </a> <br />
                            <a href="https://www.coingecko.com/en/coins/answer-governance"><img className="d-md-none" src={t('cgk_logo')} width="350" style={{ marginTop: -4 }} />  </a>
                            <a href="https://www.dapp.com/app/agov"> <img className="d-md-none" src={t('dapp_logo')} width="350" style={{ marginTop: -4 }} />  </a>


                        </StyledHeading>
                    </BrowserView>

                    <MobileView>
                        <StyledHeading>
                            <a href="https://klayswap.com/app/pool/detail/0x5C6795E72c47D7FA2B0C7A6446D671Aa2e381D1e"> <img className="d-md-none" src="KLAY_logo.png" width="150" style={{ marginTop: -4 }} /></a>
                            <a href="https://www.bithumb.pro/en-us/spot/trade?q=AGOV-USDT"> <img className="d-md-none" src={t('bg_logo')} width="150" style={{ marginTop: -4 }} /></a>
                            <a href="https://info.uniswap.org/token/0xc1ad269f10bf36d6972ee30827051b59d0d2456b"> <img className="d-md-none" src={t('uniswap_logo')} width="150" style={{ marginTop: -4 }} /></a>
                            <a href="https://coinmarketcap.com/currencies/agov-answer-governance/"><img className="d-md-none" src={t('cmc_logo')} width="150" style={{ marginTop: -4 }} />  </a><br />
                            <a href="https://www.coingecko.com/en/coins/answer-governance"><img className="d-md-none" src={t('cgk_logo')} width="150" style={{ marginTop: -4 }} />  </a>
                            <a href="https://www.dapp.com/app/agov"> <img className="d-md-none" src={t('dapp_logo')} width="150" style={{ marginTop: -4 }} />  </a>

                        </StyledHeading>
                    </MobileView>

                    <Spacer size="lg" />

                </Box>
            </div>

            <div id="officialcontacts">

                <BrowserView>
                    <StyledHeading>


                        <p> <img className="d-md-none" src="deliverable_goods_4.gif" width="1394" style={{ marginTop: -4 }} /></p>

                    </StyledHeading>
                </BrowserView>

                <MobileView>
                    <StyledHeading>

                        <p> <img className="d-md-none" src="deliverable_goods_4.gif" width="350" style={{ marginTop: -4 }} /></p>
                    </StyledHeading>
                </MobileView>

                <Box className="mt-4">

                    <StyledParagraph></StyledParagraph>
                    <SpacerRes>
                        <Spacer size="sm" />
                    </SpacerRes>
                    <StyledInfo>
                        <span style={{ color: '#ffffff', fontSize: 10 }}>
                            Copyrights by VITALHINT Hongkong Limited <br /> </span>
                    </StyledInfo>


                </Box>
            </div>
        </Page>
    )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  > img{
    width: 20px;
    margin-right: 3px;
  }
  b {
    color: ${(props) => props.theme.color.primary.main};
  }
`
const StyledHeading = styled.h2`
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`
const StyledParagraph = styled.p`
  color: ${(props) => props.theme.color.grey[100]};
  text-align: center;
  margin-top: 10px;
`

const ReadMore = styled.a`
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #00ff8970;
  background: #00ff890d;
  font-size: 18px;
  margin-top: 10px;
`

const StyledLogo = styled.div`
    .d-md-none {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`

const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
`
const SpacerRes = styled.div`
    .sc-iCoHVE {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`
export default Home
