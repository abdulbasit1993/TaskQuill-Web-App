import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../../constants/actionTypes";

import { authService } from "../../services/authService";

const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: data,
  };
};

const userLoginFailure = (err) => {
  return {
    type: USER_LOGIN_FAILURE,
    data: err,
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());

    try {
      const res = await authService.login(data);
      const response = res.data;
      dispatch(userLoginSuccess(response));
    } catch (err) {
      dispatch(userLoginFailure(err));
    }
  };
};
