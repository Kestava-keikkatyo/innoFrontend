import React from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createAdmin } from '../../actions/adminActions';
import FormikField from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import ImageUploader from '../../components/ImageUploader';

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
    .min(2, "Name should be three letters at least!")
    .required("Name is required"),
    email: Yup.string().email("Not a valid email").required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
});

const NewUser: React.FC<any> = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSubmit = (values: FormValues) => {
        dispatch(createAdmin(values.name, values.email, values.password));
        dispatch(setAlert("User created successfully!"));
      };
      return (
      <div className={classes.newUser}>
          <div className={classes.userTitleContainer}>
              <Typography className={classes.title} variant="h4">Add new admin</Typography>
          </div>
          <div className={classes.userAccount}>
              <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={CreateUserSchema}
              >
                  {({ dirty, isValid }) => {
                      return (
                      <Form>
                          <div className={classes.userAccountTop}>
                          <ImageUploader />
                          </div>
                          <FormikField name="name" label="Name" required />
                          <FormikField name="email" label="Email" required />
                          <FormikField name="password" label="Password" type="password" required />
                          <FormikField name="confirmPassword" label="Confirm Password" type="password" required />
                          <Button type="submit" variant="contained" color="primary" className={classes.button}>Create</Button>
                        </Form>
                    );
                }}
                </Formik>
          </div>
        </div>
    );
}

export default NewUser;


