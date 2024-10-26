import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../OnboardingScreen';
import LoginScreen from '../LoginScreen';
import UploadPassportScreen from '../UploadPassportScreen';
import UploadPassportBackScreen from '../UploadPassportBackScreen';
import TravellerPhotoScreen from '../TravellerPhotoScreen';
import SingUpScreen from '../SignUpScreen';
import PancardScreen from '../PancardScreen';
import SignUpCompleteScreen from '../SignUpCompleteScreen';

const stack = createStackNavigator();

const AuthNavigater = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="SingUpScreen" component={SingUpScreen} />
      <stack.Screen
        name="UploadPassportScreen"
        component={UploadPassportScreen}
      />
      <stack.Screen
        name="UploadPassportBackScreen"
        component={UploadPassportBackScreen}
      />
      <stack.Screen
        name="TravellerPhotoScreen"
        component={TravellerPhotoScreen}
      />
      <stack.Screen name="PancardScreen" component={PancardScreen} />
      <stack.Screen name="SignUpCompleteScreen" component={SignUpCompleteScreen} />
    </stack.Navigator>
  );
};

export default AuthNavigater;
