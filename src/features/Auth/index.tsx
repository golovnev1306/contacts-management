import React, { FC } from 'react';
import useAuthState from './hooks/useAuthState';
import { Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import PageContentLayout from '../../common/components/PageContentLayout';
import AuthImages from './components/AuthImages';

const Auth: FC = () => {
  const { onSubmit, isAuth } = useAuthState();

  return (
    isAuth ? <Navigate to="/" /> : (
      <PageContentLayout title={'Auth page'}>
		<div style={{overflowY: 'auto'}}>
		  <AuthForm onSubmit={onSubmit} />
		  <AuthImages />
		</div>
      </PageContentLayout>
    )
  );
}

export default  Auth;