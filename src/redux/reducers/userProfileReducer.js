import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
  loading: false,
  success: false,
  data: [],
  error: "",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
        error: "",
      };
    case USER_PROFILE_FAILURE:
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

export default userProfileReducer;
