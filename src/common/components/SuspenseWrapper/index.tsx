import React, { PropsWithChildren, Suspense } from 'react';
import Loading from '../Loading';

const SuspenseWrapper = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

export default SuspenseWrapper;
