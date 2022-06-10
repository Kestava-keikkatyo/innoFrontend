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
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e,
      });
      dispatch(
        setAlert("Failed to send the work request: " + e, severity.Error, 15)
      );
    }
  };

/**
 * @function
 * @desc Fetches user's work requests.
 */
export const fetchMyWorkRequests = () => async (dispatch: any) => {
  try {
    dispatch({
      type: workRequestType.WORKREQUEST_GETALL_REQUEST,
    });
    const res = await workRequestService.fetchMyWorkRequests();
    dispatch({
      type: workRequestType.WORKREQUEST_GETALL_SUCCESS,
      data: res.data,
    });
  } catch (e) {
    dispatch({
      type: workRequestType.WORKREQUEST_FAILURE,
      data: e,
    });
    dispatch(
      setAlert("Failed to fetch work requests!: " + e, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc Fetches work request by Id.
 */
export const fetchWorkRequestById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: workRequestType.WORKREQUEST_GET_CURRENT_REQUEST,
    });
    const res = await workRequestService.fetchWorkRequestById(id);
    dispatch({
      type: workRequestType.WORKREQUEST_GET_CURRENT_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    dispatch({
      type: workRequestType.WORKREQUEST_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch WORK REQUEST: " + error, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc update work request.
 */
export const updateWorkRequest =
  (workRequestId: string, workRequest: WorkRequest) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_UPDATED_REQUEST,
      });

      const res = await workRequestService.updateWorkRequest(
        workRequestId,
        workRequest
      );
      dispatch({
        type: workRequestType.WORKREQUEST_UPDATED_SUCCESS,
        data: res.data,
      });
    } catch (error) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: error,
      });
      dispatch(
        setAlert("Failed to update work request: " + error, severity.Error, 15)
      );
    }
  };
