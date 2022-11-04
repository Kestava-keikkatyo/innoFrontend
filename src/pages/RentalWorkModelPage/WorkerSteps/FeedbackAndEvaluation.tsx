import {
  List,
  ListItem,
  ListItemText,
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
import { Container } from '@mui/material';
import i18next from 'i18next';
import vastuualueet from '../../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../../assets/tietopankki/vastuualueet_en.json';

const FeedbackAndEvaluation = () => {
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
                    {Vastuualueet.yhtenäinen.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>LOMAKE 4 – TOIMINNAN ARVIOINTI (käyttäjäyrityksen ja vuokrayrityksen edustajat täyttävät)</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>Henkilöstöpalveluyrityksen ja käyttäjäyrityksen edustajat täyttävät lomakkeen yhdessä.
            Loppupalaverissa tehdään yhteenveto toimeksiannon ja erityisesti työturvallisuuden varmistamisen sujumisesta.
            Lomakkeen alussa on muistilista toiminnan arvioinnissa läpikäytävistä asioista.
            Lomakkeen loppuosaan tulee kirjoittaa ylös toiminnan arvioinnin ja yhteisen analysoinnin aikana esiinnousseet
            olennaisimmat asiat (sekä toimeksiannon onnistumiset että kehittämistä vaativat asiat).</p>
          <p className={classes.p}>Täytetystä lomakkeesta (tai sen kopiosta) tulee jäädä oma kappale molemmille osapuolille.
            Lomakkeeseen kirjattujen asioiden pohjalta yritykset voivat kehittää työturvallisuustoimintaansa seuraavassa
            vuokratyötoimeksiannossa. Palautteet on hyvä käydä läpi myös vuokratyöntekijän kanssa</p>
          <h4>Seuraavat asiat on käyty läpi toimeksiannon päätyttyä tehdyssä jälkiarvioinnissa:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check1" />
              Toimeksiannon aikana vuokratyöntekijöiltä saatu turvallisuuspalaute (työtapaturmat, muut vaaratilanteet, aloitteet, puutteet/ongelmat)
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              Vuokratyöntekijöiden ammattitaidon ja osaamisen riittävyys suhteessa työtehtäviin
            </label>
            <label>
              <Field type="checkbox" name="check3" />
              Vuokratyöntekijöiden työssä suoriutuminen mukaanlukien työturvallisuusasiat
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              Vuokratyöntekijöille sattuneet työtapaturmat ja niiden tutkintaraportit
            </label>
            <label>
              <Field type="checkbox" name="check5" />
              Käyttäjäyrityksen palaute vuokrayritykselle tämän toiminnasta toimeksiannon aikana
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              Vuokrayrityksen (ja vuokratyöntekijöiden) palaute käyttäjäyritykselle tämän toiminnasta toimeksiannon aikana
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              Tiedonkulun toimivuus toimeksiannon aikana (erityisesti vuokra- ja käyttäjäyrityksen välillä)
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              Annetun perehdytyksen ja työnopastuksen riittävyys (määrä ja laatu)
            </label>
            <label>
              <Field type="checkbox" name="check9" />
              Työssä käytettyjen henkilönsuojainten ja turvavälineiden riittävyys
            </label>
            <h4>YHTEENVETO TOIMEKSIANNON (TYÖTURVALLISUUTEEN LIITTYVISTÄ) ONNISTUMISISTA JA HYVIN SUJUNEISTA ASIOISTA</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>YHTEENVETO TOIMEKSIANNON AIKANA ILMENNEISTÄ ONGELMISTA/PARANTAMISTA VAATIVISTA ASIOISTA</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>MITEN OMAA TOIMINTAA VOIDAAN KEHITTÄÄ, JOTTA EDELLÄ MAINITTUJA ASIOITA SAADAAN JATKOSSA PARANNETTUA</h4>
            <h4>VUOKRAYRITYS</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>KÄYTTÄJÄYRITYS</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
            <h4>YHTEISTYÖ</h4>
            <Field component="textarea" rows="10" placeholder='Kirjoita...' value=''></Field>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      Tab 2 content for {t('feedback_evaluation')}
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('feedback_evaluation')}
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

export default FeedbackAndEvaluation;
