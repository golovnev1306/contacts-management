import { FC } from 'react';
import useAppLoading from '../../hooks/useAppLoading';

const Loading: FC = () => {
  useAppLoading(true);
  return null;
}

export default Loading;