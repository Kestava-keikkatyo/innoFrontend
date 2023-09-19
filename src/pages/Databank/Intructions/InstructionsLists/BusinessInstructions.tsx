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
import Jaettu_tyosuojeluvastuu from '../../Articles/jaettuTyosuojeluvastuu'
import Tilaajavastuu from '../../Articles/tilaajavastuu'
import TietojenAntaminenHp from '../../Articles/tietojenAntaminenHenkilostopalveluyritykselle '
import KayttajayrityksenYleisvastuuTyoturvallisuudesta from '../../Articles/yleisvastuuTyoturvallisuudestaKayttajayritys'
import TyoaikalainNoudattaminen from '../../Articles/tyoaikalainNoudattaminen'
import TasaArvonJaYhdenvertaisuudenEdistaminen from '../../Articles/tasaArvonJaYhdenvertaisuudenEdistaminenHp'
import Henkilosuojaimet from '../../Articles/henkilosuojaimet'
import TyokyvynTuki from '../../Articles/tilaajavastuu'
import Tyotapaturmat from '../../Articles/tilaajavastuu'

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

const BusinessInstructions = () => {
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

            {isShown && <Jaettu_tyosuojeluvastuu></Jaettu_tyosuojeluvastuu>}
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
              {t('header2')}
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
            <li style={{ listStyleType: 'none' }}>{t('info2')}</li>
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

            {isShown && <TietojenAntaminenHp></TietojenAntaminenHp>}
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
              <KayttajayrityksenYleisvastuuTyoturvallisuudesta></KayttajayrityksenYleisvastuuTyoturvallisuudesta>
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
              {t('header6')}
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
            <li style={{ listStyleType: 'none' }}>{t('info6')}</li>
            <Button style={{ padding: '0', margin: '20px 0px 20px 0px' }} onClick={handleReadMore}>
              Lue lisää
            </Button>

            {isShown && (
              <TasaArvonJaYhdenvertaisuudenEdistaminen></TasaArvonJaYhdenvertaisuudenEdistaminen>
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

export default BusinessInstructions
