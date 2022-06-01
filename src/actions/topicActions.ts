import topicService from "../services/topicService";
import { topicType } from "../types/types";
import { Topic, severity } from "../types/types";
import { setAlert } from "./alertActions";
import history from "../utils/history";

/**
 * Create topic
 * @function
 * @param {Object} topic - Basic topic information (question, answer)
 * @param {string} role - Admin
 */
export const createTopic = (topic: Topic) => async (dispatch: any) => {
  try {
    dispatch({
      type: topicType.TOPIC_CREATED_REQUEST,
      data: topic,
    });

    const { data } = await topicService.createTopic(topic);
    dispatch({
      type: topicType.TOPIC_CREATED_SUCCESS,
      data,
    });
    dispatch(setAlert("Topic created successfully!"));
  } catch (e) {
    dispatch({
      type: topicType.TOPIC_CREATED_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to create the topic: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Delete topic by Id
 */
export const deleteTopic = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: topicType.TOPIC_DELETED_REQUEST,
    });
    const data = await topicService.deleteTopic(id);
    dispatch({ type: topicType.TOPIC_DELETED_SUCCESS, data: { _id: id } });
  } catch (e) {
    dispatch({
      type: topicType.TOPIC_DELETED_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to delete the topic!: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Fetches all topics.
 */
export const fetchAllTopics = () => async (dispatch: any) => {
  try {
    dispatch({
      type: topicType.TOPIC_GETALL_REQUEST,
    });
    const res = await topicService.fetchAllTopics();
    dispatch({ type: topicType.TOPIC_GETALL_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({
      type: topicType.TOPIC_GETALL_FAILURE,
      data: e,
    });
    dispatch(
      setAlert("Failed to fetch all the topics!: " + e, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc Fetches topic by Id.
 */
export const fetchTopicById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: topicType.TOPIC_GET_CURRENT_REQUEST,
    });
    const res = await topicService.fetchTopicById(id);
    dispatch({ type: topicType.TOPIC_GET_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: topicType.TOPIC_GET_CURRENT_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch the topic: " + error, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc update topic.
 */
export const updateTopic =
  (topicId: string, topic: Topic) => async (dispatch: any) => {
    try {
      dispatch({
        type: topicType.TOPIC_UPDATED_REQUEST,
      });

      const res = await topicService.updateTopic(topicId, topic);
      dispatch({ type: topicType.TOPIC_UPDATED_SUCCESS, data: res.data });
      history.push("/topics");
    } catch (error) {
      dispatch({
        type: topicType.TOPIC_UPDATED_FAILURE,
        data: error,
      });
      dispatch(
        setAlert("Failed to update topic: " + error, severity.Error, 15)
      );
    }
  };
