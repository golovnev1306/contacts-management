import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app/appSlice';
import { auth } from './auth/authSlice';

const rootReducer = combineReducers({ app, auth });

export default rootReducer;
