import topicService from '../services/topicService'
import { Topic, topicType, severity } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import { Dispatch } from 'redux'
import {
  TopicActionFailure,
  TopicGetAllRequest,
  TopicGetAllSuccess,
  TopicGetCurrentRequest,
  TopicGetCurrentSuccess,
  TopicSimilarActions,
} from '../types/state'

/**
 * Create topic
 * @function
 * @param {Object} topic - Basic topic information (question, answer)
 * @param {string} role - Admin
 */
export const createTopic =
  (topic: Topic) => async (dispatch: Dispatch<TopicSimilarActions | TopicActionFailure>) => {
    try {
      dispatch({
        type: topicType.TOPIC_CREATED_REQUEST,
        data: topic,
      })

      const { data } = await topicService.createTopic(topic)
      dispatch({
        type: topicType.TOPIC_CREATED_SUCCESS,
        data,
      })
      setAlert('Topic created successfully!')(dispatch)
    } catch (e) {
      dispatch({
        type: topicType.TOPIC_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to create the topic: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Delete topic by Id
 */
export const deleteTopic =
  (topic: Topic) => async (dispatch: Dispatch<TopicSimilarActions | TopicActionFailure>) => {
    try {
      dispatch({
        type: topicType.TOPIC_DELETED_REQUEST,
        data: topic,
      })
      await topicService.deleteTopic(topic._id as string)
      dispatch({ type: topicType.TOPIC_DELETED_SUCCESS, data: topic })
    } catch (e) {
      dispatch({
        type: topicType.TOPIC_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to delete the topic!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all topics.
 */
export const fetchAllTopics =
  () =>
  async (dispatch: Dispatch<TopicGetAllRequest | TopicGetAllSuccess | TopicActionFailure>) => {
    try {
      dispatch({
        type: topicType.TOPIC_GETALL_REQUEST,
      })
      const res = await topicService.fetchAllTopics()
      dispatch({ type: topicType.TOPIC_GETALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: topicType.TOPIC_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch all the topics!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches topic by Id.
 */
export const fetchTopicById =
  (id: string) =>
  async (
    dispatch: Dispatch<TopicGetCurrentRequest | TopicGetCurrentSuccess | TopicActionFailure>,
  ) => {
    try {
      dispatch({
        type: topicType.TOPIC_GET_CURRENT_REQUEST,
      })
      const res = await topicService.fetchTopicById(id)
      dispatch({ type: topicType.TOPIC_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: topicType.TOPIC_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the topic: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc update topic.
 */
export const updateTopic =
  (topic: Topic) => async (dispatch: Dispatch<TopicSimilarActions | TopicActionFailure>) => {
    try {
      dispatch({
        type: topicType.TOPIC_UPDATED_REQUEST,
        data: topic,
      })

      const res = await topicService.updateTopic(topic)
      dispatch({ type: topicType.TOPIC_UPDATED_SUCCESS, data: res.data })
      history.push('/topics')
    } catch (e) {
      dispatch({
        type: topicType.TOPIC_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to update topic: ' + e, severity.Error, 15)(dispatch)
    }
  }
