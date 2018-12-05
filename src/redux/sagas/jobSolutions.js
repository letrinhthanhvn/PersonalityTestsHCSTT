import { takeLatest, put, select, call } from 'redux-saga/effects';
import * as types from '../types';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
   loginFailed,
   loginSuccess,
   sendDataFailed,
   sendDataSuccess,
   update10questionSuccess,
   update10questionFailed,
   update20questionFailed,
   update20questionSuccess,
   update30questionFailed,
   update30questionSuccess,
   update40questionFailed,
   update40questionSuccess,
   update50questionSuccess,
   update50questionFailed,
   update60questionFailed,
   update60questionSuccess,
   registerSuccess,
   registerFailed
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

/**
* 
*/
function* sagaUpdate10(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update10.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update10questionSuccess())
      } else {
         yield put(update10questionFailed())
      }
   } catch(e) {
    console.log('Catche Update10', e)
   }
}

export function* watchUpdate10() {
   yield takeLatest(types.UPDATE10QUESTION, sagaUpdate10)
}

function* sagaUpdate20(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update20.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update20questionSuccess())
      } else {
         yield put(update20questionFailed())
      }
   } catch(e) {
    console.log('Catche Update10', e)
   }
}

export function* watchUpdate20() {
   yield takeLatest(types.UPDATE20QUESTION, sagaUpdate20)
}

function* sagaUpdate30(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update30.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update30questionSuccess())
      } else {
         yield put(update30questionFailed())
      }
   } catch(e) {
    console.log('Catche Update10', e)
   }
}

export function* watchUpdate30() {
   yield takeLatest(types.UPDATE30QUESTION, sagaUpdate30)
}

function* sagaUpdate40(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update40.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update40questionSuccess())
      } else {
         yield put(update40questionFailed())
      }
   } catch(e) {
    console.log('Catche Update40', e)
   }
}

export function* watchUpdate40() {
   yield takeLatest(types.UPDATE40QUESTION, sagaUpdate40)
}

function* sagaUpdate50(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update50.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update50questionSuccess())
      } else {
         yield put(update50questionFailed())
      }
   } catch(e) {
    console.log('Catche Update50', e)
   }
}

export function* watchUpdate50() {
   yield takeLatest(types.UPDATE50QUESTION, sagaUpdate50)
}


function* sagaUpdate60(action) {
   try {
      let res = yield fetch("http://localhost/hcstt/update60.php",{
         method: 'POST',
         body: JSON.stringify({
            user_name: action.payload.user_name,
            question1: action.payload.question1,
            question2: action.payload.question2,
            question3: action.payload.question3,
            question4: action.payload.question4,
            question5: action.payload.question5,
            question6: action.payload.question6,
            question7: action.payload.question7,
            question8: action.payload.question8,
            question9: action.payload.question9,
            question10: action.payload.question10
         })
      }).then((res) => res.json())
      if (res == "SUCCESS") {
         yield put(update60questionSuccess())
      } else {
         yield put(update60questionFailed())
      }
   } catch(e) {
    console.log('Catche Update60', e)
   }
}

export function* watchUpdate60() {
   yield takeLatest(types.UPDATE60QUESTION, sagaUpdate60)
}

function* sagaRegister(action) {
   try {
      let res = yield fetch('http://localhost/hcstt/register.php', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            user_name: action.payload.username,
            password: action.payload.password,
            gender: action.payload.gender
         })
      }).then((res) => res.json())
      if (res.status == "SUCCESS") {
         yield put(registerSuccess(action.payload))
         // yield Actions.listField()
      } else {
         yield put(registerFailed())
      }
      console.log('resRegister', res)
   } catch (e) {
      console.log('Catche Register', e)
   }
}

export function* watchRegister() {
   yield takeLatest(types.REGISTER, sagaRegister)
}
