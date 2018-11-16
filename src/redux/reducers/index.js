import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'; 

import JobSolutions from './jobSolutions';

const persistConfig = {
   key: 'root',
   storage: storage,
   whitelist: ['result', 'username'] // only navigation will be persisted
 };

export default combineReducers({
   jobSolutions: persistReducer( persistConfig,JobSolutions)
});