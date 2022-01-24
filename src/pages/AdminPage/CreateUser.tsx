import React from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createAdmin } from '../../actions/adminActions';
import FormikField from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import ImageUploader from '../../components/ImageUploader';
import { useTranslation } from "react-i18next"
import i18next from "i18next"

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const CreateUserSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, i18next.t("name_should_be_three_letters_at_least"))
    .required(i18next.t("name_is_required")),
    email: Yup.string().email(i18next.t("not_valid_email")).required(i18next.t("email_is_required")),
    password: Yup.string().required(i18next.t("password_is_required")),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), undefined], i18next.t("passwords_must_match"))
});

const NewUser: React.FC<any> = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSubmit = (values: FormValues) => {
        dispatch(createAdmin(values.name, values.email, values.password));
        dispatch(setAlert(i18next.t("user_created_successfully")));
      };
      return (
      <div className={classes.newUser}>
          <div className={classes.userTitleContainer}>
              <Typography className={classes.title} variant="h4">{t('add_new_admin')}</Typography>
          </div>
          <div className={classes.userAccount}>
              <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={CreateUserSchema}
              >
                  {() => {
                      return (
                      <Form>
                          <div className={classes.userAccountTop}>
                          <ImageUploader />
                          </div>
                          <FormikField name="name" label={t('create_user_name')} required />
                          <FormikField name="email" label={t('create_user_email')} required />
                          <FormikField name="password" label={t('create_user_password')} type="password" required />
                          <FormikField name="confirmPassword" label={t('create_user_confirm_password')} type="password" required />
                          <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('create')}</Button>
                        </Form>
                    );
                }}
                </Formik>
          </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    newUser: {
        flex: '4',
        padding: '20px',
    },
    button: {
        left: theme.spacing(0),
    },
    title: {
        color: '#996699',
        marginTop: '5px',
        marginBottom: '15px',
    },
    userTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    userUploadImg: {
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    userAccount: {
        flex: '1',
        padding: '20px',
        width: '400px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    userAccountTop: {
        display: 'flex',
        alignItems: 'center',
    }
}));

export default NewUser;


