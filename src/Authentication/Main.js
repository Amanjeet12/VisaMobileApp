import React from 'react';
import {useAuth} from '../../constant/Auth';
import AuthNavigator from './AuthNavigater';
import AppNavigator from './AppNavigater';

const Main = () => {
  const {isLoggedIn} = useAuth();
  return <>{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}</>;
};

export default Main;
