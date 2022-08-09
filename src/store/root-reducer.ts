import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app/app.slice';

const rootReducer = combineReducers({ app });

export default rootReducer;
