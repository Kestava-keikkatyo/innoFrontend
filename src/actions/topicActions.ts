import topicService from "../services/topicService";
import { topicType } from "../types/types";
import { Topic, severity } from "../types/types";
import { setAlert } from "./alertActions";

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
    dispatch({ type: topicType.TOPIC_DELETED_SUCCESS, data: { id } });
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
