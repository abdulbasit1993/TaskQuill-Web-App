import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from "../../constants/actionTypes";

import { apiService } from "../../services/apiService";
import { GET_USER_PROFILE } from "../../constants/apiEndpoints";

const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST,
  };
};

const userProfileSuccess = (data) => {
  return {
    type: USER_PROFILE_SUCCESS,
    data: data,
  };
};

const userProfileFailure = (err) => {
  return {
    type: USER_PROFILE_FAILURE,
    data: err,
  };
};

export const getUserProfile = (token) => {
  return async (dispatch) => {
    dispatch(userProfileRequest());

    try {
      const res = await apiService.getCall(GET_USER_PROFILE, token);
      const response = res.data;
      dispatch(userProfileSuccess(response));
    } catch (err) {
      dispatch(userProfileFailure(err));
    }
  };
};
