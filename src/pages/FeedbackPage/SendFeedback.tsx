import React from 'react';
import { Feedback } from '../../types/types';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import FormikField from '../../components/FormField';
import { IRootState } from '../../utils/store';
import { createFeedback } from '../../actions/feedbackActions2';

const initialValues: Feedback = {
    heading: "",
    message: "",
};

const SendFeedbackSchema = Yup.object().shape({
    heading: Yup.string()
    .min(2, "Title should be three letters at least!")
    .required("Title is required!"),
    message: Yup.string()
    .min(2, "Category should be three letters at least!")
    .required("Category is required!"),
  });

const SendFeedback: React.FC<any> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: IRootState) => state.feedback2.loading)
    
    const handleSubmit = (feedback: Feedback) => {
        dispatch(createFeedback(feedback));
    };

    return (
        <div className={classes.newFeedback}>
      <div className={classes.feedbackTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h4">Send feedback</Typography>
      </div>
      <div className={classes.feedbackContainer}>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SendFeedbackSchema}
        >
          {() => {
            return (
            <Form>
                <div className={classes.feedbackContainerTop}>
                    <FormikField name="heading" label="Title" required />
                </div>
                <div className={classes.feedbackContainerButtom}>
                    <FormikField name="message" label="Message" required multiline />
                </div>
                {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.button}>Send</Button>}
            </Form>
            );
          }}
        </Formik>
      </div>
    </div>
    );
}

const useStyles = makeStyles((theme) => ({
    newFeedback: {
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
    feedbackTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    feedbackContainer: {
        flex: '1',
        padding: '20px',
        width: '600px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
      feedbackContainerTop: {
        marginBottom: '40px',
    },
      feedbackContainerButtom: {
        marginBottom: '30px',
    }
  }));
export default SendFeedback;