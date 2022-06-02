import workRequestService from "../services/workRequestService";
import { WorkRequest, workRequestType } from "../types/types";
import { severity } from "../types/types";
import { setAlert } from "./alertActions";

/**
 * Send work request
 * @function
 * @param {Object} workRequest - Basic work request information (headline, workersNumber ...)
 * @param {string} role - Business
 */
export const sendWorkRequest =
  (workrequest: WorkRequest) => async (dispatch: any) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_SEND_REQUEST,
        data: workrequest,
      });

      const { data } = await workRequestService.sendWorkRequest(workrequest);
      dispatch({
        type: workRequestType.WORKREQUEST_SEND_SUCCESS,
        data,
      });
      dispatch(setAlert("Work request was sent successfully!"));
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_SEND_FAILURE,
        data: e,
      });
      dispatch(
        setAlert("Failed to send the work request: " + e, severity.Error, 15)
      );
    }
  };
