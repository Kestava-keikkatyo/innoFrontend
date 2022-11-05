import {
  List,
  ListItem,
  ListItemText,
  Container,
}from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import {Form, Field, Formik} from 'formik';
import Box from '@mui/material/Box';
import { FormikTextField } from '../../../components/FormField';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import i18next from 'i18next';
import vastuualueet from '../../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../../assets/tietopankki/vastuualueet_en.json';
import ContractOfEmploymentGP from './GoodPractices/ContractOfEmploymentGP';


const ContractOfEmployment = () => {
  const { t } = useTranslation();
  let Vastuualueet = vastuualueet;
  if(i18next.language == 'en') {
    Vastuualueet = vastuualueet_en;
  } else {
    Vastuualueet = vastuualueet;
  }
  const classes = useStyles();

  const tabContent = [
    <div key="tab0">
        <List id="modal-modal-description">
                    {/* Yhtenäiset vastuut lista */}
                    {Vastuualueet.vastuualueet_worker3.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS (vuokrausyrityksen perehdyttäjä täyttää)</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>Henkilöstöpalveluyrityksen perehdyttäjä täyttää lomakkeen vuokratyöntekijän perehdytyksen
            yhteydessä. Lomakkeen aihealueiden luettelo toimii muistilistana perehdytyksessä läpikäytävistä asioista.
            Lomakkeen jälkimmäiseen osaan kirjataan työntekijälle tärkeiden henkilöiden yhteystiedot.
          </p>
          <p className={classes.p}>Kopio täytetystä lomakkeesta tulee antaa työntekijälle ja lähettää myös käyttäjäyritykselle.
            Täytetystä lomakkeesta käyttäjäyritys näkee mitä asioita yleisperehdytys on sisältänyt.
            Tämä auttaa käyttäjäyritystä työnopastuksen sisällön suunnittelussa.
          </p>
          <Box display="flex" flexDirection="row">
            <h4>Vuokrausyritys ja perehdytyksen antaja:</h4>
            <FormikTextField label={'Vuokrausyritys'} name={'vuokrausyritys'} type={'text'}></FormikTextField>
            <h4>Pvm:</h4>
            <FormikTextField label={'Päivämäärä'} name={'paivamaara'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check1" />
              Kasvotusten
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              Puhelimitse
            </label>
            <h4>Työntekijä:</h4>
            <FormikTextField label={'Työntekijä'} name={'tyontekija'} type={'text'}></FormikTextField>
          </Box>
          <h4>Yleisperehdytys annettu</h4>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check3" />
              Ylityökäytäntö
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              Työtehtävä ja siinä vaadittava osaaminen
            </label>
          </Box>
          <h4>Seuraavat asiat on käyty läpi yleisperehdytyksen yhteydessä kaikille vuokratyöntekijöille:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check5" />
              Työssä tarvittavat henkilönsuojaimet(+työvaatetus) ja niiden saaminen käyttöön
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              Kenelle työntekijä ilmoittaa havaitsemistaan vioista ja puutteista
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              Olennaisimmat asiat käyttäjäyrityksen työpaikkaselvityksestä/riskien arvioinnista
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              Työturvallisuuslain mukaiset työntekijän velvoitteet ja oikeus pidättäytyä työstä
            </label>
          </Box>
          <h4>Seuraavat asiat on käyty läpi yleisperehdytyksen yhteydessä uusille vuokratyöntekijöille (jotka saavat ensimmäistä kertaa yleisperehdytyksen):</h4>
          <label>
            <Field type="checkbox" name="check9" />
            Toimintaohjeet tapaturman tai muun vaaratilanteen sattuessa vuokratyöntekijälle
          </label>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check10" />
              Vuokrayrityksen työsuojeluvaltuutettu
            </label>
            <label>
            <Field type="checkbox" name="check11" />
            Toimintaohjeet vuokratyöntekijän sairastuessa
          </label>
          </Box>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check12" />
              Työterveyshuollon palvelut
            </label>
            <h4>Yhteystiedot:</h4>
            <FormikTextField label={'Yhteystiedot'} name={'yhteystiedot1'} type={'text'}></FormikTextField>
            <h4>Puh:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Yhteystiedot:</h4>
            <FormikTextField label={'Työntekijä'} name={'yhteystiedot2'} type={'text'}></FormikTextField>
            <h4>Puh:</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero2'} type={'text'}></FormikTextField>
          </Box>
          <h4>Työkyvyn varhaisen tuen malli ja sairauspoissaoloseuranta</h4>
          <h4>Esimiehen rooli</h4>
          <h4>VUOKRAYRITYKSEN YHTEYSHENKILÖN YHTEYSTIEDOT</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi1'} type={'text'}></FormikTextField>
            <h4>Puh.</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero3'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Käyttäjäyrityksen osoite:</h4>
            <FormikTextField label={'Osoite'} name={'osoite'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>TYÖNTEKIJÄN PÄÄSY TYÖPAIKKAAN (kulkuyhteydet, kulkuluvat jne.)</h4>
            <Field component="textarea" rows="4" placeholder='Kirjoita...' value=''></Field>
          </Box>
          <h4>KÄYTTÄJÄYRITYKSEN YHTEYSHENKILÖN (JOLLE ILMOITTAUDUTAAN) YHTEYSTIEDOT</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi2'} type={'text'}></FormikTextField>
            <h4>Puh.</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero4'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti2'} type={'text'}></FormikTextField>
          </Box>
          <label>
            <Field type="checkbox" name="check13" />
            Annettu työntekijälle perehdytyksen päätteeksi
          </label>
          <Box display="flex" flexDirection="row">
            <h4>Työhuone/Ilmoittautumispaikka:</h4>
            <FormikTextField label={'Työhuone/Ilmoittautumispaikka'} name={'tyohuonepaikka'} type={'text'}></FormikTextField>
            <h4>Ilmoittautumisaika Pvm:</h4>
            <FormikTextField label={'Ilmoittautumisaika'} name={'ilmoittautumisaika'} type={'text'}></FormikTextField>
            <h4>Klo:</h4>
            <FormikTextField label={'Kello'} name={'kello'} type={'text'}></FormikTextField>
          </Box>
          <h4>Täytetyn lomakkeen kopio on:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check14" />
              Lähetetty työntekijälle postitse/sähköpostitse
            </label>
            <label>
              <Field type="checkbox" name="check15" />
              Annettu työntekijälle perehdytyksen päätteeksi
            </label>
          </Box>
          <h4>ALLEKIRJOITUKSET</h4>
          <Box display="flex" flexDirection="row">
            <h4>Perehdyttäjä:</h4>
            <FormikTextField label={'Perehdyttäjä'} name={'perehdyttaja'} type={'text'}></FormikTextField>
            <h4>Perehdytetty:</h4>
            <FormikTextField label={'Perehdytetty'} name={'perehdytetty'} type={'text'}></FormikTextField>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      <ContractOfEmploymentGP/>
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('contract_of_employment')}
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

export default ContractOfEmployment;
