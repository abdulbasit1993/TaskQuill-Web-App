import {
  USER_TASKS_REQUEST,
  USER_TASKS_SUCCESS,
  USER_TASKS_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
  loading: false,
  success: false,
  data: [],
  error: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
        error: "",
      };
    case USER_TASKS_FAILURE:
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

export default taskReducer;
