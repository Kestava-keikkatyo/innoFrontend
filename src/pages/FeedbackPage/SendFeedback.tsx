import React, {useEffect} from 'react';
import { Feedback } from '../../types/types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  CircularProgress,
  FormControl,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Form, Formik, Field } from 'formik';
import { FormikSelectField, FormikTextField } from '../../components/FormField';
import { IRootState } from '../../utils/store';
import { createFeedback } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { fetchAllAgencies, fetchAllBusinessesAndAgencies } from '../../actions/usersActions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import User from '../Profile/User';

const SendFeedbackSchema = Yup.object().shape({
  recipientId: Yup.string()
    .min(4, 'Recipient id must be defined')
    .required('Recipient id is required!'),
  shift: Yup.number()
      .min(1, 'Min value 1.')
      .max(4, 'Max value 4.')
      .required('Shift is required!'),
  shiftMessage: Yup.string(),
  orientation: Yup.number()
      .min(1, 'Min value 1.')
      .max(4, 'Max value 4.')
      .required('Orientation is required!'),
  orientationMessage: Yup.string(),
  reception: Yup.number()
      .min(1, 'Min value 1.')
      .max(4, 'Max value 4.')
      .required('Reception is required!'),
  receptionMessage: Yup.string(),
  appreciation: Yup.number()
      .min(1, 'Min value 1.')
      .max(4, 'Max value 4.')
      .required('Appreciation is required!'),
  appreciationMessage: Yup.string(),
  expectation: Yup.number()
      .min(1, 'Min value 1.')
      .max(4, 'Max value 4.')
      .required('Expectation is required!'),
  expectationMessage: Yup.string(),
  additionalMessage: Yup.string(),
  anonymous: Yup.boolean(),
});

const SendFeedback: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state: IRootState) => state.feedback.loading);

  const questions = {
    shift: `${t('feedback_shift')} *`,
    orientation: `${t('feedback_orientation')} *`,
    reception: `${t('feedback_reception')} *`,
    appreciation: `${t('feedback_appreciation')} *`,
    expectation: `${t('feedback_expectation')} *`,
  };
  
  const recipients = useSelector((state: IRootState) => state.user.contacts) || [];
  const me = useSelector((state: IRootState) => state.user.data);

  const initialValues: Feedback = {
    recipientId: '',
    recipientFirstName: '',
    recipientLastName: '',
    shift: null,
    shiftMessage: '',
    orientation: null,
    orientationMessage: '',
    reception: null,
    receptionMessage: '',
    appreciation: null,
    appreciationMessage: '',
    expectation: null,
    expectationMessage: '',
    additionalMessage: '',
    senderId: me._id,
    senderName: me.name,
    anonymous: false
  };

  useEffect(() => {
    dispatch(fetchAllBusinessesAndAgencies());
  }, [dispatch]);

  const handleSubmit = (feedback: Feedback) => {
    if (recipients) {
      feedback.recipientFirstName = recipients.find(recipient => feedback.recipientId === recipient._id)?.firstName
      feedback.recipientLastName = recipients.find(recipient => feedback.recipientId === recipient._id)?.lastName
      console.log(feedback)
      dispatch(createFeedback(feedback));
      history.push({
      pathname: history.location.pathname,
      search: '?' + new URLSearchParams({ tab: 'my' }).toString(),
      })
    }
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
          {() => (
              <Form>
                <FormikSelectField
                  label={t('feedback_recipient')}
                  name="recipientId"
                  options={recipients.map((recipient) => {
                    return {
                      value: recipient._id,
                      label: recipient.companyName
                    }
                  })}
                  fullWidth
                  required
                />
                {Object.entries(questions).map(questionEntry => (
                  <div key={questionEntry[0]}>
                    <Typography
                      color="success"
                      id={questionEntry[0] + '-radio-buttons-group-label'}
                      className={classes.questionTitle}
                      variant="h6"
                    >
                      {questionEntry[1]}
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <RadioGroup
                        row
                        aria-labelledby={questionEntry[0] + '-radio-buttons-group-label'}
                        className={classes.fieldContainer}
                      >
                        <Field
                          required
                          name={questionEntry[0]}
                          value={1}
                          icon={<SentimentVeryDissatisfiedIcon className={classes.uncheckedIcon} />}
                          checkedIcon={<SentimentVeryDissatisfiedIcon className={classes.checkedIcon} />}
                          as={Radio}
                        />
                        <Field
                          name={questionEntry[0]}
                          value={2}
                          icon={<SentimentNeutralIcon className={classes.uncheckedIcon} />}
                          checkedIcon={<SentimentNeutralIcon className={classes.checkedIcon} />}
                          as={Radio}
                        />
                        <Field
                          name={questionEntry[0]}
                          value={3}
                          icon={<SentimentSatisfiedAltIcon className={classes.uncheckedIcon} />}
                          checkedIcon={<SentimentSatisfiedAltIcon className={classes.checkedIcon} />}
                          as={Radio}
                        />
                        <Field
                          name={questionEntry[0]}
                          value={4}
                          icon={<SentimentVerySatisfiedIcon className={classes.uncheckedIcon} />}
                          checkedIcon={<SentimentVerySatisfiedIcon className={classes.checkedIcon} />}
                          as={Radio}
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormikTextField
                      className={classes.textField}
                      name={`${questionEntry[0]}Message`}
                      label={t('feedback_message_placeholder')}
                      multiline
                      rows={2}
                      type='text'
                    />
                  </div>
                ))}
                <FormikTextField
                  className={classes.textField}
                  name='additionalMessage'
                  label={t('feedback_additional_message')}
                  multiline
                  rows={10}
                  type='text'
                />
                <Typography color="primary" className={classes.title} variant="h1">
                  {t('thanks_for_feedback')}
                </Typography>
                {isLoading ?
                  <CircularProgress color="primary" /> :
                  <>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      {t('send')}
                    </Button>
                    <label>
                      <Field type="checkbox" name="anonymous" />
                      {t('feedback_send_anonymously')}
                    </label>
                  </>
                }
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  newFeedback: {
    flex: '4',
  },
  title: {
    marginTop: '5px',
    marginBottom: '40px',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    textAlign: 'center',
  },
  questionTitle: {
    marginTop: '40px',
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
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
  },
  feedbackField: {
    marginBottom: '40px',
  },
  formControl: {
    width: '100%'
  },
  fieldContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  uncheckedIcon: {
    color: '#ccc',
    width: 50,
    height: 50,
  },
  checkedIcon: {
    color: '#fff',
    background:
      'rgb(255, 124, 0) ' +
      'linear-gradient(' +
        '136deg, ' +
        'rgb(255, 150, 55) 0%, ' +
        'rgb(242, 113, 33) 50%, ' +
        'rgb(233, 64, 87) 100%' +
      ');',
    borderRadius: '60px',
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
  },
  button: {
    left: theme.spacing(0),
    marginRight: '16px'
  }
}));

export default SendFeedback;