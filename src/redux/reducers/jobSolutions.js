import * as types from '../types';

const initialState = {
   username: null,
   isLogin: false,
   isLoginFailed: false,
   result: {
      
   },
   isSendData: false
}

export default function jobSolutions(state = initialState, action) {
   switch (action.type) {

      case types.LOGIN: {
         return {
            ...state,
            isLogin: true,
            isLoginFailed: true
         }
      }

      case types.LOGIN_SUCCESS: {
         console.log('action.payload.user', action.payload.user)
         let user = action.payload.user

         return {
            ...state,
            username: action.payload.user.user_name,
            result: user,
            isLogin: false,
            isLoginFailed: true
         }
      }
      
      case types.LOGIN_FAILED: {
         return {
            ...state,
            isLogin: true,
            isLoginFailed: false
         };
      }

      case types.SENDDATA: {
         return {
            ...state,
            isSendData: true
         }
      }

      case types.SENDDATA_SUCCESS: {

         let { username, scoreA, scoreO, scoreN, scoreC, scoreE, check_send } = action.payload
         let result = {...state.result, scoreA, scoreO, scoreN, scoreC, scoreE, check_send}
         //   if ()
         return {
            ...state,
            isSendData: false,
            result: result
         }
      }

      case types.SENDDATA_FAILED: {

         return {
            ...state,
            isSendData: false
         }
      }

      default:
      return state
   }
} 