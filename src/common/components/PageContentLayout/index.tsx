import Title from 'antd/lib/typography/Title';
import FlexBox from '../FlexBox';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Row, Col } from 'antd';

const PageContentLayout: FC<PropsWithChildren<{ title: string, actions?: ReactNode }>> = ({
  title,
  actions,
  children,
}) => {
  return (
    <FlexBox
      direction={'column'}
      gap={'20px'}
      style={{
        maxHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <Row
        justify={'space-between'}
        style={{
          position: 'sticky',
          top: 0,
        }}
      >
        <Col xl={18} md={12} xs={24}>
          <Title level={2}>{title}</Title>
        </Col>
        <Col xl={6} md={12} xs={24}>
          {actions}
        </Col>
      </Row>

      {children}
    </FlexBox>
  )
}

export default PageContentLayout;