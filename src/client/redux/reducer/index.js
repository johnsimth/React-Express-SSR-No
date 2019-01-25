import { userConstants } from '../constants/action_types';

const initialState = {
  loading: false,
  resData: [{ loginFlag: false }],
  error: null,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        resData: [action.payload],
      };
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload.error,
      };
    case userConstants.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        resData: [action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
