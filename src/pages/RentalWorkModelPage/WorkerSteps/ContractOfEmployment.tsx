import {
  List,
  ListItem,
  ListItemText,
  Container, TextField, CircularProgress, Button,
} from '@mui/material';
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
import {useSelector} from "react-redux";
import {IRootState} from "../../../utils/store";


const ContractOfEmployment = () => {
  const { t } = useTranslation();
  const isLoading = useSelector((state: IRootState) => state.feedback.loading);
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
            <h4 className={classes.h4}>{t('rentalCompanyAndOrientation')}:</h4>
            <FormikTextField className={classes.textField} label={t('rentalCompanyAndOrientation')} name={'rentalCompany'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('date')}:</h4>
            <FormikTextField className={classes.smallerTextField} name={'date'} type={'date'} label={''}></FormikTextField>
          </Box>
          <h4>{t('form2Text3')}:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <input type="radio" name="check" />
              {t('form2Check1')}
            </label>
            <label>
              <input type="radio" name="check" />
              {t('form2Check2')}
            </label>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('worker')}:</h4>
            <FormikTextField className={classes.textField} label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
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
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check9" />
              {t('form2Check9')}
            </label>
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
            <label className={classes.checkbox}>
              <Field type="checkbox" name="check12" />
              {t('form2Check12')}
            </label>
            <h4 className={classes.h4}>{t('user_contact_details')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_contact_details')} name={'contact1'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber1'} type={'tel'}></FormikTextField>
          </Box>
          <h4>{t('form2Text6')}</h4>
          <h4>{t('form2Text7')}</h4>
          <h4>{t('form2Text8')}</h4>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('name')}:</h4>
            <FormikTextField className={classes.textField} label={t('name')} name={'name1'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber2'} type={'tel'}></FormikTextField>
            <h4 className={classes.h4}>{t('email')}:</h4>
            <FormikTextField className={classes.textField} label={t('email')} name={'email1'} type={'email'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('userCompanyAddress')}:</h4>
            <FormikTextField className={classes.textField} label={t('userCompanyAddress')} name={'address'} type={'text'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="column">
            <h4>{t('form2Text9')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={4}/>
          </Box>
          <h4 className={classes.marginTop}>{t('form2Text10')}</h4>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('name')}:</h4>
            <FormikTextField className={classes.textField} label={t('name')} name={'name2'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber3'} type={'tel'}></FormikTextField>
            <h4 className={classes.h4}>{t('email')}:</h4>
            <FormikTextField className={classes.textField} label={t('email')} name={'email2'} type={'email'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('workRoomPlace')}:</h4>
            <FormikTextField className={classes.textField} label={t('workRoomPlace')} name={'workRoomPlace'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('registrationTime')}:</h4>
            <FormikTextField className={classes.smallerTextField} label={''} name={'registrationTime'} type={'date'}></FormikTextField>
            <h4 className={classes.h4}>{t('clock')}:</h4>
            <FormikTextField className={classes.smallerTextField} label={''} name={'clock'} type={'time'}></FormikTextField>
          </Box>
          <h4>{t('form2Text11')}:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <input type="radio" name="check" />
              {t('form2Check13')}
            </label>
            <label>
              <input type="radio" name="check" />
              {t('form2Check14')}
            </label>
          </Box>
          <h4 className={classes.marginTop}>{t('signatures')}</h4>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('orientator')}:</h4>
            <FormikTextField className={classes.textField} label={t('orientator')} name={'orientator'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('orientated')}:</h4>
            <FormikTextField className={classes.textField} label={t('orientated')} name={'orientated'} type={'text'}></FormikTextField>
          </Box>
          {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>{t('submit')}</Button>}

          <h2 className={classes.center}>{t('form5Header')}</h2>
          <p className={classes.p}>{t('form5Text1')}</p>
          <h3>{t('form5Text2')}</h3>
          <Box display="flex" flexDirection="column">
            <h4>{t('serviceCompany')}:</h4>
            <FormikTextField label={t('serviceCompany')} name={'serviceCompany'} type={'text'}></FormikTextField>
            <h4>{t('orientator')}:</h4>
            <FormikTextField label={t('orientator')} name={'orientator'} type={'text'}></FormikTextField>
            <h4>{t('worker')}:</h4>
            <FormikTextField label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
            <h4>{t('date')}:</h4>
            <FormikTextField label={''} name={'date2'} type={'date'}></FormikTextField>
            <h4>{t('form2Check4')}:</h4>
            <FormikTextField label={t('form2Check4')} name={'requiredSkills'} type={'text'}></FormikTextField>
            <h4>{t('form2Check5')}:</h4>
            <FormikTextField label={t('form2Check5')} name={'protectiveEquipment'} type={'text'}></FormikTextField>
            <h4>{t('form5Text3')}:</h4>
            <FormikTextField label={t('form5Text3')} name={'safetyAndRisks'} type={'text'}></FormikTextField>
            <h4>{t('form5Text4')}:</h4>
            <FormikTextField label={t('form5Text4')} name={'contact1'} type={'text'}></FormikTextField>
            <h4>{t('form5Text5')}:</h4>
            <FormikTextField label={t('form5Text5')} name={'addressAndInstructions'} type={'text'}></FormikTextField>
            <h4>{t('form5Text6')}:</h4>
            <FormikTextField label={t('form5Text6')} name={'contact2'} type={'text'}></FormikTextField>
          </Box>
          <h3>{t('form5Text7')}</h3>
          <Box display="flex" flexDirection="column">
            <h4>{t('userCompanyName')}:</h4>
            <FormikTextField label={t('userCompanyName')} name={'userCompanyName'} type={'text'}></FormikTextField>
            <h4>{t('jobAdvisor')}:</h4>
            <FormikTextField label={t('jobAdvisor')} name={'jobAdvisor'} type={'text'}></FormikTextField>
            <h4>{t('worker')}:</h4>
            <FormikTextField label={t('worker')} name={'worker2'} type={'text'}></FormikTextField>
            <h4>{t('form3Check1')}:</h4>
            <FormikTextField label={t('form3Check1')} name={'workDuties'} type={'text'}></FormikTextField>
            <h4>{t('form3Check2')}:</h4>
            <FormikTextField label={t('form3Check2')} name={'harmfulAndDangerous'} type={'text'}></FormikTextField>
            <h4>{t('form3Check3')}:</h4>
            <FormikTextField label={t('form3Check3')} name={'hoursAndBreaks'} type={'text'}></FormikTextField>
            <h4>{t('form5Text8')}:</h4>
            <FormikTextField label={t('form5Text8')} name={'equipment'} type={'text'}></FormikTextField>
            <h4>{t('form3Check6')}:</h4>
            <FormikTextField label={t('form3Check6')} name={'accidents'} type={'text'}></FormikTextField>
            <h4>{t('form3Check8')}:</h4>
            <FormikTextField label={t('form3Check8')} name={'firstAidCabinets'} type={'text'}></FormikTextField>
            <h4>{t('form3Check9')}:</h4>
            <FormikTextField label={t('form3Check9')} name={'facilities'} type={'text'}></FormikTextField>
            <h4>{t('form3Check10')}:</h4>
            <FormikTextField label={t('form3Check10')} name={'specials'} type={'text'}></FormikTextField>
            <h4>{t('form3Check12')}:</h4>
            <FormikTextField label={t('form3Check12')} name={'informationPractices'} type={'text'}></FormikTextField>
            <h4>{t('form3Check14')}:</h4>
            <FormikTextField label={t('form3Check14')} name={'licensing'} type={'text'}></FormikTextField>
            <h4>{t('form3Check16')}:</h4>
            <FormikTextField label={t('form3Check16')} name={'askHelp'} type={'text'}></FormikTextField>
          </Box>
          {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>{t('submit')}</Button>}
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
  },
  h4: {
    marginRight: '5px'
  },
  textField: {
    marginRight: '10px',
    width: '100%',
    top: '5px'
  },
  smallerTextField: {
    marginRight: '10px',
    width: '40%',
    top: '5px'
  },
  marginTop: {
    marginTop: '50px'
  },
  submitButton: {
    fontSize: '20px',
    display: 'block',
    margin: '0 auto',
    marginTop: '50px'
  },
  checkbox: {
    width: '60%',
    marginTop: '21px'
  },
}));

export default ContractOfEmployment;
