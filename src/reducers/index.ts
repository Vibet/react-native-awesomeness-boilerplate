import { combineReducers } from 'redux';

import { themeReducer } from './themeReducer';
import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';

export const Reducers = combineReducers({
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
});
