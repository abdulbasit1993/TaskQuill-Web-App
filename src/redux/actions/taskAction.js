import {
  USER_TASKS_REQUEST,
  USER_TASKS_SUCCESS,
  USER_TASKS_FAILURE,
} from "../../constants/actionTypes";

import { apiService } from "../../services/apiService";
import { GET_TASKS } from "../../constants/apiEndpoints";

const userTasksRequest = () => {
  return {
    type: USER_TASKS_REQUEST,
  };
};

const userTasksSuccess = (data) => {
  return {
    type: USER_TASKS_SUCCESS,
    data: data,
  };
};

const userTasksFailure = (err) => {
  return {
    type: USER_TASKS_FAILURE,
    data: err,
  };
};

export const getUserTasks = (token) => {
  return async (dispatch) => {
    dispatch(userTasksRequest());

    try {
      const res = await apiService.getCall(GET_TASKS, token);
      const response = res.data;
      dispatch(userTasksSuccess(response));
    } catch (err) {
      dispatch(userTasksFailure(err));
    }
  };
};
