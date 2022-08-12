import useAppSelector from './useAppSelector';

const useUser = () => {
  const { isAuth, user, userHasBeenRequested } = useAppSelector(state => state.auth);
  return {
    isAuth,
    user,
    userHasBeenRequested,
  }
}

export default useUser;