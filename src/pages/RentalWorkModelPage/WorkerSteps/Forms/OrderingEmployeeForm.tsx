import { TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, Form, Formik } from 'formik'
import Box from '@mui/material/Box'
import { FormikTextField } from '../../../../components/FormField'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../../utils/store'

const OrderingEmployeeForm: React.FC = () => {
  const { t } = useTranslation()
  const isLoading = useSelector((state: IRootState) => state.feedback.loading)
  const classes = useStyles()

  return (
    <>
      <h2>{t('form1Header')}</h2>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          console.log('Submit form1')
        }}
      >
        <Form>
          <p className={classes.p}>{t('form1Text1')}</p>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('rentalCompany')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('rentalCompany')}
                name={'rentalCompany'}
                type={'text'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%' }}>
              <h4 className={classes.h4}>{t('userCompany')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('userCompany')}
                name={'userCompany'}
                type={'text'}
              ></FormikTextField>
            </div>
          </Box>
          <label>
            <Field className={classes.marginTop} type='checkbox' name='check1' />
            {t('form1Check1')}
          </label>
          <Box className={classes.boxColumn}>
            <h4 className={classes.marginTop}>{t('form1Text2')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text3')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text4')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text5')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text6')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text7')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form1Text8')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
          </Box>
          <h4 className={classes.marginTop}>{t('form1Text9')}:</h4>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('name')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('name')}
                name={'name1'}
                type={'text'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%' }}>
              <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('user_phone_number')}
                name={'phonenumber1'}
                type={'tel'}
              ></FormikTextField>
            </div>
          </Box>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('email')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('email')}
                name={'email1'}
                type={'email'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%' }}>
              <h4 className={classes.h4}>{t('workRoom')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('workRoom')}
                name={'workroom1'}
                type={'text'}
              ></FormikTextField>
            </div>
          </Box>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('name')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('name')}
                name={'name2'}
                type={'text'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%' }}>
              <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('user_phone_number')}
                name={'phonenumber2'}
                type={'tel'}
              ></FormikTextField>
            </div>
          </Box>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('email')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('email')}
                name={'email2'}
                type={'email'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%' }}>
              <h4 className={classes.h4}>{t('workRoom')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('workRoom')}
                name={'workroom2'}
                type={'text'}
              ></FormikTextField>
            </div>
          </Box>
          <Box className={classes.boxColumn}>
            <h4>{t('form1Text10')}:</h4>
            <label>
              <Field type='checkbox' name='check2' />
              {t('form1Check2')}
            </label>
            <label>
              <Field type='checkbox' name='check3' />
              {t('form1Check3')}
            </label>
            <label>
              <Field type='checkbox' name='check4' />
              {t('form1Check4')}
            </label>
            <label>
              <Field type='checkbox' name='check5' />
              {t('form1Check5')}
            </label>
            <Box display='flex' flexDirection='row'>
              <FormikTextField
                className={classes.dateTextField}
                name={'date'}
                type={'date'}
                label={''}
              ></FormikTextField>
              <h4 className={classes.dateh4}>{t('form1ByDate')}</h4>
            </Box>
          </Box>
          <Box className={classes.boxColumn}>
            <h4>{t('form1Text11')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
          </Box>
          <h4>{t('form1Text12')}</h4>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('name')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('name')}
                name={'name3'}
                type={'text'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('user_phone_number')}
                name={'phonenumber3'}
                type={'tel'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('email')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('email')}
                name={'email3'}
                type={'email'}
              ></FormikTextField>
            </div>
          </Box>
          <h4>{t('form1Text13')}</h4>
          <Box className={classes.boxRow}>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('name')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('name')}
                name={'name4'}
                type={'text'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('user_phone_number')}
                name={'phonenumber4'}
                type={'tel'}
              ></FormikTextField>
            </div>
            <div style={{ width: '100%', marginRight: '20px' }}>
              <h4 className={classes.h4}>{t('email')}:</h4>
              <FormikTextField
                className={classes.textField}
                label={t('email')}
                name={'email4'}
                type={'email'}
              ></FormikTextField>
            </div>
          </Box>
        </Form>
      </Formik>
    </>
  )
}

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
    textAlign: 'center',
  },
  p: {
    textAlign: 'left',
    marginBottom: '50px',
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  h4: {
    marginRight: '5px',
    whiteSpace: 'nowrap',
  },
  textField: {
    marginRight: '10px',
    width: '100%',
    top: '5px',
  },
  smallerTextField: {
    marginRight: '10px',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    top: '5px',
  },
  marginTop: {
    marginTop: '50px',
  },
  submitButton: {
    fontSize: '20px',
    display: 'block',
    margin: '0 auto',
    marginTop: '50px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  dateTextField: {
    marginRight: '10px',
    marginTop: '10px',
    width: '15%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    top: '5px',
  },
  dateh4: {
    marginTop: '30px',
    whiteSpace: 'nowrap',
  },
}))

export default OrderingEmployeeForm
