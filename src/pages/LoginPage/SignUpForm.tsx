import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { FormikTextField, FormikSelectField } from '../../components/FormField';
import SignUpModal from './SignUpModal';

import './forms.css';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  Link,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { roles } from '../../types/types';

/**
 * @component
 * @desc Signup form for worker, agency and business.
 * @param {Object} props
 * @param {function} props.handleSubmit - Function for sending user credentials
 */
const SignUpForm: React.FC<any> = ({ handleSubmit }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { loading } = useSelector((state: any) => state.user);

  const fontTheme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
    },
  });

  const roleOptions = [
    { value: roles.Worker, label: t('worker') },
    { value: roles.Agency, label: t('agency') },
    { value: roles.Business, label: t('business') },
  ];

  const categoryOptions = [
    {
      value: 'Rakennus, asennus ja huolto',
      label: t('Rakennus, asennus ja huolto'),
    },
    { value: 'IT- ja tietoliikenne', label: t('IT- ja tietoliikenne') },
    { value: 'Koulutus- ja opetusala', label: t('Koulutus- ja opetusala') },
    { value: 'Tekniikka', label: t('Tekniikka') },
    {
      value: 'Lääketeollisuus- ja farmasia',
      label: t('Lääketeollisuus- ja farmasia'),
    },
    { value: 'Kiinteistö', label: t('Kiinteistö') },
  ];

  return (
    <ThemeProvider theme={fontTheme}>
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h1" gutterBottom className="header">
          {t('sign_up')}
        </Typography>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: '',
            companyName: '',
            category: '',
          }}
          validate={(values) => {
            const errors: any = {};
            const emailRegExp = /^[\p{L}\p{N}.-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,}$/u;
            const requiredError = t('field_required');
            if (!values.email) {
              errors.email = requiredError;
            } else if (!emailRegExp.test(values.email)) {
              errors.email = t('invalid_email_address');
            }
            if (!values.password) {
              errors.password = requiredError;
            }
            if (values.password.length < 8) {
              errors.password = t('invalid_length');
            }
            if (!values.firstName) {
              errors.firstName = requiredError;
            } else if (values.firstName.length < 2) {
              errors.firstName = t('invalid_name');
            }
            if (!values.lastName) {
              errors.lastName = requiredError;
            } else if (values.lastName.length < 2) {
              errors.lastName = t('invalid_name');
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm = requiredError;
            } else if (values.passwordConfirm !== values.password) {
              errors.passwordConfirm = t('invalid_password');
            }
            if (!values.role) {
              errors.role = requiredError;
            }
            if (values.role !== roles.Worker && !values.category) {
              errors.category = requiredError;
            }
            if (values.role !== roles.Worker && !values.companyName) {
              errors.companyName = requiredError;
            } else if (values.role !== roles.Worker && values.companyName.length < 3) {
              errors.companyName = t('invalid_company_name');
            }  
            return errors;
          }}
          // handleSubmit doesn't need password confirmation
          // eslint-disable-next-line no-unused-vars
          onSubmit={({ passwordConfirm, ...rest }) => {
            handleSubmit(rest);
          }}
        >
          {({ isValid, dirty, values, setFieldValue }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                <FormikTextField
                  label={t('firstName')}
                  name="firstName"
                  type="text"
                />
                <FormikTextField
                  label={t('lastName')}
                  name="lastName"
                  type="text"
                />
                <FormikTextField
                  label={t('email')}
                  name="email"
                  type="text"
                  placeholder="user@mail.com"
                  className="marginTop"
                />
                <Box display="flex" flexDirection="row">
                  <Box paddingRight={1}>
                    <FormikTextField
                      label={t('password')}
                      name="password"
                      type="password"
                      className="marginTop"
                    />
                  </Box>
                  <FormikTextField
                    label={t('confirm')}
                    name="passwordConfirm"
                    type="password"
                    className="marginTop"
                  />
                </Box>
                <Box display="flex" flexDirection="column" className="marginTop2">
                  <FormikSelectField
                    label={t('role')}
                    name="role"
                    options={roleOptions}
                  />
                </Box>
                {(values.role === roles.Agency || values.role === roles.Business) && (
                  <><Box display="flex" flexDirection="column" className="marginTop2">
                    <FormikTextField
                        label={t('companyName')}
                        name="companyName"
                        type="text"
                      />
                  </Box>
                  <Box display="flex" flexDirection="column" className="marginTop">
                      <FormikSelectField
                        label={t('category')}
                        name="category"
                        options={categoryOptions}
                        setFieldValue={setFieldValue}
                      />
                  </Box></>
                )}
                <Typography gutterBottom variant="body2" color="textSecondary" className="marginTop">
                  {t('terms_of_use')}
                  <Link
                    style={{ cursor: 'pointer' }}
                    variant="body2"
                    onClick={() => setOpen(true)}
                    underline="hover">
                    {t('terms_agency')}
                  </Link>
                </Typography>
                <SignUpModal open={open} handleClose={() => setOpen(false)} />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || loading}
                  variant="contained"
                  color={(!dirty || !isValid || loading) ? 'warning' : 'primary'}
                  className="marginTop"
                >
                  {loading ? <CircularProgress size={24} /> : t('sign_up')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
