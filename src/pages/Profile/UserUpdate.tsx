import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import FormikField from '../../components/FormField'
import { setAlert } from '../../actions/alertActions'
import ImageUploader from '../../components/ImageUploader'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { fetchUserById, updateUser } from '../../actions/usersActions'
import { roles, User } from '../../types/types'
import { useParams } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import PageLoading from '../../components/PageLoading'

const CreateUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, i18next.t('name_should_be_three_letters_at_least'))
    .required(i18next.t('name_is_required')),
  email: Yup.string().email(i18next.t('not_valid_email')).required(i18next.t('email_is_required')),
  city: Yup.string().nullable(),
  zipCode: Yup.string().nullable(),
  street: Yup.string().nullable(),
  licenses: Yup.string().nullable(),
  phoneNumber: Yup.string().nullable(),
  website: Yup.string().nullable(),
  category: Yup.string().nullable(),
  profilePicture: Yup.string().nullable(),
  newProfilePictureFile: Yup.object().nullable(),
})

type UserUrlParams = {
  userId: string
}

interface UserFormValues extends User {
  newProfilePictureFile?: File
}

const UserUpdate: React.FC<{ myProfile?: boolean }> = ({ myProfile }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()

  const { userId } = useParams<UserUrlParams>()
  const myUserId = useSelector((state: IRootState) => state.user.data._id)
  const profileId: string = myProfile ? myUserId : userId

  const [profilePicture, setProfilePicture] = useState<File>()

  const handleSubmit = (values: UserFormValues) => {
    dispatch(updateUser(values, profilePicture, myProfile))

    dispatch(setAlert(i18next.t('user_updated_successfully')))
  }

  const profileData = useSelector((state: IRootState) => state.users.currentUser)
  useEffect(() => {
    dispatch(fetchUserById(profileId))
  }, [dispatch, profileId])

  if (!profileData || profileId !== profileData._id) return <PageLoading />

  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <Typography color='primary' className={classes.title} variant='h1'>
          {t('user_edit_profile')}
        </Typography>
      </div>
      <div className={classes.userAccount}>
        <Formik
          initialValues={profileData}
          onSubmit={handleSubmit}
          validationSchema={CreateUserSchema}
        >
          {({ values }) => {
            return (
              <Form>
                <div className={classes.userAccountTop}>
                  <ImageUploader
                    name='newProfilePictureFile'
                    picture={values.profilePicture}
                    onChange={setProfilePicture}
                  />
                </div>
                <FormikField name='name' label={t('user_name')} required />
                <FormikField name='email' label={t('user_email')} required />
                <FormikField name='city' label={t('user_city')} />
                <FormikField name='street' label={t('user_street')} />
                <FormikField name='zipCode' label={t('user_zipCode')} />
                <FormikField name='phoneNumber' label={t('user_phone_number')} />
                {profileData.userType === roles.Agency ||
                profileData.userType === roles.Business ? (
                  <>
                    <FormikField name='website' label={t('user_website')} />
                    <FormikField name='category' label={t('user_category')} />
                  </>
                ) : null}
                {profileData.userType === roles.Worker ? (
                  <FormikField name='licenses' label={t('user_licenses')} />
                ) : null}

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                >
                  {t('button_update')}
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  user: {
    flex: '4',
    padding: '20px',
  },
  button: {
    left: theme.spacing(0),
  },
  title: {
    marginTop: '5px',
    marginBottom: '15px',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
  },
  userTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userAccount: {
    flex: '1',
    padding: '20px',
    width: '100%',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  userAccountTop: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export default UserUpdate
