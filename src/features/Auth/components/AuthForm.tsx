import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import styles from '../Auth.module.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Auth from '../../../common/types/Auth';

const AuthForm: FC<{ onSubmit: (authData: Auth) => void }> = ({ onSubmit }) => {
  return (
    <Form
      onFinish={onSubmit}
      className={styles.authForm}
    >
      <Form.Item
        name="email"
        rules={[{
          required: true,
          message: 'Please input your email',
        }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType={'submit'}
      >
        Log in
      </Button>
    </Form>
  )
}

export default AuthForm;