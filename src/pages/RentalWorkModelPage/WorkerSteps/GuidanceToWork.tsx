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

const GuidanceToWork = () => {
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
      <h2 className={classes.center}>LOMAKE 3 – TYÖNOPASTUS (käyttäjäyrityksen työnopastaja täyttää)</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>Käyttäjäyrityksen perehdyttäjä täyttää lomakkeen vuokratyöntekijän työnopastuksen yhteydessä.
            Lomakkeen aihealueiden luettelo toimii tarkistuslistana työnopastuksessa läpikäytävistä asioista.
            Lomakkeeseen täytetään myös käyttäjäyrityksessä vuokratyöntekijän esimiehenä toimivan henkilön yhteystiedot.</p>
          <p className={classes.p}>Kopio täytetystä lomakkeesta tulee antaa työntekijälle ja henkilöstöpalveluyritykselle.
            Täytetty lomake toimii eräänlaisena todisteena käyttäjäyrityksen työnopastuksen antamisesta.</p>
          <Box display="flex" flexDirection="row">
            <h4>Käyttäjäyritys ja työnopastuksen antaja:</h4>
            <FormikTextField label={'Käyttäjäyritys'} name={'kayttajayritys'} type={'text'}></FormikTextField>
            <h4>Pvm:</h4>
            <FormikTextField label={'Päivämäärä'} name={'paivamaara1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Työntekijä:</h4>
            <FormikTextField label={'Työntekijä'} name={'tyontekija'} type={'text'}></FormikTextField>
          </Box>
          <h4>Seuraavat asiat on käyty läpi käyttäjäyrityksen työntekijälle antamassa työnopastuksessa:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check1" />
              Työtehtävät ja turvalliset työtavat
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              Työssä esiintyvät haitta- ja vaaratekijät sekä niiltä suojautuminen
            </label>
            <label>
              <Field type="checkbox" name="check3" />
              Työajat ja tauot
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              Turvavarusteiden ja henkilönsuojainten käyttäminen ja huoltaminen
            </label>
            <label>
              <Field type="checkbox" name="check5" />
              Siisteys ja järjestys
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              Toiminta onnettomuus- ja poikkeustilanteissa
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              Turvallisuushavaintojen tekeminen (työtapaturmat ja muut vaaratilanteet, aloitteet, puutteet/ongelmat)
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              Ensiapukaapit, alkusammuttimet, poistumistiet jne.
            </label>
            <label>
              <Field type="checkbox" name="check9" />
              Henkilöstötilat (savuttomuus ym.)
            </label>
            <label>
              <Field type="checkbox" name="check10" />
              Erityishuomioitavat asiat
            </label>
            <label>
              <Field type="checkbox" name="check11" />
              Työn hyvä ergonomia (tuolien/pöytien/työtasojen säätäminen, työasennot ja liikkeet, nostotekniikat jne.)
            </label>
            <label>
              <Field type="checkbox" name="check12" />
              Tiedotuskäytännöt (ilmoitustaulut, sähköpostilistat jne.)
            </label>
            <label>
              <Field type="checkbox" name="check13" />
              Osallistuminen käyttäjäyrityksen kokouksiin ja muuhun viikottaiseen toimintaan
            </label>
            <label>
              <Field type="checkbox" name="check14" />
              Lupa-asiat (kulkukortit, tulityökortit jne.)
            </label>
            <label>
              <Field type="checkbox" name="check15" />
              Käyttäjäyrityksen työsuojeluvaltuutettu
            </label>
            <label>
              <Field type="checkbox" name="check16" />
              Keneltä kysytään apua sitä tarvittaessa
            </label>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi1'} type={'text'}></FormikTextField>
            <h4>Puh.</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero1'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Työhuone/työpiste:</h4>
            <FormikTextField label={'Työhuone/työpiste'} name={'tyohuonepiste1'} type={'text'}></FormikTextField>
          </Box>
          <h4>Käyttäjäyrityksen esimiehen (jos eri henkilö kuin edellinen) yhteystiedot:</h4>
          <Box display="flex" flexDirection="row">
            <h4>Nimi:</h4>
            <FormikTextField label={'Nimi'} name={'nimi2'} type={'text'}></FormikTextField>
            <h4>Puh.</h4>
            <FormikTextField label={'Puhelinnumero'} name={'puhelinnumero2'} type={'text'}></FormikTextField>
            <h4>Sähköposti:</h4>
            <FormikTextField label={'Sähköposti'} name={'sahkoposti2'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>Työhuone/työpiste:</h4>
            <FormikTextField label={'Työhuone/työpiste'} name={'tyohuonepiste2'} type={'text'}></FormikTextField>
          </Box>
          <h4>ALLEKIRJOITUKSET</h4>
          <Box display="flex" flexDirection="row">
            <h4>Perehdyttäjä:</h4>
            <FormikTextField label={'Perehdyttäjä'} name={'perehdyttaja'} type={'text'}></FormikTextField>
            <h4>Perehdytetty:</h4>
            <FormikTextField label={'Perehdytetty'} name={'perehdytetty'} type={'text'}></FormikTextField>
          </Box>

          <h2 className={classes.center}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa</h2>
          <p className={classes.p}>Tilanteissa, joissa työntekijä tarvitaan nopeasti tekemään työtä, voidaan osa
            perehdytyksestä jättää tehtäväksi työn aloittamisen jälkeen.
            Turvallisuuteen liittyvät tärkeimmät asiat tulee kuitenkin aina kertoa työntekijälle heti alussa.
            Tässä lomakkeessa on asiat, jotka ainakin tulee käydä läpi ennen työn aloitusta</p>
          <h3>Henkilöstöpalveluyrityksen perehdytys kiireellisessä tapauksessa</h3>
          <Box display="flex" flexDirection="column">
            <h4>Henkilöstöpalveluyrityksen nimi:</h4>
            <FormikTextField label={'Henkilöstöpalveluyritys'} name={'henkilostopalveluyritys'} type={'text'}></FormikTextField>
            <h4>Perehdyttäjä:</h4>
            <FormikTextField label={'Perehdyttäjä'} name={'perehdyttaja'} type={'text'}></FormikTextField>
            <h4>Työntekijä:</h4>
            <FormikTextField label={'Työntekijä'} name={'tyontekija'} type={'text'}></FormikTextField>
            <h4>Pvm:</h4>
            <FormikTextField label={'Päivämäärä'} name={'paivamaara2'} type={'text'}></FormikTextField>
            <h4>Työtehtävä ja siinä vaadittava osaaminen:</h4>
            <FormikTextField label={'Osaaminen'} name={'osaaminen'} type={'text'}></FormikTextField>
            <h4>Työssä tarvittavat henkilönsuojaimet ja työvaatetus ja mistä ne saa:</h4>
            <FormikTextField label={'Henkilönsuojaimet ja työvaatetus'} name={'suojaimetjavaatetus'} type={'text'}></FormikTextField>
            <h4>Työhön liittyvät turvallisuus- ja terveysriskit:</h4>
            <FormikTextField label={'Turvallisuus- ja terveysriskit'} name={'turvallisuusjaterveys'} type={'text'}></FormikTextField>
            <h4>Henkilöstöpalveluyrityksen yhteishenkilön yhteystiedot:</h4>
            <FormikTextField label={'Yhteystiedot'} name={'yhteystiedot1'} type={'text'}></FormikTextField>
            <h4>Käyttäjäyrityksen osoite ja ohjeet työpaikalle pääsemiseen (esim. kulkuluvat):</h4>
            <FormikTextField label={'Osoite ja ohjeet'} name={'osoitejaohjeet'} type={'text'}></FormikTextField>
            <h4>Käyttäjäyrityksen yhteyshenkilön yhteystiedot:</h4>
            <FormikTextField label={'Yhteystiedot'} name={'yhteystiedot2'} type={'text'}></FormikTextField>
          </Box>
          <h3>Käyttäjäyrityksen työnopastus kiireellisessä tapauksessa</h3>
          <Box display="flex" flexDirection="column">
            <h4>Käyttäjäyrityksen nimi:</h4>
            <FormikTextField label={'Käyttäjäyrityksen nimi'} name={'kayttajayritysnimi'} type={'text'}></FormikTextField>
            <h4>Työnopastaja:</h4>
            <FormikTextField label={'Työnopastaja'} name={'tyonopastaja'} type={'text'}></FormikTextField>
            <h4>Työntekijä:</h4>
            <FormikTextField label={'Työntekijä'} name={'tyontekija2'} type={'text'}></FormikTextField>
            <h4>Työtehtävät ja turvalliset työtavat:</h4>
            <FormikTextField label={'Työtehtävät'} name={'tyotehtavat'} type={'text'}></FormikTextField>
            <h4>Työssä esiintyvät haitta- ja vaaratekijät ja niiltä suojautuminen:</h4>
            <FormikTextField label={'Haitta- ja vaaratekijät'} name={'haittajavaara'} type={'text'}></FormikTextField>
            <h4>Työajat ja tauot:</h4>
            <FormikTextField label={'Työajat ja tauot'} name={'ajatjatauot'} type={'text'}></FormikTextField>
            <h4>Turvavarusteiden ja henkilönsuojainten käyttäminen:</h4>
            <FormikTextField label={'Turvavarusteet ja henkilönsuojaimet'} name={'varusteetjasuojaimet'} type={'text'}></FormikTextField>
            <h4>Toiminta onnettomuus- ja poikkeustilanteissa:</h4>
            <FormikTextField label={'Toiminta onnettomuus- ja poikkeustilanteissa'} name={'onnettumuusjapoikkeus'} type={'text'}></FormikTextField>
            <h4>Ensiapukaapit, alkusammuttimet, poistumistiet jne.:</h4>
            <FormikTextField label={'Ensiapukaapit, alkusammuttimet, poistumiestiet'} name={'kaapitsammuttimet'} type={'text'}></FormikTextField>
            <h4>Henkilöstötilat:</h4>
            <FormikTextField label={'Henkilöstötilat'} name={'henkilostotilat'} type={'text'}></FormikTextField>
            <h4>Erityishuomioitavat asiat:</h4>
            <FormikTextField label={'Erityishuomioitavat asiat'} name={'erityishuomiot'} type={'text'}></FormikTextField>
            <h4>Tiedotuskäytännöt:</h4>
            <FormikTextField label={'Tiedotuskäytännöt'} name={'tiedotuskaytannot'} type={'text'}></FormikTextField>
            <h4>Lupa-asiat (kulkukortit, tulityökortit ym.):</h4>
            <FormikTextField label={'Henkilöstötilat'} name={'henkilostotilat'} type={'text'}></FormikTextField>
            <h4>Keneltä kysytään apua tarvittaessa (yhteystiedot):</h4>
            <FormikTextField label={'Keneltä kysytään apua tarvittaessa'} name={'keneltaapua'} type={'text'}></FormikTextField>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      Tab 2 content for {t('guidance_to_work')}
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('guidance_to_work')}
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

export default GuidanceToWork;
