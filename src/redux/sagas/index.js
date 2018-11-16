import { all, fork } from 'redux-saga/effects';
import * as jobSolutions from './jobSolutions';
 
export default function* rootSaga() {
   yield all([
      ...Object.values(jobSolutions),
  ].map(fork));
}