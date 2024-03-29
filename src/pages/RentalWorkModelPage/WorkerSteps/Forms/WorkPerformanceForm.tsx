import { TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, Form, Formik } from 'formik'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../../utils/store'

const WorkPerformanceForm: React.FC = () => {
  const { t } = useTranslation()
  const isLoading = useSelector((state: IRootState) => state.feedback.loading)
  const classes = useStyles()

  return (
    <>
      <h2>{t('form4Header')}</h2>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          console.log('Submit')
        }}
      >
        <Form>
          <p className={classes.p}>{t('form4Text1')}</p>
          <p className={classes.p}>{t('form4Text2')}</p>
          <h4>{t('form4Text3')}:</h4>
          <Box className={classes.boxColumn}>
            <label>
              <Field type='checkbox' name='check1' />
              {t('form4Check1')}
            </label>
            <label>
              <Field type='checkbox' name='check2' />
              {t('form4Check2')}
            </label>
            <label>
              <Field type='checkbox' name='check3' />
              {t('form4Check3')}
            </label>
            <label>
              <Field type='checkbox' name='check4' />
              {t('form4Check4')}
            </label>
            <label>
              <Field type='checkbox' name='check5' />
              {t('form4Check5')}
            </label>
            <label>
              <Field type='checkbox' name='check6' />
              {t('form4Check6')}
            </label>
            <label>
              <Field type='checkbox' name='check7' />
              {t('form4Check7')}
            </label>
            <label>
              <Field type='checkbox' name='check8' />
              {t('form4Check8')}
            </label>
            <label>
              <Field type='checkbox' name='check9' />
              {t('form4Check9')}
            </label>
            <h4>{t('form4Text4')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4>{t('form4Text5')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4 className={classes.marginTop}>{t('form4Text6')}:</h4>
            <h4>{t('rentalCompanyCaps')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4>{t('userCompanyCaps')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
            <h4>{t('cooperation')}</h4>
            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={10} />
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
    top: '5px',
  },
  dateh4: {
    marginTop: '30px',
  },
}))

export default WorkPerformanceForm
