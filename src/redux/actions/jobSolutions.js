import * as types from '../types';

// login
export const login = (data) => {
   return {
      type: types.LOGIN,
      payload: data
   }
}

export const loginSuccess = (data) => {
   return {
      type: types.LOGIN_SUCCESS,
      payload: data
   }
}

export const loginFailed = () => {
   return {
      type: types.LOGIN_FAILED
   }
}

export const sendData = (data) => {
   return {
      type: types.SENDDATA,
      payload: data
   }
}

export const sendDataSuccess = (data) => {
   return {
      type: types.SENDDATA_SUCCESS,
      payload: data
   }
}

export const sendDataFailed = () => {
   return {
      type: types.SENDDATA_FAILED
   }
}

