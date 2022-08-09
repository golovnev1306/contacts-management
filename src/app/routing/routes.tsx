import { RouteObject } from 'react-router-dom';
import { Auth, ContactList, NotFound } from './lazyPages';
import withSuspenseWrapper from '../../common/hoc/withSuspenseWrapper';

const routes: RouteObject[] = [
  {
    path: '/',
    element: withSuspenseWrapper(ContactList),
  },
  {
    path: '/auth',
    element: withSuspenseWrapper(Auth),
  },
  {
    path: '*',
    element: withSuspenseWrapper(NotFound),
  },
];

export default routes;
