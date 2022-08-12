import PrivateRouteObject from '../types/PrivateRouteObject';
import { RouteObject } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

const getRoutesWithPrivateWrapper = (privateRoutes: PrivateRouteObject[]): RouteObject[] => {
  return privateRoutes.map(({isPrivate, element, ...route}) => {
    let resultElement;
    if (element) {
      resultElement = element;
      if (isPrivate) {
        resultElement = PrivateRoute(element);
      }
    }

    return Object.assign(route, resultElement ? {element: resultElement} : {});
  })
}

export default getRoutesWithPrivateWrapper;