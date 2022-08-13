import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app/appSlice';
import { auth } from './auth/authSlice';
import { contact } from './contact/contactSlice';

const rootReducer = combineReducers({ app, auth, contact });

export default rootReducer;
