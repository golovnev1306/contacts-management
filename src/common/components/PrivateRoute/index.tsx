import useUser from '../../hooks/useUser';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import Loading from '../Loading';

const PrivateRoute = (element: ReactNode) => {
  const { isAuth, userHasBeenRequested } = useUser();

  if (!userHasBeenRequested) {
    return <Loading />;
  }

  return (isAuth) ? element : <Navigate to={'/auth'} />;
}

export default PrivateRoute;