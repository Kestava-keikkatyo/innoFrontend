import React from 'react';
import { Button, CircularProgress, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikField from '../../components/FormField';
import { Topic } from '../../types/types';
import { IRootState } from '../../utils/store';
import { useTranslation } from "react-i18next"
import { createTopic } from '../../actions/topicActions';

const initialValues: Topic = {
  _id: "",
  question: "",
  answer: "",
};

const CreateTopicSchema = Yup.object().shape({
  question: Yup.string().min(2, "Question should be three letters at least!").required("Question is required!"),
  answer: Yup.string().min(2, "Answer should be three letters at least!").required("Answer is required!"),
});

const CreateTopic: React.FC<any> = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: IRootState) => state.topic.loading)

  const handleSubmit = (topic: Topic) => {
    dispatch(createTopic(topic));
  };
  return (
    <div className={classes.newTopic}>
      <div className={classes.topicTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h5">{t('add_new_topic')}</Typography>
      </div>
      <div className={classes.topicContainer}>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CreateTopicSchema}
        >
          {(props) => {
            return (
            <Form>
              <div className={classes.topicContainerTop}>
                <FormikField name="question" label={t('topic_question')} required multiline />
                <FormikField name="answer" label={t('topic_answer')} required multiline />
              </div>
              {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('create')}</Button>}
            </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  newTopic: {
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
  topicTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topicContainer: {
    flex: '1',
    padding: '20px',
    width: '600px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    topicContainerTop: {
    marginBottom: '70px',
    }
}));

export default CreateTopic;


