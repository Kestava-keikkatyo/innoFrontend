import { Divider, TextField, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, Form, Formik } from 'formik'
import Box from '@mui/material/Box'
import { FormikTextField } from '../../../../components/FormField'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../../utils/store'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import axios from 'axios'

interface Values {
  rentalCompany: string
  date: Date
  worker: string
  check: boolean
  check2: boolean
  check3: boolean
  check4: boolean
  check5: boolean
  check6: boolean
  check7: boolean
  check8: boolean
  check9: boolean
  check10: boolean
  check11: boolean
  check12: boolean
  contact1: string
  phonenumber1: string
  phonenumber2: string
  phonenumber3: string
  name1: string
  name2: string
  email1: string
  email2: string
  address: string
  workRoomPlace: string
  orientator: string
  orientated: string
}

const ContractOfEmploymentForm: React.FC = () => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState(0)
  const isLoading = useSelector((state: IRootState) => state.feedback.loading)
  const classes = useStyles()

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props
    return (
      <div
        style={{
          borderLeft: '1px solid #ccc',
          borderRight: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
        }}
        role='tabpanel'
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={2}>{children}</Box>}
      </div>
    )
  }

  interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
  }

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  function a11yProps(index: number) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    }
  }

  const handleSubmit = async (values: Values) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/forms/ContractOfEmploymentForm',
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

  return (
    <>
      <Tabs
        TabIndicatorProps={{ style: { background: 'black' } }}
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        aria-label='scrollable force tabs example'
        centered
      >
        <Tab style={{ marginTop: '30px' }} label={t('form2Header')} {...a11yProps(0)} />
        <Tab style={{ marginTop: '30px' }} label={t('form5Header')} {...a11yProps(1)} />
      </Tabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <h2>{t('form2Header')}</h2>
        <Formik
          initialValues={{
            rentalCompany: '',
            date: new Date(),
            worker: '',
            check: false,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            check7: false,
            check8: false,
            check9: false,
            check10: false,
            check11: false,
            check12: false,
            contact1: '',
            phonenumber1: '',
            phonenumber2: '',
            phonenumber3: '',
            name1: '',
            name2: '',
            email1: '',
            email2: '',
            address: '',
            workRoomPlace: '',
            orientator: '',
            orientated: '',
          }}
          onSubmit={(values) => {
            console.log('Submit form2')
            handleSubmit(values)
          }}
        >
          <Form>
            <p className={classes.p}>{t('form2Text1')}</p>
            <p className={classes.p}>{t('form2Text2')}</p>
            <Box className={classes.boxRow}>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('rentalCompanyAndOrientation')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('rentalCompanyAndOrientation')}
                  name={'rentalCompany'}
                  type={'text'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('date')}:</h4>
                <FormikTextField
                  className={classes.smallerTextField}
                  name={'date'}
                  type={'date'}
                  label={''}
                ></FormikTextField>
              </div>
            </Box>
            <h4>{t('form2Text3')}:</h4>
            <Box className={classes.boxColumn}>
              <label>
                <input type='radio' name='check' />
                {t('form2Check1')}
              </label>
              <label>
                <input type='radio' name='check2' />
                {t('form2Check2')}
              </label>
            </Box>
            <Box className={classes.boxRow}>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('worker')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('worker')}
                  name={'worker'}
                  type={'text'}
                ></FormikTextField>
              </div>
            </Box>
            <Box className={classes.boxColumn}>
              <label>
                <Field type='checkbox' name='check3' />
                {t('form2Check3')}
              </label>
              <label>
                <Field type='checkbox' name='check4' />
                {t('form2Check4')}
              </label>
            </Box>
            <h4>{t('form2Text4')}:</h4>
            <Box className={classes.boxColumn}>
              <label>
                <Field type='checkbox' name='check5' />
                {t('form2Check5')}
              </label>
              <label>
                <Field type='checkbox' name='check6' />
                {t('form2Check6')}
              </label>
              <label>
                <Field type='checkbox' name='check7' />
                {t('form2Check7')}
              </label>
              <label>
                <Field type='checkbox' name='check8' />
                {t('form2Check8')}
              </label>
            </Box>
            <h4>{t('form2Text5')}:</h4>
            <Box className={classes.boxColumn}>
              <label>
                <Field type='checkbox' name='check9' />
                {t('form2Check9')}
              </label>
              <label>
                <Field type='checkbox' name='check10' />
                {t('form2Check10')}
              </label>
              <label>
                <Field type='checkbox' name='check11' />
                {t('form2Check11')}
              </label>
            </Box>
            <Box className={classes.boxRow}>
              <label className={classes.checkbox}>
                <Field type='checkbox' name='check12' />
                {t('form2Check12')}
              </label>
            </Box>
            <Box>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('user_contact_details')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('user_contact_details')}
                  name={'contact1'}
                  type={'text'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('user_phone_number')}
                  name={'phonenumber1'}
                  type={'tel'}
                ></FormikTextField>
              </div>
            </Box>
            <h4>{t('form2Text6')}</h4>
            <h4>{t('form2Text7')}</h4>
            <h4>{t('form2Text8')}</h4>
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
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('user_phone_number')}
                  name={'phonenumber2'}
                  type={'tel'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('email')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('email')}
                  name={'email1'}
                  type={'email'}
                ></FormikTextField>
              </div>
            </Box>
            <Box className={classes.boxRow}>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('userCompanyAddress')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('userCompanyAddress')}
                  name={'address'}
                  type={'text'}
                ></FormikTextField>
              </div>
            </Box>
            <Box className={classes.boxColumn}>
              <h4>{t('form2Text9')}</h4>
              <TextField
                placeholder={t('textAreaPlaceholder')}
                multiline
                name={'access'}
                rows={4}
              />
            </Box>
            <h4 className={classes.marginTop}>{t('form2Text10')}</h4>
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
                  name={'email2'}
                  type={'email'}
                ></FormikTextField>
              </div>
            </Box>
            <Box className={classes.boxRow}>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('workRoomPlace')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('workRoomPlace')}
                  name={'workRoomPlace'}
                  type={'text'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('registrationTime')}:</h4>
                <FormikTextField
                  className={classes.smallerTextField}
                  label={''}
                  name={'registrationTime'}
                  type={'date'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('clock')}:</h4>
                <FormikTextField
                  className={classes.smallerTextField}
                  label={''}
                  name={'clock'}
                  type={'time'}
                ></FormikTextField>
              </div>
            </Box>
            <h4>{t('form2Text11')}:</h4>
            <Box className={classes.boxColumn}>
              <label>
                <input type='radio' name='check' />
                {t('form2Check13')}
              </label>
              <label>
                <input type='radio' name='check' />
                {t('form2Check14')}
              </label>
            </Box>
            <h4 className={classes.marginTop}>{t('signatures')}</h4>
            <Box className={classes.boxRow}>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('orientator')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('orientator')}
                  name={'orientator'}
                  type={'text'}
                ></FormikTextField>
              </div>
              <div style={{ width: '100%', marginRight: '20px' }}>
                <h4 className={classes.h4}>{t('orientated')}:</h4>
                <FormikTextField
                  className={classes.textField}
                  label={t('orientated')}
                  name={'orientated'}
                  type={'text'}
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
        </Formik>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Formik
          initialValues={{}}
          onSubmit={() => {
            console.log('Submit form5')
          }}
        >
          <Form>
            <h2>{t('form5Header')}</h2>
            <p className={classes.p}>{t('form5Text1')}</p>
            <h3>{t('form5Text2')}</h3>
            <Box className={classes.boxColumn}>
              <h4>{t('serviceCompany')}:</h4>
              <FormikTextField
                label={t('serviceCompany')}
                name={'serviceCompany'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('orientator')}:</h4>
              <FormikTextField
                label={t('orientator')}
                name={'orientator'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('worker')}:</h4>
              <FormikTextField label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
              <h4>{t('date')}:</h4>
              <FormikTextField label={''} name={'date2'} type={'date'}></FormikTextField>
              <h4>{t('form2Check4')}:</h4>
              <FormikTextField
                label={t('form2Check4')}
                name={'requiredSkills'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form2Check5')}:</h4>
              <FormikTextField
                label={t('form2Check5')}
                name={'protectiveEquipment'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form5Text3')}:</h4>
              <FormikTextField
                label={t('form5Text3')}
                name={'safetyAndRisks'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form5Text4')}:</h4>
              <FormikTextField
                label={t('form5Text4')}
                name={'contact1'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form5Text5')}:</h4>
              <FormikTextField
                label={t('form5Text5')}
                name={'addressAndInstructions'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form5Text6')}:</h4>
              <FormikTextField
                label={t('form5Text6')}
                name={'contact2'}
                type={'text'}
              ></FormikTextField>
            </Box>
            <h3>{t('form5Text7')}</h3>
            <Box className={classes.boxColumn}>
              <h4>{t('userCompanyName')}:</h4>
              <FormikTextField
                label={t('userCompanyName')}
                name={'userCompanyName'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('jobAdvisor')}:</h4>
              <FormikTextField
                label={t('jobAdvisor')}
                name={'jobAdvisor'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('worker')}:</h4>
              <FormikTextField label={t('worker')} name={'worker2'} type={'text'}></FormikTextField>
              <h4>{t('form3Check1')}:</h4>
              <FormikTextField
                label={t('form3Check1')}
                name={'workDuties'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check2')}:</h4>
              <FormikTextField
                label={t('form3Check2')}
                name={'harmfulAndDangerous'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check3')}:</h4>
              <FormikTextField
                label={t('form3Check3')}
                name={'hoursAndBreaks'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form5Text8')}:</h4>
              <FormikTextField
                label={t('form5Text8')}
                name={'equipment'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check6')}:</h4>
              <FormikTextField
                label={t('form3Check6')}
                name={'accidents'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check8')}:</h4>
              <FormikTextField
                label={t('form3Check8')}
                name={'firstAidCabinets'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check9')}:</h4>
              <FormikTextField
                label={t('form3Check9')}
                name={'facilities'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check10')}:</h4>
              <FormikTextField
                label={t('form3Check10')}
                name={'specials'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check12')}:</h4>
              <FormikTextField
                label={t('form3Check12')}
                name={'informationPractices'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check14')}:</h4>
              <FormikTextField
                label={t('form3Check14')}
                name={'licensing'}
                type={'text'}
              ></FormikTextField>
              <h4>{t('form3Check16')}:</h4>
              <FormikTextField
                label={t('form3Check16')}
                name={'askHelp'}
                type={'text'}
              ></FormikTextField>
            </Box>
            <Button
              type='submit'
              style={{ backgroundColor: '#F47D20', color: 'black', marginTop: '20px' }}
            >
              {t('print')}
            </Button>
          </Form>
        </Formik>
      </TabPanel>
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
  checkbox: {
    width: '60%',
    marginTop: '21px',
  },
}))

export default ContractOfEmploymentForm
