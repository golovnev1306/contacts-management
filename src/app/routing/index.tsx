import { FC, memo } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';
import getRoutesWithPrivateWrapper from '../../common/helpers/getRoutesWithPrivateWrapper';

const Routes = () => useRoutes(getRoutesWithPrivateWrapper(routes));

const Routing: FC = memo(() => (
  <Routes />
));

export default Routing;
