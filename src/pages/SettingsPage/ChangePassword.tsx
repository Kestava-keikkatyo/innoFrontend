import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me, updatePassword } from '../../actions/userActions';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik, Form } from 'formik';
import { FormikTextField } from '../../components/FormField';
import { Button, Grid } from '@material-ui/core';

/**
 * @component
 * @desc Component for changing worker/agency/business password.
 */
const ChangePassword: React.FC<any> = () => {
  const { data } = useSelector((state: any) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me(data.role));
  }, [dispatch, data.role]);

  const handleSubmit = (updateData: any) => {
    dispatch(updatePassword(updateData, data.role));
  };

  return (
    <Accordion variant="outlined" className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Change password</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Enter your current password, the new password and then confirm the new
          password
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
                    label="Current password"
                    name="currentPassword"
                    type="password"
                    placeholder="jarmo123"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: '0 5px' }}>
                  <FormikTextField
                    label="New password"
                    name="newPassword"
                    type="password"
                    placeholder="jarmo123"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: '0 5px' }}>
                  <FormikTextField
                    label="Confirm new password"
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
                    Update password
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
