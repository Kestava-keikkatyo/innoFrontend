import { Container, Typography } from '@mui/material'
import React from 'react'
import eu from '../../assets/partners/eu.png'
import kkk from '../../assets/partners/kestavakeikkatyo.png'
import vipuvoima from '../../assets/partners/vipuvoimaa.jpg'
import ttk from '../../assets/partners/ttk.png'
import { useTranslation } from 'react-i18next';

export interface FirstLandingPageProps {}

const FirstLandingPage: React.FC<FirstLandingPageProps> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="landing-banner" />
      <div className="landing-bg-dark text-white intro-container">
        <Typography variant="h3" className="text-center landing-header-offset">
          KEIKKAKAVERI
        </Typography>
        <Typography variant="h5" className="text-center" style={{fontSize:"178%"}}>
          {t('slogan')}
          
        </Typography>
        <Typography variant="body1" className="text-center" style={{fontSize:"146%"}}>
        {t('intro')}
        </Typography>
      </div>
      <div id="partner-container" className="landing-bg-dark">
        <div id="partner-box">
        <img src={eu} alt="eu" className="landing-partner-invert" />
        <img src={kkk} alt="kestavakeikkatyo" className="landing-partner" />
        <img
          src={vipuvoima}
          alt="vipuvoima rahasto"
          className="landing-partner"
        />
        <img
          src={ttk}
          alt="työturvallisuuskeskus"
          className="landing-partner-invert"
        />
        <img src={eu} alt="eu" className="landing-partner-invert" />
        <img src={kkk} alt="kestavakeikkatyo" className="landing-partner" />
        <img
          src={vipuvoima}
          alt="vipuvoima rahasto"
          className="landing-partner"
        />
        <img
          src={ttk}
          alt="työturvallisuuskeskus"
          className="landing-partner-invert"
        />
        <img src={eu} alt="eu" className="landing-partner-invert" />
        </div>
      </div>
    </Container>
  )
}

export default FirstLandingPage
