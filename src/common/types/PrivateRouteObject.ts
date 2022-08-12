import { RouteObject } from 'react-router-dom';

type PrivateRouteObject = RouteObject & {
  isPrivate?: boolean
}

export default PrivateRouteObject;