import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { useCallback } from 'react';
import { logout } from '../../../store/auth/authSlice';
import useUser from '../../../common/hooks/useUser';

const useHeaderState = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useUser();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return {
    onLogout,
    isAuth,
    user,
  }
}

export default useHeaderState;