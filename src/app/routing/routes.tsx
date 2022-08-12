import { Auth, ContactList, NotFound } from './lazyPages';
import withSuspenseWrapper from '../../common/hoc/withSuspenseWrapper';
import PrivateRouteObject from '../../common/types/PrivateRouteObject';

const routes: PrivateRouteObject[] = [
  {
    path: '/',
    element: withSuspenseWrapper(ContactList),
    isPrivate: true,
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
