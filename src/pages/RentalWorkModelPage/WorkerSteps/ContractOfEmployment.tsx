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
      <h2 className={classes.center}>{t('form2Header')}</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>{t('form2Text1')}</p>
          <p className={classes.p}>{t('form2Text2')}</p>
          <Box display="flex" flexDirection="row">
            <h4>{t('rentalCompanyAndOrientation')}:</h4>
            <FormikTextField label={t('rentalCompanyAndOrientation')} name={'rentalCompany'} type={'text'}></FormikTextField>
            <h4>{t('date')}:</h4>
            <FormikTextField name={'date'} type={'date'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check1" />
              {t('form2Check1')}
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              {t('form2Check2')}
            </label>
            <h4>{t('worker')}:</h4>
            <FormikTextField label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
          </Box>
          <h4>{t('form2Text3')}</h4>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check3" />
              {t('form2Check3')}
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              {t('form2Check4')}
            </label>
          </Box>
          <h4>{t('form2Text4')}:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check5" />
              {t('form2Check5')}
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              {t('form2Check6')}
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              {t('form2Check7')}
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              {t('form2Check8')}
            </label>
          </Box>
          <h4>{t('form2Text5')}:</h4>
          <label>
            <Field type="checkbox" name="check9" />
            {t('form2Check9')}
          </label>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check10" />
              {t('form2Check10')}
            </label>
            <label>
            <Field type="checkbox" name="check11" />
              {t('form2Check11')}
          </label>
          </Box>
          <Box display="flex" flexDirection="row">
            <label>
              <Field type="checkbox" name="check12" />
              {t('form2Check12')}
            </label>
            <h4>{t('user_contact_details')}:</h4>
            <FormikTextField label={t('user_contact_details')} name={'contact1'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>{t('user_contact_details')}:</h4>
            <FormikTextField label={t('user_contact_details')} name={'contact2'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber2'} type={'text'}></FormikTextField>
          </Box>
          <h4>{t('form2Text6')}</h4>
          <h4>{t('form2Text7')}</h4>
          <h4>{t('form2Text8')}</h4>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name1'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber3'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>{t('userCompanyAddress')}:</h4>
            <FormikTextField label={t('userCompanyAddress')} name={'address'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>TYÖNTEKIJÄN PÄÄSY TYÖPAIKKAAN (kulkuyhteydet, kulkuluvat jne.)</h4>
            <Field component="textarea" rows="4" placeholder={t('textAreaPlaceholder')} value=''></Field>
          </Box>
          <h4>KÄYTTÄJÄYRITYKSEN YHTEYSHENKILÖN (JOLLE ILMOITTAUDUTAAN) YHTEYSTIEDOT</h4>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name2'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber4'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email2'} type={'text'}></FormikTextField>
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
