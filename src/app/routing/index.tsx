import { FC, memo } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';

const Routes = () => useRoutes(routes);

const Routing: FC = memo(() => (
  <Routes />
));

export default Routing;
