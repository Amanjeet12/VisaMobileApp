import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import UploadPassportScreen from './UploadPassportScreen';
import UploadPassportBackScreen from './UploadPassportBackScreen';
import PancardScreen from './PancardScreen';
import TravellerPhotoScreen from './TravellerPhotoScreen';
import DashboardScreen from './DashboardScreen';
import TransactionScreen from './TransactionScreen';
import SearchVisa from './SearchVisa';
import DetailScreen from './DetailScreen';
import NewUploadPassportScreen from './NewUploadPassportScreen';
import CompleteScreen from './CompleteScreen';
import TravellerPhotoSaveScreen from './TravellerPhotoSaveScreen';
import SavePancardScreen from './SavePancardScreen';
import SaveUploadPassportBackScreen from './SaveUplaodPassportScreen';
import BottomSheetScreen from './BottomSheetScreen';
import DetailTransaction from './DetailTransaction';
import SearchPage from './SearchPage';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="UploadPassportScreen"
        component={UploadPassportScreen}
      />
      <Stack.Screen
        name="UploadPassportBackScreen"
        component={UploadPassportBackScreen}
      />
      <Stack.Screen name="PancardScreen" component={PancardScreen} />
      <Stack.Screen
        name="TravellerPhotoScreen"
        component={TravellerPhotoScreen}
      />
      <Stack.Screen name="SearchVisa" component={SearchVisa} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen
        name="NewUploadPassportScreen"
        component={NewUploadPassportScreen}
      />
      <Stack.Screen
        name="TravellerPhotoSaveScreen"
        component={TravellerPhotoSaveScreen}
      />

      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />

      <Stack.Screen name="SavePancardScreen" component={SavePancardScreen} />
      <Stack.Screen
        name="SaveUploadPassportBackScreen"
        component={SaveUploadPassportBackScreen}
      />
      <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Main;
