import { Container, Typography } from '@material-ui/core'
import React from 'react'
import eu from '../../assets/partners/eu.png'
import kkk from '../../assets/partners/kestavakeikkatyo.png'
import vipuvoima from '../../assets/partners/vipuvoimaa.jpg'
import ttk from '../../assets/partners/ttk.png'

export interface FirstLandingPageProps {}

const FirstLandingPage: React.FC<FirstLandingPageProps> = () => {
  return (
    <Container>
      <div className="landing-banner" />
      <div className="landing-bg-dark text-white intro-container">
        <Typography variant="h3" className="text-center landing-header-offset">
          KEIKKAKAVERI
        </Typography>
        <Typography variant="h5" className="text-center" style={{fontSize:"178%"}}>
          Kun henkilöstö voi hyvin, työ sujuu.
        </Typography>
        <Typography variant="body1" className="text-center" style={{fontSize:"146%"}}>
          Keikkakaveri tarjoaa tietoa, koulutusta ja välineitä turvallisten ja
          terveellisten työolojen kehittämiseen ja ylläpitämiseen.
        </Typography>
      </div>
      <div id="partner-container" className="landing-bg-dark">
        <div id="partner-box"></div>
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
    </Container>
  )
}

export default FirstLandingPage
