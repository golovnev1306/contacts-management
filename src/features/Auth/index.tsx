import React, { FC } from 'react';
import useAuthState from './hooks/useAuthState';
import { Navigate,  } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import PageContentLayout from '../../common/components/PageContentLayout';

const Auth: FC = () => {
  const { onSubmit, isAuth } = useAuthState();

  return (
    isAuth ? <Navigate to="/" /> : (
      <PageContentLayout title={'Auth page'}>
        <AuthForm onSubmit={onSubmit} />
      </PageContentLayout>
    )
  );
}

export default  Auth;