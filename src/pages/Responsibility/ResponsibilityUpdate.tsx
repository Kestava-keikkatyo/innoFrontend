import React, { useEffect } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import FormikField from '../../components/FormField'
import { setAlert } from '../../actions/alertActions'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Responsibility } from '../../types/types'
import { useParams, Link } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import PageLoading from '../../components/PageLoading'
import { fetchResponsibilityById, updateResponsibility } from '../../actions/responsibilityActions'

const CreateResponsibilitySchema = Yup.object().shape({
  responsible: Yup.string()
    .min(2, 'Responsible should be three letters at least!')
    .required('Responsible is required!'),
  rule: Yup.string().min(2, 'Rule should be three letters at least!').required('Rule is required!'),
})

type ResponsibilityUrlParams = {
  responsibilityId: string
}

const ResponsibilityUpdate: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()

  const { responsibilityId } = useParams<ResponsibilityUrlParams>()

  const responsibilityData: Responsibility | undefined = useSelector(
    (state: IRootState) => state.responsibility.currentResponsibility,
  )
  useEffect(() => {
    dispatch(fetchResponsibilityById(responsibilityId))
  }, [dispatch, responsibilityId])

  if (!responsibilityData || responsibilityId !== responsibilityData._id) return <PageLoading />

  const handleSubmit = (responsibility: Responsibility) => {
    dispatch(updateResponsibility(responsibility))

    dispatch(setAlert(i18next.t('responsibility_updated_successfully')))
  }

  return (
    <div className={classes.newResponsibility}>
      <div className={classes.responsibilityTitleContainer}>
        <Typography color='primary' className={classes.title} variant='h5'>
          {t('responsibility_update_responsibility')}
        </Typography>
      </div>
      <div className={classes.responsibilityContainer}>
        <Formik
          initialValues={responsibilityData}
          onSubmit={handleSubmit}
          validationSchema={CreateResponsibilitySchema}
        >
          {() => {
            return (
              <Form>
                <div className={classes.responsibilityContainerTop}>
                  <FormikField
                    name='responsible'
                    label={t('responsibility_responsible')}
                    required
                    multiline
                  />
                  <FormikField name='rule' label={t('responsibility_rule')} required multiline />
                </div>
                <Stack direction='row' spacing={2}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.button}
                  >
                    {t('button_update')}
                  </Button>
                  <Button
                    variant='outlined'
                    color='primary'
                    component={Link}
                    to='/responsibilities'
                  >
                    {t('button_cancel')}
                  </Button>
                </Stack>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  newResponsibility: {
    flex: '4',
    padding: '20px',
  },
  button: {
    left: theme.spacing(0),
  },
  title: {
    marginTop: '5px',
    marginBottom: '15px',
  },
  responsibilityTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  responsibilityContainer: {
    flex: '1',
    padding: '20px',
    width: '600px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  responsibilityContainerTop: {
    marginBottom: '70px',
  },
}))

export default ResponsibilityUpdate
