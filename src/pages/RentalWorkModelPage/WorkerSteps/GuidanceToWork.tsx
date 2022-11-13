import {
  List,
  ListItem,
  ListItemText,
  Container
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
import GuidanceToWorkGP from './GoodPractices/GuidanceToWorkGP';

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
                    {Vastuualueet.vastuualueet_worker4.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>{t('form3Header')}</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>{t('form3Text1')}</p>
          <p className={classes.p}>{t('form3Text2')}</p>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('form3Text3')}:</h4>
            <FormikTextField className={classes.textField} label={t('rentalCompany')} name={'rentalCompany'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('date')}:</h4>
            <FormikTextField className={classes.smallerTextField} label={''} name={'date1'} type={'date'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('worker')}:</h4>
            <FormikTextField className={classes.textField} label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
          </Box>
          <h4>{t('form3Text4')}:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check1" />
              {t('form3Check1')}
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              {t('form3Check2')}
            </label>
            <label>
              <Field type="checkbox" name="check3" />
              {t('form3Check3')}
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              {t('form3Check4')}
            </label>
            <label>
              <Field type="checkbox" name="check5" />
              {t('form3Check5')}
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              {t('form3Check6')}
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              {t('form3Check7')}
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              {t('form3Check8')}
            </label>
            <label>
              <Field type="checkbox" name="check9" />
              {t('form3Check9')}
            </label>
            <label>
              <Field type="checkbox" name="check10" />
              {t('form3Check10')}
            </label>
            <label>
              <Field type="checkbox" name="check11" />
              {t('form3Check11')}
            </label>
            <label>
              <Field type="checkbox" name="check12" />
              {t('form3Check12')}
            </label>
            <label>
              <Field type="checkbox" name="check13" />
              {t('form3Check13')}
            </label>
            <label>
              <Field type="checkbox" name="check14" />
              {t('form3Check14')}
            </label>
            <label>
              <Field type="checkbox" name="check15" />
              {t('form3Check15')}
            </label>
            <label className={classes.marginBottom}>
              <Field type="checkbox" name="check16" />
              {t('form3Check16')}
            </label>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('name')}:</h4>
            <FormikTextField className={classes.textField} label={t('name')} name={'name1'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber1'} type={'tel'}></FormikTextField>
            <h4 className={classes.h4}>{t('email')}:</h4>
            <FormikTextField className={classes.textField} label={t('email')} name={'email1'} type={'email'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('workstation')}:</h4>
            <FormikTextField className={classes.textField} label={t('workstation')} name={'workstation1'} type={'text'}></FormikTextField>
          </Box>
          <h4>{t('form3Text5')}:</h4>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('name')}:</h4>
            <FormikTextField className={classes.textField} label={t('name')} name={'name2'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber2'} type={'tel'}></FormikTextField>
            <h4 className={classes.h4}>{t('email')}:</h4>
            <FormikTextField className={classes.textField} label={t('email')} name={'email2'} type={'email'}></FormikTextField>
          </Box>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('workstation')}:</h4>
            <FormikTextField className={classes.textField} label={t('workstation')} name={'workstation2'} type={'text'}></FormikTextField>
          </Box>
          <h4 className={classes.marginTop}>{t('signatures')}</h4>
          <Box display="flex" flexDirection="row">
            <h4 className={classes.h4}>{t('orientator')}:</h4>
            <FormikTextField className={classes.textField} label={t('orientator')} name={'orientator'} type={'text'}></FormikTextField>
            <h4 className={classes.h4}>{t('orientated')}:</h4>
            <FormikTextField className={classes.textField} label={t('orientated')} name={'orientated'} type={'text'}></FormikTextField>
          </Box>
          <input className={classes.submitButton} type="submit" value="Submit"/>

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
          <input className={classes.submitButton} type="submit" value="Submit"/>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      <GuidanceToWorkGP/>
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
    fontSize: '24px',
    display: 'block',
    margin: '0 auto',
    marginTop: '50px'
  },
  marginBottom: {
    marginBottom: '30px'
  }
}));

export default GuidanceToWork;
