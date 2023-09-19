import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import makeStyles from '@mui/styles/makeStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HuolehdinOmastaJaTyokavereidenTyohyvinvoinnistaJaTurvallisuudesta from '../../Articles/huolehdinOmastaJaTyokavereidenTyohyvinvoinnistaJaTurvallisuudesta '
import EnHairitseTaiKohteleMuitaEpaasiallisesti from '../../Articles/enHairitseTaiKohteleMuitaEpaasiallisesti'
import NoudatanTyopaikanOhjeita from '../../Articles/noudatanTyopaikanOhjeita'
import KaytanTyovalineitaHenkilonsuojaimiaJaTurvalaitteitaAsianmukaisesti from '../../Articles/kaytanTyovalineitaHenkilonsuojaimiaJaTurvalaitteitaAsianmukaisesti'
import IlmoitanHavaitsemistaniVioistaJaPuutteista from '../../Articles/ilmoitanHavaitsemistaniVioistaJaPuutteista'
import TyokyvynTuki from '../tyokyvynTuki'
import Tyotapaturmat from '../tyotapaturmat'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
  },
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: '#FFDCBF',
    },
  },
  gridItem: {
    marginBottom: '20px',
  },
}))

const WorkerArticles = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [isShown, setIsShown] = useState(false)

  const handleReadMore = () => {
    setIsShown((current) => !current)
  }

  return (
    <Grid container style={{ backgroundColor: '#FFDCBF' }}>
      <Grid
        sx={{ width: { xs: '90%', md: '60%' } }}
        style={{
          backgroundColor: '#FFDCBF',
          margin: 'auto',
          alignItems: 'center',
          paddingTop: '30px',
        }}
      >
        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header14')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info14')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <HuolehdinOmastaJaTyokavereidenTyohyvinvoinnistaJaTurvallisuudesta></HuolehdinOmastaJaTyokavereidenTyohyvinvoinnistaJaTurvallisuudesta>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header15')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info15')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <EnHairitseTaiKohteleMuitaEpaasiallisesti></EnHairitseTaiKohteleMuitaEpaasiallisesti>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header16')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info16')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <NoudatanTyopaikanOhjeita></NoudatanTyopaikanOhjeita>}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header17')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info17')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <KaytanTyovalineitaHenkilonsuojaimiaJaTurvalaitteitaAsianmukaisesti></KaytanTyovalineitaHenkilonsuojaimiaJaTurvalaitteitaAsianmukaisesti>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header18')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info18')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <IlmoitanHavaitsemistaniVioistaJaPuutteista></IlmoitanHavaitsemistaniVioistaJaPuutteista>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header20')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info20')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <TyokyvynTuki></TyokyvynTuki>}
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{ borderRadius: '25px', backgroundColor: '#FDFDFD', marginBottom: '20px' }}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{ fontWeight: 'bold', backgroundColor: '#FDFDFD' }}>
              {t('header21')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'block',
              backgroundColor: '#FDFDFD',
              wordWrap: 'break-word',
              borderRadius: '25px',
            }}
          >
            <li style={{ listStyleType: 'none' }}>{t('info21')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <Tyotapaturmat></Tyotapaturmat>}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

export default WorkerArticles
