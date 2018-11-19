import { takeLatest, put, select, call } from 'redux-saga/effects';
import * as types from '../types';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
   loginFailed,
   loginSuccess,
   sendDataFailed,
   sendDataSuccess
} from '../actions/jobSolutions';

function* sagaLogin(action) {
   // console.log('sagaLogin', action)
   try {
      let res = yield fetch('http://localhost/hcstt/login.php', {
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.username,
            password: action.payload.password,
         })
      }).then((res) => res.json())
      if (res.status == "SUCCESS") {
         console.log('success', res.data[0].user_name)
         yield put(loginSuccess({ user: res.data[0] }))
         yield Actions.screen1()
         yield AsyncStorage.setItem('username', res.data[0].user_name)
         // yield Actions.listField()
      } else {
         yield put(loginFailed())
         // yield alert('Đăng nhập thất bại! Bạn vui lòng thử lại!')
         console.log('Login failed::::::::')
      }
   } catch (e) {
      console.log('Catche Login', e)
      yield put(loginFailed())
   }
}

export function* watchLogin() {
   yield takeLatest(types.LOGIN, sagaLogin)
}

/**
* 
*/
function* sagaSendData(action) {
   try {
      let res = yield fetch('http://localhost/hcstt/update.php', {
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            scoreA: action.payload.scoreA,
            scoreO: action.payload.scoreO,
            scoreN: action.payload.scoreN,
            scoreC: action.payload.scoreC,
            scoreE: action.payload.scoreE,
            check_send: action.payload.check_send
         })
      }).then((res) => res.json())
      // let resJson = yield 
      console.log('resSendData', res)
      if (res == "SUCCESS") {
         // console.log('SUCCESS send data')
         yield put(sendDataSuccess({ user_name: action.payload.user_name,
            scoreA: action.payload.scoreA,
            scoreO: action.payload.scoreO,
            scoreN: action.payload.scoreN,
            scoreC: action.payload.scoreC,
            scoreE: action.payload.scoreE,
            check_send: action.payload.check_send }))
      } else {
         // console.log('failed')
         yield put(sendDataFailed())
      }
   } catch (e) {
      console.log('Catche SendData', e)
   }
}

export function* watchSendData() {
   yield takeLatest(types.SENDDATA, sagaSendData)
}

