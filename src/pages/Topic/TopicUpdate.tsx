import React, { useEffect } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import FormikField from '../../components/FormField'
import { setAlert } from '../../actions/alertActions'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Topic } from '../../types/types'
import { useParams, Link } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import PageLoading from '../../components/PageLoading'
import { fetchTopicById, updateTopic } from '../../actions/topicActions'

const CreateTopicSchema = Yup.object().shape({
  question: Yup.string()
    .min(2, 'Question should be three letters at least!')
    .required('Question is required!'),
  answer: Yup.string()
    .min(2, 'Answer should be three letters at least!')
    .required('Answer is required!'),
})

type TopicUrlParams = {
  topicId: string
}

const TopicUpdate: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()

  const { topicId } = useParams<TopicUrlParams>()

  const topicData = useSelector((state: IRootState) => state.topic.currentTopic)
  useEffect(() => {
    dispatch(fetchTopicById(topicId))
  }, [dispatch, topicId])

  if (!topicData || topicId !== topicData._id) return <PageLoading />

  const handleSubmit = (topic: Topic) => {
    dispatch(updateTopic(topic))

    dispatch(setAlert(i18next.t('topic_updated_successfully')))
  }

  return (
    <div className={classes.newTopic}>
      <div className={classes.topicTitleContainer}>
        <Typography color='primary' className={classes.title} variant='h5'>
          {t('topic_update_topic')}
        </Typography>
      </div>
      <div className={classes.topicContainer}>
        <Formik
          initialValues={topicData}
          onSubmit={handleSubmit}
          validationSchema={CreateTopicSchema}
        >
          {() => {
            return (
              <Form>
                <div className={classes.topicContainerTop}>
                  <FormikField name='question' label={t('topic_question')} required multiline />
                  <FormikField name='answer' label={t('topic_answer')} required multiline />
                </div>
                <Stack direction='row' spacing={2}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.button}
                  >
                    {t('button_update')}
                  </Button>
                  <Button variant='outlined' color='primary' component={Link} to='/topics'>
                    {t('button_cancel')}
                  </Button>
                </Stack>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
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
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  topicContainerTop: {
    marginBottom: '70px',
  },
}))

export default TopicUpdate
