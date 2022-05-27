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
