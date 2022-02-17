import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me, updatePassword } from '../../actions/userActions';
import makeStyles from '@mui/styles/makeStyles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form } from 'formik';
import { FormikTextField } from '../../components/FormField';
import { Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Component for changing worker/agency/business password.
 */
const ChangePassword: React.FC<any> = () => {
  const { data } = useSelector((state: any) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(me());
  }, [dispatch, data.role]);

  const handleSubmit = (updateData: any) => {
    dispatch(updatePassword(updateData));
  };

  return (
    <Accordion variant="outlined" className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">{t('change_password')}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {t('password_instructions')}
        </Typography>
      </AccordionDetails>
      <AccordionDetails style={{ width: '100%' }}>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validate={(values) => {
            const errors: any = {};
            const requiredError = 'Field is required';
            if (!values.currentPassword) {
              errors.currentPassword = requiredError;
            } else if (
              // password: uppercase, lowercase and number min 6 characters
              !values.newPassword.match(
                /(?=^.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
              )
            ) {
              errors.newPassword =
                'Password should be at least 6 characters, including at least one uppercase and one number';
            }
            if (!values.confirmNewPassword) {
              errors.confirmNewPassword = requiredError;
            } else if (values.newPassword !== values.confirmNewPassword) {
              errors.confirmNewPassword = 'Password does not match';
            }
            return errors;
          }}
          onSubmit={({ currentPassword, newPassword }) =>
            handleSubmit({ currentPassword, newPassword })
          }
        >
          {({ isValid, dirty }) => (
            <Form>
              <Grid container>
                <Grid item xs={12}>
                  <FormikTextField
                    label={t("current_password")}
                    name="currentPassword"
                    type="password"
                    placeholder="jarmo123"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: '0 5px' }}>
                  <FormikTextField
                    label={t("new_password")}
                    name="newPassword"
                    type="password"
                    placeholder="jarmo123"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: '0 5px' }}>
                  <FormikTextField
                    label={t("confirm_password")}
                    name="confirmNewPassword"
                    type="password"
                    placeholder="jarmo123"
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ padding: '0 5px', marginTop: 10 }}
                >
                  <Button
                    type="submit"
                    disabled={!dirty || !isValid}
                    variant="contained"
                    color="primary"
                    style={{ width: '100%' }}
                  >
                    {t('update_password')}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '100%',
    border: '1px solid #C5C5C5',
    // spacing(2, 0) : 2 top & bottom, 0 left & right
    margin: theme.spacing(2, 0),
    borderRadius: 5,
  },
}));

export default ChangePassword;
