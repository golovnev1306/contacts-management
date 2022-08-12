import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { useCallback } from 'react';
import Auth from '../../../common/types/Auth';
import { login } from '../../../store/auth/authSlice';
import useAppSelector from '../../../common/hooks/useAppSelector';
import useAppLoading from '../../../common/hooks/useAppLoading';

const useAuthState = () => {
  const dispatch = useAppDispatch();

  const { isAuth, isLoading } = useAppSelector(state => state.auth);

  useAppLoading(isLoading);

  const onSubmit = useCallback((authData: Auth) => {
    dispatch(login(authData));
  }, [dispatch])

  return {
    onSubmit,
    isAuth,
  }
}

export default useAuthState;