import axios from 'axios';
import { userConstants } from '../constants/action_types';

export const login = ({ userName, password }) => (dispatch) => {
  dispatch(loginStarted());
  axios
    .post('/api/login', {
      userName,
      password
    })
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure(err.message));
    });
};

const loginSuccess = resData => ({
  type: userConstants.USER_LOGIN_SUCCESS,
  payload: {
    ...resData
  }
});

const loginFailure = error => ({
  type: userConstants.USER_LOGIN_FAILURE,
  payload: {
    error
  }
});

const loginStarted = () => ({
  type: userConstants.USER_LOGIN_STARTED
});

export const logout = () => ({
  type: userConstants.USER_LOGOUT,
  payload: { loginFlag: false }
});

export const signup = userData => ({
  type: userConstants.USER_SIGNUP,
  payload: userData
});
