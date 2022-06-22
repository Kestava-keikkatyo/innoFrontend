import { Container, Typography } from '@mui/material'
import React from 'react'
import eu from '../../assets/partners/eu.png'
import kkk from '../../assets/partners/kestavakeikkatyo.png'
import vipuvoima from '../../assets/partners/vipuvoimaa.jpg'
import ttk from '../../assets/partners/ttk.png'
import { useTranslation } from 'react-i18next';
import Spacing from '../../components/Spacing';

export interface FirstLandingPageProps {}

const FirstLandingPage: React.FC<FirstLandingPageProps> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Spacing m3 p2 />
      <div className="landing-banner" />
      <div className="landing-bg-dark text-white intro-container">
        <Typography variant="h1" className="text-center landing-header-offset">
        KEIKKAKAVERI
        </Typography>
        <Typography variant="h2" className="text-center landing-text">
        {t('slogan')} 
        </Typography>
        <Typography variant="body1" className="text-center landing-text2">
        {t('intro')}
        </Typography>
      </div>
      <div id="partner-container" className="landing-bg-dark">
        <div id="partner-box">
          <img src={eu} alt="eu" className="landing-partner-invert"
           style={{width: "fit-content", maxWidth: "14%", marginRight: "1%"}} />
          <img src={kkk} alt="kestavakeikkatyo" className="landing-partner"
           style={{width: "fit-content", maxWidth: "16%", marginRight: "1%"}} />
          <img src={vipuvoima} alt="vipuvoima rahasto" className="landing-partner" 
          style={{width: "fit-content", maxWidth: "20%", marginRight: "1%"}} />
          <img src={ttk} alt="työturvallisuuskeskus" className="landing-partner-invert" 
          style={{width: "fit-content", maxWidth: "50%"}} />
        </div>
      </div>
    </Container>
  )
}

export default FirstLandingPage
