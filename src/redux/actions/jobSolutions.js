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


// 10 question
export const update10question = (data) => {
   return {
      type: types.UPDATE10QUESTION,
      payload: data
   }
}

export const update10questionSuccess = (data) => {
   return {
      type: types.UPDATE10QUESTION_SUCCESS,
      payload: data
   }
}

export const update10questionFailed = () => {
   return {
      type: types.UPDATE10QUESTION_FAILED
   }
}

// update 20 question
export const update20question = (data) => {
   return {
      type: types.UPDATE20QUESTION,
      payload: data
   }
}

export const update20questionSuccess = (data) => {
   return {
      type: types.UPDATE20QUESTION_SUCCESS,
      payload: data
   }
}

export const update20questionFailed = () => {
   return {
      type: types.UPDATE20QUESTION_FAILED
   }
}

// update 30 question
export const update30question = (data) => {
   return {
      type: types.UPDATE30QUESTION,
      payload: data
   }
}

export const update30questionSuccess = (data) => {
   return {
      type: types.UPDATE30QUESTION_SUCCESS,
      payload: data
   }
}

export const update30questionFailed = () => {
   return {
      type: types.UPDATE30QUESTION_FAILED
   }
}

// update 40 question
export const update40question = (data) => {
   return {
      type: types.UPDATE40QUESTION,
      payload: data
   }
}

export const update40questionSuccess = (data) => {
   return {
      type: types.UPDATE40QUESTION_SUCCESS,
      payload: data
   }
}

export const update40questionFailed = () => {
   return {
      type: types.UPDATE40QUESTION_FAILED
   }
}

// update 50 question
export const update50question = (data) => {
   return {
      type: types.UPDATE50QUESTION,
      payload: data
   }
}

export const update50questionSuccess = (data) => {
   return {
      type: types.UPDATE50QUESTION_SUCCESS,
      payload: data
   }
}

export const update50questionFailed = () => {
   return {
      type: types.UPDATE50QUESTION_FAILED
   }
}

// update 60 question
export const update60question = (data) => {
   return {
      type: types.UPDATE60QUESTION,
      payload: data
   }
}

export const update60questionSuccess = (data) => {
   return {
      type: types.UPDATE60QUESTION_SUCCESS,
      payload: data
   }
}

export const update60questionFailed = () => {
   return {
      type: types.UPDATE60QUESTION_FAILED
   }
}

export const register = (data) => {
   return {
      type: types.REGISTER,
      payload: data
   }
}

export const registerSuccess = (data) => {
   return {
      type: types.REGISTER_SUCCESS,
      payload: data
   }
}

export const registerFailed = () => {
   return {
      type: types.REGISTER_FAILED
   }
}
