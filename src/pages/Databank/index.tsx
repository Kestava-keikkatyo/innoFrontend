import { Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import makeStyles from '@mui/styles/makeStyles'
import responsibilities from '../../assets/tietopankki/vastuualueet.json'
import { roles } from '../../types/types'
import hp from '../../assets/pictures/henkilostopalveluyritys.svg'
import company from '../../assets/pictures/kayttajayritys.svg'
import worker from '../../assets/pictures/vuokratyontekija.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import topArrow from '../../assets/icons/sivunalkuun.svg'
import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import Ingressi from '../../components/Ingressi'
import AgencyArticles from './Articles/ArticleLists/AgencyArticles'
import BusinessArticles from './Articles/ArticleLists/BusinessArticles'
import WorkerArticles from './Articles/ArticleLists/WorkerArticles'
import AgencyInstructions from './Intructions/InstructionsLists/AgencyInstructions'
import BusinessInstructions from './Intructions/InstructionsLists/BusinessInstructions'
import WorkerInstructions from './Intructions/InstructionsLists/WorkerInstructions'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: '#FFDCBF',
    },
  },
}))

export interface DatabankProps {}
const Databank: React.FC<DatabankProps> = () => {
  const classes = useStyles()
  const [steps, setSteps] = useState(responsibilities.agency)
  const { t } = useTranslation()
  const [colors, setColors] = useState({
    agency: '#C0CFFA',
    business: '#F47D20',
    worker: '#F47D20',
  })
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

  const ingressi_header = 'instructions'
  const summary = 'instructions_summary'

  return (
    <div className={classes.root} style={{ justifyContent: 'center' }}>
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
          sx={{ width: { xs: '90%', md: '60%' } }}
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
            <CardMedia component='img' image={hp} style={{ width: '70%', margin: 'auto' }} />
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
            <CardMedia component='img' image={company} style={{ width: '70%', margin: 'auto' }} />
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
            <CardMedia component='img' image={worker} style={{ width: '70%', margin: 'auto' }} />
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
          return <AgencyInstructions></AgencyInstructions>
        } else if (role === 'business') {
          return <BusinessInstructions></BusinessInstructions>
        } else {
          return <WorkerInstructions></WorkerInstructions>
        }
      })()}
      <Footer></Footer>
    </div>
  )
}
export default Databank
