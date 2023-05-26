import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FormikTextField } from '../../components/FormField';
import logo_kk from '../../assets/logo_keikkakaveri_navbar.svg'

import './forms.css';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useSelector } from 'react-redux';

const ForgotPasswordForm: React.FC<any> = ({ handleSubmit }) => {
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

  return (
    <ThemeProvider theme={fontTheme}>
      <Card variant="outlined">
        <CardContent>
          <Typography align="center" className="marginTop2">
            <img src={logo_kk} style={{ width: '200px' }} />
          </Typography>
          <Typography align='center' className="marginTop2">
            {t('forgot_password_text')}
          </Typography>
          <Formik
            initialValues={{
              email: '',
            }}
            validate={(values) => {
              const errors: any = {};
              const emailRegExp = /^[\p{L}\p{N}.-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,}$/u;
              if (!emailRegExp.test(values.email)) {
                errors.email = t('invalid_email_address');
              }
              return errors;
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ isValid }) => (
              <Form>
                <Box display="flex" flexDirection="column">
                  <FormikTextField
                    label={t('email_label')}
                    name="email"
                    type="text"
                    className="marginTop2"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={!isValid || loading}
                    variant="contained"
                    color="primary"
                    className="marginTop"
                  >
                    {loading ? <CircularProgress size={24} /> : t('forgot_password_button')}
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

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
