import React from 'react';
import {useAuth} from '../../constant/Auth';
import AuthNavigator from './AuthNavigater';
import AppNavigator from './AppNavigater';
import {View, Text, ActivityIndicator} from 'react-native'; // Import loading indicator
import {useSelector} from 'react-redux';

const Main = () => {
  const {isLoggedIn, loading} = useAuth();
  const {data, isloading, isError, isSuccess} = useSelector(
    state => state.loginVerify,
  );

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Show navigators based on login state
  return <>{isSuccess ? <AppNavigator /> : <AuthNavigator />}</>;
};

export default Main;
