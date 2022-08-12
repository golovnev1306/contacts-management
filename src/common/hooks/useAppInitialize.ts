import { useEffect } from 'react';
import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';
import { getCurrentUser } from '../../store/auth/authSlice';

const useAppInitialize = () => {
  const { isAppLoading } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return {
    isAppLoading,
  }
}

export default useAppInitialize;