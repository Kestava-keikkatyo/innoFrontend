import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import Typography from '@mui/material/Typography'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CardMedia,
  Container,
  Grid,
} from '@mui/material'
import responsibilities from '../../assets/tietopankki/vastuualueet.json'
import { roles } from '../../types/types'
import hp from '../../assets/pictures/henkilostopalveluyritys.svg'
import company from '../../assets/pictures/kayttajayritys.svg'
import worker from '../../assets/pictures/vuokratyontekija.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'
import topArrow from '../../assets/icons/sivunalkuun.svg'
import Footer from '../../components/Footer'
import Ingressi from '../../components/Ingressi'
import Article1 from './Articles/jaettuTyosuojeluvastuu'
import Article2 from './Articles/yleisvastuuTyoturvallisuudestaHp'
import Article3 from './Articles/tyoaikalainNoudattaminen'
import Article4 from './Articles/tyontekijoidenVakuuttaminenTyotapaturmienJaAmmattitautienVaralta'
import AgencyArticles from './Articles/ArticleLists/AgencyArticles'
import BusinessArticles from './Articles/ArticleLists/BusinessArticles'
import WorkerArticles from './Articles/ArticleLists/WorkerArticles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
  },
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: '#DBE4FC',
    },
  },
}))

export interface RoleResponsibilitiesProps {}

const RoleResponsibilities: React.SFC<RoleResponsibilitiesProps> = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [steps, setSteps] = useState(responsibilities.agency)
  const [header, setHeader] = useState<string>('Vuokratyöntekijä')
  const { t } = useTranslation()
  const [colors, setColors] = useState({
    agency: '#C0CFFA',
    business: '#F47D20',
    worker: '#F47D20',
  })
  const [isShown, setIsShown] = useState(false)
  const [role, setRole] = useState(roles.Agency)

  const handleSwitch = (role: roles) => {
    switch (role) {
      case roles.Agency:
        setColors({ ...colors, agency: '#C0CFFA', business: '#F47D20', worker: '#F47D20' })
        setSteps(responsibilities.agency)
        setRole(roles.Agency)
        break
      case roles.Business:
        setColors({ ...colors, agency: '#F47D20', business: '#C0CFFA', worker: '#F47D20' })
        setSteps(responsibilities.business)
        setRole(roles.Business)
        break
      case roles.Worker:
        setColors({ ...colors, agency: '#F47D20', business: '#F47D20', worker: '#C0CFFA' })
        setSteps(responsibilities.worker)
        setRole(roles.Worker)
        break
    }
  }

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ingressi_header = 'responsibilities'
  const summary = 'responsibilities_summary'

  const handleReadMore = () => {
    setIsShown((current) => !current)
    // setIsShown(true);
  }

  return (
    <Grid container className={classes.root}>
      {/* Ingressi */}
      <Ingressi header={ingressi_header} summary={summary}></Ingressi>

      {/* Pictures and buttons (agency, business, worker) */}
      <Container
        style={{
          backgroundColor: '#F47D20',
          maxWidth: 'none',
          paddingTop: '15px',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Grid
          container
          sx={{ width: { xs: '100%', sm: '90%', md: '60%' } }}
          spacing={0}
          justifyContent='space-evenly'
          style={{ flexDirection: 'row', flexWrap: 'nowrap' }}
        >
          <Grid
            sx={{ flexDirection: 'column', wrap: 'no-wrap' }}
            item
            xs={4}
            sm={4}
            md={4}
            style={{ paddingLeft: '0', paddingBottom: '32px' }}
          >
            <CardMedia
              component='img'
              image={hp}
              style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
            />
            <Button
              onClick={() => handleSwitch(roles.Agency)}
              style={{ backgroundColor: colors.agency }}
              className='responsibilities-button'
            >
              {t('agency')}
            </Button>
          </Grid>
          <Grid
            sx={{ flexDirection: 'column', wrap: 'no-wrap' }}
            item
            xs={4}
            sm={4}
            md={4}
            style={{ paddingLeft: '0', paddingBottom: '32px' }}
          >
            <CardMedia
              component='img'
              image={company}
              style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
            />
            <Button
              onClick={() => handleSwitch(roles.Business)}
              style={{ backgroundColor: colors.business }}
              className='responsibilities-button'
            >
              {t('business')}
            </Button>
          </Grid>
          <Grid
            sx={{ flexDirection: 'column', wrap: 'no-wrap' }}
            item
            xs={4}
            sm={4}
            md={4}
            style={{ paddingLeft: '0', paddingBottom: '32px' }}
          >
            <CardMedia
              component='img'
              image={worker}
              style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
            />
            <Button
              onClick={() => handleSwitch(roles.Worker)}
              style={{ backgroundColor: colors.worker }}
              className='responsibilities-button'
            >
              {t('worker')}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Content (accordion) */}

      {(() => {
        if (role === 'agency') {
          return <AgencyArticles></AgencyArticles>
        } else if (role === 'business') {
          return <BusinessArticles></BusinessArticles>
        } else {
          return <WorkerArticles></WorkerArticles>
        }
      })()}

      <Footer></Footer>
    </Grid>
  )
}
export default RoleResponsibilities

/*{step.details2}
                   <br></br><br></br>
                   {step.details3}
                   <br></br><br></br>
                   {step.details4}
                   <br></br><br></br>
                   {step.details5}
                   <p>Keikkakaverin sisäiset linkit</p>
                   <p>Lomakkeisiin:</p>
                   <p>Lisätietoa:</p>
                   
                    <div style={{marginBottom: '20px'}}>{step.details2}</div>
                 <div style={{marginBottom: '20px'}}>{step.details3}</div>
                 <div style={{marginBottom: '20px'}}>{step.details4}</div>
                 <div style={{marginBottom: '20px'}}>{step.details5}</div>
                 <div style={{marginBottom: '20px'}}>{step.details6}</div>
                 <div style={{marginBottom: '20px'}}>{step.details7}</div>
                 <div style={{marginBottom: '20px'}}>{step.details8}</div>
                 <div style={{marginBottom: '20px'}}>{step.details9}</div>
                 <div style={{marginBottom: '20px'}}>{step.details10}</div>
                 <div style={{marginBottom: '20px'}}>{step.details11}</div>
                 <div style={{marginBottom: '20px'}}>{step.details12}</div>*/
