import React, { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import FormikField from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Feedback } from '../../types/types';
import { useParams, Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import { fetchMyFeedbackById, updateFeedback } from '../../actions/feedBackActions';

const UpdateFeedbackSchema = Yup.object().shape({
    heading: Yup.string().min(2, 'Heading should be two letters at least!').required('Heading is required!'),
    message: Yup.string().min(2, 'Message should be two letters at least!').required('Message is required!'),
});

type FeedbackUrlParams = {
    feedbackId: string
  }

const FeedbackUpdate: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();

    const { feedbackId } = useParams<FeedbackUrlParams>();
    
    const feedbackData = useSelector((state: IRootState) => state.feedback.currentFeedback);
    useEffect(() => {
      dispatch(fetchMyFeedbackById(feedbackId));
    }, [dispatch, feedbackId]);
  
    if (!feedbackData || feedbackId !== feedbackData._id) return (
      <PageLoading />
    );
    
    const handleSubmit = (feedback: Feedback) => {
        dispatch(updateFeedback(feedback));

        dispatch(setAlert(i18next.t('feedback_updated_successfully')));
    };
    
    return (
      <div className={classes.newFeedback}>
        <div className={classes.feedbackTitleContainer}>
          <Typography color="primary" className={classes.title} variant="h5">{t('update_feedback')}</Typography>
        </div>
        <div className={classes.feedbackContainer}>
          <Formik
          initialValues={feedbackData}
          onSubmit={handleSubmit}
          validationSchema={UpdateFeedbackSchema}
          >
            {() => {
              return (
              <Form>
                <div className={classes.feedbackContainerTop}>
                <FormikField name="heading" label={t('feedback_title')} required />
                <FormikField name="message" label={t('feedback_message')} required multiline />
              </div>
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('button_edit')}</Button>
                  <Button variant="outlined" color="primary" component={Link} to="/feedback?tab=my">{t('button_cancel')}</Button>
                </Stack>
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
        marginBottom: '70px',
        }
}));

export default FeedbackUpdate;


