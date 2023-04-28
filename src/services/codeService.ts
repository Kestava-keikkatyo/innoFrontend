import axios, { AxiosResponse } from "axios";
import { AgreementCode } from "../types/types";
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
 * Sends a request to the server at the '/addCodes' endpoint to create new agreement codes.
 * Logs the server response or any errors that occur during execution.
 * @param numberOfCodes - The number of agreement codes to be created.
 * @returns The agreement codes that were created.
 */
export const addAgreementCodes = async (numberOfCodes: number): Promise<Array<AgreementCode>> => {
  try {
    const response = await axios.post(`${baseUrl}/code/addCodes`, { numberOfCodes }, authHeader());
    return response.data; // Extract the data from the Axios response
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if an error occurs
  }
};

/**
 * Sends a request to the server at the '/getAgreementCodesByCreator' endpoint to get the agreement codes created by a user.
 * Logs the server response or any errors that occur during execution.
 * @returns Promise<Array<AgreementCode>> - Resolves to an array of AgreementCode objects.
 */
export const getAgreementCodesByCreator = async (): Promise<Array<AgreementCode>> => {
  try {
    const response = await axios.get(`${baseUrl}/code/getAgreementCodesByCreator`, authHeader());
    console.log(response);
    return response.data.agreementCodes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Sends a request to the server at the '/updateMarkedValue' endpoint to update the marked value of an agreement code.
 * Logs the server response or any errors that occur during execution.
 * @param id - The ID of the agreement code to be updated.
 * @param marked - The new marked value (boolean) to be set.
 * @returns Promise<AgreementCode> - Resolves to an updated AgreementCode object.
 */
export const updateAgreementCodeMarkedValue = async (id: string, marked: boolean): Promise<AgreementCode> => {
  try {
    const response: AxiosResponse = await axios.put(
      `${baseUrl}/code/updateMarkedValue`,
      { id, marked },
      authHeader()
    );
    return response.data.updatedAgreementCode;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error so you can handle it in your component when calling this function
  }
};

export const addAgencyConnection = async (code: String): Promise<void> => {
  try {
    const response = await axios.post(`${baseUrl}/code/createAgreement`, code, authHeader());
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};