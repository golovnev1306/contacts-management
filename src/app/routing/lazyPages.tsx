import { lazy } from 'react';

export const ContactList = lazy(() => import('../../features/ContactList'));
export const Auth = lazy(() => import('../../features/Auth'));
export const NotFound = lazy(() => import('../../features/NotFound'));


export default {};
