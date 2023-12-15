import { Button, Container } from '@mui/material'
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'
import WorkerStepBase from './WorkerStepBase'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import CustomerContractForm from './Forms/CustomerContractForm'
import SearchFromFileComponent from './SearchFromFileComponent'

interface FormData {
  rentalCompany: string
  customerCompany: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
  check1: boolean
  check2: boolean
  check3: boolean
  check4: boolean
  check5: boolean
  workroom1: string
  workroom2: string
  date: Date
}

const CustomerContract = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const [formData, setFormData] = useState<FormData>({
    rentalCompany: '',
    customerCompany: '',
    text2: '',
    text3: '',
    text4: '',
    text5: '',
    text6: '',
    text7: '',
    text8: '',
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    workroom1: '',
    workroom2: '',
    date: new Date(),
  })
  const formRef = useRef(null)

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: 'black',
      },
    },
  })

  const tabContent = [
    /* <div key="tab0">
      <SearchFromFileComponent inputString="worker_step_1" />
    </div>,*/

    <div key='tab0'>
      <CustomerContractForm formRef={formRef} formData={formData} setFormData={setFormData} />
    </div>,
    <div key='tab1'>
      <SearchFromFileComponent inputString='good_practices_customer_contract_array' />
    </div>,
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <Typography variant='h6' style={{ fontWeight: 'bold', marginTop: '30px' }}>
          {t('customer_contract')}
        </Typography>
        <WorkerStepBase content={tabContent} />
      </Container>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: '30px',
  },
}))

export default CustomerContract
