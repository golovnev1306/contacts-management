import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../store/store';

const useAppDispatch = () => useDispatch<RootDispatch>();
export default useAppDispatch;
