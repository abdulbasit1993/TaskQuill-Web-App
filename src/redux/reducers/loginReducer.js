import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
  loading: false,
  success: false,
  data: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        data: [],
        error: action.data,
      };
    default:
      return state;
  }
};

export default loginReducer;
