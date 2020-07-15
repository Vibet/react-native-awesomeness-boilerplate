import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers, devToolsEnhancer());
