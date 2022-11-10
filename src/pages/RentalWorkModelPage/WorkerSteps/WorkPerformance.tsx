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
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import i18next from 'i18next';
import vastuualueet from '../../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../../assets/tietopankki/vastuualueet_en.json';
import WorkPerformanceGP from './GoodPractices/WorkPerformanceGP';

const WorkPerformance = () => {
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
                    {Vastuualueet.vastuualueet_worker5.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
    </div>,
    <div key="tab1">
      <h2 className={classes.center}>{t('form4Header')}</h2>
      <Formik
          initialValues={{
          }}
          onSubmit={() => { console.log('Submit'); }}
      >
        <Form>
          <p className={classes.p}>{t('form4Text1')}</p>
          <p className={classes.p}>{t('form4Text2')}</p>
          <h4>{t('form4Text3')}:</h4>
          <Box display="flex" flexDirection="column">
            <label>
              <Field type="checkbox" name="check1" />
              {t('form4Check1')}
            </label>
            <label>
              <Field type="checkbox" name="check2" />
              {t('form4Check2')}
            </label>
            <label>
              <Field type="checkbox" name="check3" />
              {t('form4Check3')}
            </label>
            <label>
              <Field type="checkbox" name="check4" />
              {t('form4Check4')}
            </label>
            <label>
              <Field type="checkbox" name="check5" />
              {t('form4Check5')}
            </label>
            <label>
              <Field type="checkbox" name="check6" />
              {t('form4Check6')}
            </label>
            <label>
              <Field type="checkbox" name="check7" />
              {t('form4Check7')}
            </label>
            <label>
              <Field type="checkbox" name="check8" />
              {t('form4Check8')}
            </label>
            <label>
              <Field type="checkbox" name="check9" />
              {t('form4Check9')}
            </label>
            <h4>{t('form4Text4')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form4Text5')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('form4Text6')}</h4>
            <h4>{t('rentalCompanyCaps')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('userCompanyCaps')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
            <h4>{t('cooperation')}</h4>
            <Field component="textarea" rows="10" placeholder={t('textAreaPlaceholder')} value=''></Field>
          </Box>
        </Form>
      </Formik>
    </div>,
    <div key="tab2">
      <WorkPerformanceGP/>
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('work_performance')}
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

export default WorkPerformance;
