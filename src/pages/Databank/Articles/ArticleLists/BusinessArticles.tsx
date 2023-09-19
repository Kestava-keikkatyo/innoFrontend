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
import JaettuTyosuojeluvastuu from '../jaettuTyosuojeluvastuu'
import TyoaikalainNoudattaminen from '../tyoaikalainNoudattaminen'
import Henkilosuojaimet from '../henkilosuojaimet'
import Tilaajavastuu from '../tilaajavastuu'
import TietojenAntaminenHenkilostopalveluyritykselle from '../tietojenAntaminenHenkilostopalveluyritykselle '
import YleisvastuuTyoturvallisuudestaKayttajayritys from '../yleisvastuuTyoturvallisuudestaKayttajayritys'
import TasaArvonJaYhdenvertaisuudenEdistaminenKayttajayritys from '../tasaArvonJaYhdenvertaisuudenEdistaminenKayttajayritys'

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
  gridItem: {
    marginBottom: '20px',
  },
}))

const BusinessArticles = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [isShown, setIsShown] = useState(false)

  const handleReadMore = () => {
    setIsShown((current) => !current)
  }

  return (
    <Grid container style={{ backgroundColor: '#DBE4FC' }}>
      <Grid
        sx={{ width: { xs: '90%', md: '60%' } }}
        style={{
          backgroundColor: '#DBE4FC',
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
              {t('header1')}
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
            <li style={{ listStyleType: 'none' }}>{t('info1')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <JaettuTyosuojeluvastuu></JaettuTyosuojeluvastuu>}
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
              {t('header10')}
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
            <li style={{ listStyleType: 'none' }}>{t('info10')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <Tilaajavastuu></Tilaajavastuu>}
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
              {t('header11')}
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
            <li style={{ listStyleType: 'none' }}>{t('info11')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <TietojenAntaminenHenkilostopalveluyritykselle></TietojenAntaminenHenkilostopalveluyritykselle>
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
              {t('header12')}
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
            <li style={{ listStyleType: 'none' }}>{t('info12')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <YleisvastuuTyoturvallisuudestaKayttajayritys></YleisvastuuTyoturvallisuudestaKayttajayritys>
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
              {t('header3')}
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
            <li style={{ listStyleType: 'none' }}>{t('info3')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <TyoaikalainNoudattaminen></TyoaikalainNoudattaminen>}
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
              {t('header13')}
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
            <li style={{ listStyleType: 'none' }}>{t('info13')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <TasaArvonJaYhdenvertaisuudenEdistaminenKayttajayritys></TasaArvonJaYhdenvertaisuudenEdistaminenKayttajayritys>
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
              {t('header9')}
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
            <li style={{ listStyleType: 'none' }}>{t('info9')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && <Henkilosuojaimet></Henkilosuojaimet>}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

export default BusinessArticles
