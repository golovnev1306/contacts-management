import useAppDispatch from './useAppDispatch';
import { useEffect } from 'react';
import { setIsAppLoading } from '../../store/app/appSlice';
import useAppSelector from './useAppSelector';

const useAppLoading = (loading: boolean) => {
  const dispatch = useAppDispatch();
  const { isAppLoading } = useAppSelector(state => state.app);

  useEffect(() => {
    dispatch(setIsAppLoading(loading));
    return () => {
      dispatch(setIsAppLoading(false));
    }
  }, [loading]);

  return {
    isAppLoading,
  }
}

export default useAppLoading;