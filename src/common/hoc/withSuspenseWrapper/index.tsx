import { ComponentType } from 'react';
import SuspenseWrapper from '../../components/SuspenseWrapper';

const withSuspenseWrapper = (Component: ComponentType) => {
  return (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  )
}

export default withSuspenseWrapper;