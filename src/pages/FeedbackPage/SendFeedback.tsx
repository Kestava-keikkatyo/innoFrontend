import React, {useEffect, useState} from 'react';
import { Feedback } from '../../types/types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Form, Formik, Field } from 'formik';
import FormikField, {FormikSelectField} from '../../components/FormField';
import { IRootState } from '../../utils/store';
import { createFeedback } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import {fetchAllAgencies} from '../../actions/usersActions';

const initialValues: Feedback = {
  heading: '',
  recipient: '',
  sender: false,
  message: '',
};

const SendFeedbackSchema = Yup.object().shape({
    heading: Yup.string()
        .min(2, 'Title should be three letters at least!')
        .required('Title is required!'),
    recipient: Yup.string()
        .min(2, 'Recipient must be defined')
        .required('Recipient is required'),
    sender: Yup.boolean(),
    message: Yup.string()
        .min(2, 'Message should be three letters at least!')
        .required('Message is required!'),
  });

const SendFeedback: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state: IRootState) => state.feedback.loading)

  const recipients = useSelector((state: IRootState) => state.users.users);
  const me = useSelector((state: IRootState) => state.user.data.name);

  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);
  
  const handleSubmit = (feedback: Feedback) => {
    feedback.sender = !feedback.sender ? me : null;
    dispatch(createFeedback(feedback));
    history.push({
      pathname: history.location.pathname,
      search: '?' + new URLSearchParams({ tab: 'my' }).toString(),
    })
  };
  
  return (
    <div className={classes.newFeedback}>
      <div className={classes.feedbackTitleContainer}>
        <Typography color="primary" className={classes.title} variant="h1">{t('send_feedback')}</Typography>
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
              <div className={classes.feedbackField}>
                <FormikSelectField
                  label={t('feedback_recipient')}
                  name="recipient"
                  options={recipients.map((recipient) => {
                    return {
                      value: recipient._id,
                      label: recipient.name
                    }
                  })}
                  fullWidth
                  required
                />
              </div>
              <div className={classes.feedbackField}>
                <FormikField
                    name="heading"
                    label={t('feedback_title')}
                    required
                />
              </div>
              <div className={classes.feedbackField}>
                <FormikField
                    name="message"
                    label={t('feedback_message')}
                    required
                    multiline
                />
              </div>
              {isLoading ?
                  <CircularProgress color="primary" /> :
                  <>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      {t('send')}
                    </Button>
                    <label>
                      <Field type="checkbox" name="sender" />
                      {t('feedback_sender')} *
                    </label>
                  </>
              }
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
    // padding: '20px',
  },
  button: {
    left: theme.spacing(0),
    marginRight: '16px'
  },
  title: {
    marginTop: '5px',
    marginBottom: '15px',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
  },
  feedbackTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedbackContainer: {
    flex: '1',
    padding: '20px',
    // width: '600px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
  },
  feedbackField: {
    marginBottom: '40px',
  },
}));

export default SendFeedback;