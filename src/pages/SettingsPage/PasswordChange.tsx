import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../actions/usersActions';
import FormikField from '../../components/FormField';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import { useHistory } from 'react-router-dom';
import i18n from '../../i18nextInit';

interface FormValues {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }

const initialValues: FormValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
};


const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required(i18next.t('change_password_current_password_is_required')),
    newPassword: Yup.string().required(i18next.t('change_password_new_password_is_required')).matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        i18n.t('change_password_validation')
      ),
    confirmNewPassword: Yup.string()
     .oneOf([Yup.ref('newPassword'), undefined], i18next.t('passwords_must_match'))
});

const PasswordChange: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { data } = useSelector((state: IRootState) => state.user);
    
    const handleSubmit = (values: FormValues) => {
        dispatch(changePassword(values.newPassword, values.currentPassword));
      };

      if (!data ) return (
        <PageLoading />
      );
      return (
      <div className={classes.newPassword}>
          <div className={classes.passwordTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h5">{t('change_password')}</Typography>
          </div>
          <div className={classes.passwordForm}>
              <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={ChangePasswordSchema}
              >
                  {() => {
                      return (
                      <Form>
                          <FormikField name="currentPassword" label={t('current_password')} type="password" required helperClassName={classes.textColor} />
                          <FormikField name="newPassword" label={t('new_password')} type="password" required helperClassName={classes.textColor} />
                          <FormikField name="confirmNewPassword" label={t('confirm_password')} type="password" required helperClassName={classes.textColor} />
                          <Stack direction="row" spacing={2}>
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('button_update')}</Button>
                            <Button variant="outlined" color="primary" onClick={() => history.push('/home')}>{t('button_cancel')}</Button>
                          </Stack>
                        </Form>
                    );
                }}
                </Formik>
          </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    newPassword: {
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
    passwordTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    passwordForm: {
        flex: '1',
        padding: '20px',
        width: '600px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    textColor: {
        color: 'red',
    }
}));

export default PasswordChange;


