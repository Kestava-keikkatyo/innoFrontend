import {
  List,
  ListItem,
  ListItemText,
  Container,
}from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import {Form, Field, Formik} from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormikTextField } from '../../../components/FormField';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import i18next from 'i18next';
import vastuualueet from '../../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../../assets/tietopankki/vastuualueet_en.json';
import CustomerContractGP from './GoodPractices/CustomerContractGP';

const CustomerContract = () => {
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
                    {Vastuualueet.vastuualueet_worker.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>{t('form1Header')}</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>{t('form1Text1')}</p>
          <Box display="flex" flexDirection="row">
            <h4>{t('rentalCompany')}:</h4>
            <FormikTextField label={t('rentalCompany')} name={'rentalCompany'} type={'text'}></FormikTextField>
            <h4>{t('userCompany')}:</h4>
            <FormikTextField label={t('userCompany')} name={'userCompany'} type={'text'}></FormikTextField>
          </Box>
          <label>
            <Field type="checkbox" name="check1" />
            {t('form1Check1')}
          </label>
          <Box display="flex" flexDirection="column">
            <h4>{t('form1Text2')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text3')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text4')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text5')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text6')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text7')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form1Text8')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
          </Box>
          <h4>{t('form1Text9')}:</h4>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name1'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber1'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>{t('workRoom')}:</h4>
            <FormikTextField label={t('workRoom')} name={'workroom1'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name2'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber2'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email2'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4>{t('workRoom')}:</h4>
            <FormikTextField label={t('workRoom')} name={'workroom2'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>{t('form1Text10')}:</h4>
            <label>
              <Field type="checkbox" name="check2" />
              {t('form1Check2')}
            </label>
            <label>
              <Field type="checkbox" name="check3" />
              {t('form1Check3')}
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              {t('form1Check4')}
            </label>
            <label>
              <Field type="checkbox" name="check5" />
              {t('form1Check5')}
            </label>
            <Box display="flex" flexDirection="row">
              <FormikTextField name={'date'} type={'date'}></FormikTextField>
              <h4>{t('form1ByDate')}</h4>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>{t('form1Text11')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
          </Box>
          <h4>{t('form1Text12')}</h4>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name3'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber3'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email3'} type={'text'}></FormikTextField>
          </Box>
          <h4>{t('form1Text13')}</h4>
          <Box display="flex" flexDirection="row">
            <h4>{t('name')}:</h4>
            <FormikTextField label={t('name')} name={'name4'} type={'text'}></FormikTextField>
            <h4>{t('user_phone_number')}:</h4>
            <FormikTextField label={t('user_phone_number')} name={'phonenumber4'} type={'text'}></FormikTextField>
            <h4>{t('email')}:</h4>
            <FormikTextField label={t('email')} name={'email4'} type={'text'}></FormikTextField>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      <CustomerContractGP/>
      
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
