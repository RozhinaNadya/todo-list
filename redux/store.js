// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import taskReducer from './reducers';

// const rootReducer = combineReducers({ taskReducer });

// export const Store = createStore(rootReducer, applyMiddleware(thunk));
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you have a combined reducer

const Store = configureStore({ reducer: rootReducer });

export { Store };