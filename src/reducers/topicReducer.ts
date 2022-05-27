/**
 * @module reducer/topic
 * @desc Redux topic reducer
 */
import { topicType } from "../types/types";
import { TopicActions, TopicState } from "./../types/state";

const initialState: TopicState = {
  currentTopic: undefined,
  loading: false,
  topics: [],
};

/**
 * @function
 * @desc Topic reducer that controls topic state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const topicReducer = (
  state = initialState,
  action: TopicActions
): TopicState => {
  switch (action.type) {
    case topicType.TOPIC_CREATED_REQUEST: {
      return {
        ...state,
        currentTopic: action.data,
        loading: true,
      };
    }
    case topicType.TOPIC_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        topics: [...state.topics, action.data],
      };
    }
    case topicType.TOPIC_CREATED_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    case topicType.TOPIC_DELETED_REQUEST: {
      return {
        ...state,
        currentTopic: action.data,
        loading: true,
      };
    }
    case topicType.TOPIC_DELETED_SUCCESS: {
      return {
        ...state,
        loading: false,
        topics: state.topics.filter((item) => item.id !== action.data.id),
      };
    }
    case topicType.TOPIC_DELETED_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default topicReducer;
