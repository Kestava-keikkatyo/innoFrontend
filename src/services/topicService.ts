/**
 * @module service/topic
 * @desc Topic requests to backend.
 */
import axios from "axios";
import { Topic } from "../types/types";
import baseUrl from "../utils/baseUrl";
import { loadUser } from "../utils/storage";

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { "x-access-token": `${loadUser().token}` },
  };
};

/**
 * @function
 * @desc sends out create topic request.
 * @param {Topic} topic - Basic topic information.
 */
const createTopic = async (topic: Topic) => {
  return await axios.post(`${baseUrl}/topic/create`, topic, authHeader());
};

/**
 * @param id
 * @returns
 */
const deleteTopic = async (topicId: string) => {
  const res = await axios.delete(
    `${baseUrl}/topic/delete/${topicId}`,
    authHeader()
  );
  return res;
};

/**
 * @function
 * @desc Fetches all topics avaible with current token.
 */
const fetchAllTopics = async () => {
  const res = await axios.get(`${baseUrl}/topic/all`, authHeader());
  return res;
};

export default {
  createTopic,
  deleteTopic,
  fetchAllTopics,
};
