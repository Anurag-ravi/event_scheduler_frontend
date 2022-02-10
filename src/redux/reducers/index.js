import { combineReducers } from 'redux';
import eventDetailReducer from './eventDetailReducer';
import isLoggedReducer from './isloggedreducer';
import profileReducer from './profileReducer';

const allReducers = combineReducers({
    user:isLoggedReducer,
    profile : profileReducer,
    event : eventDetailReducer
})

export default allReducers;