import axios from "axios";
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
export const addAgreementCodes = async (numberOfCodes: number): Promise<void> => {
  try {
    return await axios.post(`${baseUrl}/addCodes`, { numberOfCodes }, authHeader());
  } catch (error) {
    console.error(error);
  }
};

/**
 * Sends a request to the server at the '/getAgreementCodesByCreator' endpoint to get the agreement codes created by a user.
 * Logs the server response or any errors that occur during execution.
 * @returns Promise<Array<AgreementCode>> - Resolves to an array of AgreementCode objects.
 */
export const getAgreementCodesByCreator = async (): Promise<Array<AgreementCode>> => {
  try {
    const response = await axios.get(`${baseUrl}/getAgreementCodesByCreator`, authHeader());
    console.log(response);
    return response.data.agreementCodes;
  } catch (error) {
    console.error(error);
    return [];
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