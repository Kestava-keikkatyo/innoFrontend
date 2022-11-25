import React, {useEffect, useState} from 'react';
import { Feedback } from '../../types/types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {Button, CircularProgress, FormControl, Grid, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Form, Formik, Field } from 'formik';
import FormikField, {FormikSelectField} from '../../components/FormField';
import { IRootState } from '../../utils/store';
import { createFeedback } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import {fetchAllAgencies} from '../../actions/usersActions';
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

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
  const isLoading = useSelector((state: IRootState) => state.feedback.loading);

  const questions = {
    shift: t('feeling_shift'),
    orientation: t('how_was_orientation'),
    reception: t('reception'),
    appreciation: t('appreciation'),
    expectations: t('expectations'),
  };

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
              {Object.entries(questions).map(questionEntry => (
                  <div key={questionEntry[0]}>
                    <div>
                      <Typography color="success" id={questionEntry[0] + '-radio-buttons-group-label'} className={classes.title} variant="h6">{questionEntry[1]}</Typography>
                    </div>
                    <FormControl>
                      <RadioGroup
                          row
                          aria-labelledby={questionEntry[0] + '-radio-buttons-group-label'}
                      >
                        <Field required name={questionEntry[0]} value={1} icon={<SentimentVeryDissatisfiedIcon className={classes.uncheckedIcon} />} checkedIcon={<SentimentVeryDissatisfiedIcon className="mood-icon" />} as={Radio} />
                        <Field name={questionEntry[0]} value={2} icon={<SentimentNeutralIcon className={classes.uncheckedIcon} />} checkedIcon={<SentimentNeutralIcon className="mood-icon" />} as={Radio} />
                        <Field name={questionEntry[0]} value={3} icon={<SentimentSatisfiedAltIcon className={classes.uncheckedIcon} />} checkedIcon={<SentimentSatisfiedAltIcon className="mood-icon" />} as={Radio} />
                        <Field name={questionEntry[0]} value={4} icon={<SentimentVerySatisfiedIcon className={classes.uncheckedIcon} />} checkedIcon={<SentimentVerySatisfiedIcon className="mood-icon" />} as={Radio} />
                      </RadioGroup>
                    </FormControl>
                  </div>
              ))}
              <TextField className={classes.textField} placeholder={t('feedbackPlaceholder')} multiline rows={4}/>
              <TextField className={classes.textField} placeholder={t('feedbackPlaceholderEnd')} multiline rows={10}/>
              <Typography color="primary" className={classes.title} variant="h1">{t('thanks_for_feedback')}</Typography>
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
    marginBottom: '40px',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    textAlign: 'center',
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
  uncheckedIcon: {
    color: '#ccc',
    '&:hover': {
      color: '#444',
    },
    width: 50,
    height: 50,
  },
  checkedIcon: {
    color: '#ccc',
    '&:hover': {
      color: '#444',
    },
    width: 50,
    height: 50,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    display: 'flex',
    marginTop: '40px',
    marginBottom: '40px',
  }
}));

export default SendFeedback;