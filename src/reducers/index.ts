import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    userState: userReducer,
});
