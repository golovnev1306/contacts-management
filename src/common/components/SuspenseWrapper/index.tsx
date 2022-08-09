import React, { PropsWithChildren, Suspense } from 'react';
import { Spin } from 'antd';

const SuspenseWrapper = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Spin />}>
    {children}
  </Suspense>
);

export default SuspenseWrapper;
