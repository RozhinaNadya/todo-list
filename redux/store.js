import { combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import taskReducer from './reducers';
import { legacy_createStore as createStore } from 'redux'

const rootReducer = combineReducers({ taskReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));