import { TextField, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, Form, Formik, FormikProps } from 'formik'
import Box from '@mui/material/Box'
import { FormikTextField } from '../../../../components/FormField'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import axios from 'axios'

interface Values {
  rentalCompany: ''
  userCompany: string
  check1: boolean
  name1: string
  phonenumber1: string
  email1: string
  workroom1: string
  name2: string
  phonenumber2: string
  email2: string
  workroom2: string
  check2: boolean
  check3: boolean
  check4: boolean
  check5: boolean
  form1Text2: string
  form1Text3: string
  form1Text4: string
  form1Text5: string
  form1Text6: string
  form1Text7: string
  form1Text8: string
  form1Text11: string
  date: Date
  name3: string
  phonenumber3: string
  email3: string
  name4: string
  phonenumber4: string
  email4: string
}

const CustomerContractForm = ({ formRef, formData, setFormData }: any) => {
  const { t } = useTranslation()
  // const isLoading = useSelector((state: IRootState) => state.feedback.loading)
  const classes = useStyles()

  const handleSubmit = async (values: Values) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/forms/CustomerContractForm',
        values,
        { responseType: 'blob' },
      )

      const blob = new Blob([response.data], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'customercontractform.pdf'
      a.click()
    } catch (error) {
      console.error(console.error)
    }
  }

  /*
    https://formik.org/docs/examples/with-material-ui
  */
  return (
    <>
      <h2>{t('form1Header')}</h2>
      <Formik
        initialValues={{
          rentalCompany: '',
          userCompany: '',
          check1: false,
          name1: '',
          phonenumber1: '',
          email1: '',
          workroom1: '',
          name2: '',
          phonenumber2: '',
          email2: '',
          workroom2: '',
          check2: false,
          check3: false,
          check4: false,
          check5: false,
          form1Text2: '',
          form1Text3: '',
          form1Text4: '',
          form1Text5: '',
          form1Text6: '',
          form1Text7: '',
          form1Text8: '',
          form1Text11: '',
          date: new Date(),
          name3: '',
          phonenumber3: '',
          email3: '',
          name4: '',
          phonenumber4: '',
          email4: '',
        }}
        onSubmit={(values) => {
          console.log('Submit form1', values)
          handleSubmit(values)
        }}
      >
        {(props: FormikProps<Values>) => (
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
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text2'}
                multiline
                rows={10}
              />
              <h4 className={classes.marginTop}>{t('form1Text3')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text3'}
                multiline
                rows={10}
                type={'text'}
              />
              <h4 className={classes.marginTop}>{t('form1Text4')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text4'}
                multiline
                rows={10}
                type={'text'}
              />
              <h4 className={classes.marginTop}>{t('form1Text5')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text5'}
                multiline
                rows={10}
                type={'text'}
              />
              <h4 className={classes.marginTop}>{t('form1Text6')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text6'}
                multiline
                rows={10}
                type={'text'}
              />
              <h4 className={classes.marginTop}>{t('form1Text7')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                name={'form1Text7'}
                multiline
                rows={10}
                type={'text'}
              />
              <h4 className={classes.marginTop}>{t('form1Text8')}</h4>
              <FormikTextField
                placeholder={t('textAreaPlaceholder')}
                multiline
                name={'form1Text8'}
                rows={10}
                type={'text'}
              />
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
              <TextField
                placeholder={t('textAreaPlaceholder')}
                multiline
                name={'form1Text11'}
                rows={10}
              />
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
            <Button
              type='submit'
              style={{ backgroundColor: '#F47D20', color: 'black', marginTop: '20px' }}
            >
              {t('print')}
            </Button>
          </Form>
        )}
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
    width: '100%',
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

export default CustomerContractForm
