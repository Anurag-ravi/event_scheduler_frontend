import { combineReducers } from 'redux';
import isLoggedReducer from './isloggedreducer';
import profileReducer from './profileReducer';

const allReducers = combineReducers({
    user:isLoggedReducer,
    profile : profileReducer
})

export default allReducers;