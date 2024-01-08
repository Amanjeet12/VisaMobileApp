import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomSheetScreen from '../BottomSheetScreen';
import SearchVisa from '../SearchVisa';
import DetailScreen from '../DetailScreen';
import NewUploadPassportScreen from '../NewUploadPassportScreen';
import SavePancardScreen from '../SavePancardScreen';
import SaveUploadPassportScreen from '../SaveUplaodPassportScreen';
import TravellerPhotoSaveScreen from '../TravellerPhotoSaveScreen';
import CompleteScreen from '../CompleteScreen';

const stack = createStackNavigator();

const AppNavigater = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} />
      <stack.Screen name="SearchVisa" component={SearchVisa} />
      <stack.Screen name="DetailScreen" component={DetailScreen} />
      <stack.Screen
        name="NewUploadPassportScreen"
        component={NewUploadPassportScreen}
      />
      <stack.Screen name="SavePancardScreen" component={SavePancardScreen} />
      <stack.Screen
        name="SaveUploadPassportScreen"
        component={SaveUploadPassportScreen}
      />
      <stack.Screen
        name="TravellerPhotoSaveScreen"
        component={TravellerPhotoSaveScreen}
      />
      <stack.Screen name="CompleteScreen" component={CompleteScreen} />
    </stack.Navigator>
  );
};

export default AppNavigater;
