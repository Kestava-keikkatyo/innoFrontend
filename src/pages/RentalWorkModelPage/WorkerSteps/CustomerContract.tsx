import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import {Form, Field, Formik} from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormikTextField } from '../../../components/FormField';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container } from '@mui/material';

const CustomerContract = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const tabContent = [
    <div key="tab0">
      Tab 0 content for {t('customer_contract')}
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT (vuokrausyrityksen ja käyttäjäyrityksen edustajat täyttävät yhdessä)</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>Lomake on tarkoitus täyttää henkilöstöpalvelu- ja käyttäjäyrityksen yhteistyössä.
            Lomakkeen täyttämisellä ohjataan käymään olennaisimmat työturvallisuuteen, -terveyteen ja -hyvinvointiin liittyvät
            asiat läpi sekä suunnittelemaan ja sopimaan tärkeistä asioista. Täytetty lomake voidaan liittää asiakassopimuksen
            loppuun ja siihen voidaan myös viitata sopimuksessa. Lomake tarkistetaan ja sitä täydennetään työntekijän
            tilauksen yhteydessä.
          </p>
          <Box display="flex" flexDirection="row">
            <h4>Vuokrausyritys:</h4>
            <FormikTextField label={'Vuokrausyritys'} name={'vuokrausyritys'} type={'text'}></FormikTextField>
            <h4>Käyttäjäyritys:</h4>
            <FormikTextField label={'Käyttäjäyritys'} name={'käyttäjäyritys'} type={'text'}></FormikTextField>
          </Box>
          <label>
            <Field type="checkbox" name="toggle" />
            Lainsäädännöstä seuraavat työturvallisuusvastuut on käyty yhdessä läpi
          </label>
          <Box display="flex" flexDirection="column">
            <h4>TYÖNTEKIJÖILTÄ TYÖSSÄ EDELLYTETTÄVÄ KOULUTUS JA TYÖKOKEMUS SEKÄ TYÖN AMMATTITAITOVAATIMUKSET</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>TYÖN ERITYISPIIRTEET, TYÖSSÄ ESIINTYVÄT HAITTA-JA VAARATEKIJÄT SEKÄ MUUT TYÖTURVALLISUUDEN KANNALTA ERITYISESTI HUOMIOITAVAT SEIKAT
              (esim. terveydentilavaatimukset sekä erityistä varaa aiheuttava työ ja siihen liittyvät terveystarkastukset ja ilmoitus 16-17 vuotiaiden nuorten työntekijäin käyttämisestä vaaralliseen työhön)</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>TYÖTEHTÄVISSÄ TARVITTAVAT HENKILÖNSUOJAIMET (+työvaatetus) JA KUVAUS SIITÄ KUMPI OSAPUOLI VASTAA TARVITTAVIEN SUOJAINTEN TOIMITTAMISESTA TYÖNTEKIJÖILLE JA SUOJAINTEN HUOLLOSTA </h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>KUVAUS VUOKRATYÖNTEKIJÖIDEN PEREHDYTYKSESTÄ JA TYÖNOPASTUKSESTA (ketkä perehdyttävät, kuinka kauan kestää, mitä asioita käydään läpi, mitä perehdytysmateriaalia vuokratyöntekijöille annetaan jne.) </h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>MITEN TOIMITAAN TYÖTAPATURMAN SATTUESSA VUOKRATYÖNTEKIJÄLLE, SAIRAUSPOISSAOLOTILANTEISSA JA MUISSA VAARATILANTEISSA (onnettomuus ja poikkeustilanteet, läheltä piti –tilanteet, väkivalta- ja uhkatilanteet)</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>MITEN VUOKRATYÖNTEKIJÄ ILMOITTAA TYÖTAPATURMISTA, SAIRAUSPOISSAOLOISTA, MUISTA VAARATILANTEISTA TAI MUISTA TURVALLISUUSHAVAINNOISTA (ongelmat, puutteet, turvallisuusaloitteet)</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>MITEN TUETAAN VUOKRATYÖNTEKIJÄN TYÖKYKYÄ (VARHAISEN TUEN MALLI)?</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
          </Box>
          <h4>TYÖNTEKIJÄ OTTAA TYÖTURVALLISUUSASIOISSA YHTEYTTÄ HENKILÖÖN/HENKILÖIHIN:</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi1'} type={'text'}></FormikTextField>
            <h4>Puhelinnumero:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero1'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Työhuoneen sijanti:</h4>
            <FormikTextField label={'Työhuoneen sijainti'} name={'tyohuone1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi2'} type={'text'}></FormikTextField>
            <h4>Puhelinnumero:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero2'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti2'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Työhuoneen sijanti:</h4>
            <FormikTextField label={'Työhuoneen sijainti'} name={'tyohuone2'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>Käyttäjäyritys toimittaa vuokrayritykselle kopion (tarvittaessa):</h4>
            <label>
              <Field type="checkbox" name="toggle" />
              Työterveyshuollon työpaikkaselvityksestä
            </label>
            <label>
              <Field type="checkbox" name="toggle" />
              Työsuojelun toimintaohjelmasta
            </label>
            <label>
              <Field type="checkbox" name="toggle" />
              Pelastussuunnitelmasta
            </label>
            <label>
              <Field type="checkbox" name="toggle" />
              Viimeisimmän riskin arvioinnin tuloksista
            </label>
            <Box display="flex" flexDirection="row">
              <FormikTextField name={'paivamaara'} type={'date'}></FormikTextField>
              <h4>mennessä (päivämäärä)</h4>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>KUVAUS VUOKRAYRITYKSEN JA KÄYTTÄJÄYRITYKSEN VÄLISESTÄ YHTEYDENPIDOSTA ASIAKKUUDEN AIKANA</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
          </Box>
          <h4>VUOKRAYRITYKSEN YHTEYSHENKILÖN YHTEYSTIEDOT</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi3'} type={'text'}></FormikTextField>
            <h4>Puhelinnumero:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero3'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti3'} type={'text'}></FormikTextField>
          </Box>
          <h4>KÄYTTÄJÄYRITYKSEN YHTEYSHENKILÖN YHTEYSTIEDOT</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi4'} type={'text'}></FormikTextField>
            <h4>Puhelinnumero:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero4'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti4'} type={'text'}></FormikTextField>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      Tab 2 content for {t('customer_contract')}
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('customer_contract')}
      </Typography>
      <WorkerStepBase content={tabContent} />
    </Container>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 8,
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  },
  center: {
    textAlign: 'center'
  },
  p: {
    textAlign: 'left',
    marginBottom: '50px'
  }
}));

export default CustomerContract;
