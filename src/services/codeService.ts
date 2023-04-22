import axios from "axios";
import { InviteCode } from "../types/types";
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
 * Sends an invite code object to the server at the '/addCode' endpoint.
 * Logs the server response or any errors that occur during execution.
 * @param inviteCode - An object with the InviteCode interface, including 'code' and 'userId' properties.
 * @returns Promise<void> - Resolves to void, does not return any meaningful value upon completion.
 */
export const addInviteCode = async (inviteCode: InviteCode): Promise<void> => {
  try {
    const response = await axios.post(`${baseUrl}/code/addCode`, inviteCode, authHeader());
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addAgencyConnection = async (inviteCode: InviteCode): Promise<void> => {
  try {
    const response = await axios.post(`${baseUrl}/code/createAgreement`, inviteCode, authHeader());
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};