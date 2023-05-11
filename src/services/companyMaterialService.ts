import axios, { AxiosResponse } from "axios";
import { File } from "../types/types";
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
 * Sends a request to the server at the '/file' endpoint to create a new file.
 * Logs the server response or any errors that occur during execution.
 * @param fileData - The file data to be sent.
 * @returns Promise<File> - Resolves to a File object.
 */
export const createFile = async (fileData: FormData): Promise<File> => {
  try {
    const response: AxiosResponse = await axios.post(`${baseUrl}/file`, fileData, authHeader());
    return response.data.file;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Sends a request to the server at the '/file/:id' endpoint to get a file by its ID.
 * Logs the server response or any errors that occur during execution.
 * @param fileId - The ID of the file to be retrieved.
 * @returns Promise<File> - Resolves to a File object.
 */
export const getFileById = async (fileId: string): Promise<File> => {
  try {
    const response: AxiosResponse = await axios.get(`${baseUrl}/file/${fileId}`, authHeader());
    return response.data.file;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Sends a request to the server at the '/file/:id' endpoint to delete a file by its ID.
 * Logs the server response or any errors that occur during execution.
 * @param fileId - The ID of the file to be deleted.
 * @returns Promise<void> - Resolves when the file is deleted.
 */
export const deleteFile = async (fileId: string): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.delete(`${baseUrl}/file/${fileId}`, authHeader());
    console.log(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
