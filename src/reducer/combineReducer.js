import {combineReducers} from 'redux';
import userDetailReducer from './reducer.js';
import userSignalmentDetails from './signalment.js'

const allReducers = combineReducers({
  userDetail: userDetailReducer,
  signalmentDetails: userSignalmentDetails
});

export default allReducers;
