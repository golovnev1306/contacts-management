import Title from 'antd/lib/typography/Title';
import FlexBox from '../FlexBox';
import React, { FC, PropsWithChildren } from 'react';

const PageContentLayout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <FlexBox
      direction={'column'}
      gap={'20px'}
    >
      <Title>{title}</Title>
      {children}
    </FlexBox>
  )
}

export default PageContentLayout;