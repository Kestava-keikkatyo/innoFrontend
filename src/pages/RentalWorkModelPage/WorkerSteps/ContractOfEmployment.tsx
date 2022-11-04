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
                    {Vastuualueet.yhtenäinen.map((e, i) => (
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

        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      <ContractOfEmploymentGP/>
      Tab 2 content for {t('contract_of_employment')}
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
