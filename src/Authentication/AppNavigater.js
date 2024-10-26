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
import HomeScreen from '../HomeScreen';
import VIsaScreen from '../VisaScreen';
import VisaScreen from '../VisaScreen';
import DetailVisaScreen from '../DetailVisaScreen';
import DetailTransaction from '../DetailTransaction';
import DashboardScreen from '../DashboardScreen';
import UploadPassportBackScreen from '../UploadPassportBackScreen';
import PancardScreen from '../PancardScreen';
import TravellerPhotoScreen from '../TravellerPhotoScreen';
import InsurancePlans from '../Insurance/InsurancePlans';
import InsuranceUploadScreen from '../InsuranceUploadScreen';
import SimScreen from '../SimScreen';
import InnerEsimScreen from '../InnerEsimScreen';
import SearchEsimScreen from '../SearchEsimScreen';
import FlightAndHotel from '../Flight&Hotel/FlightAndHotelScreen';
import FlightAndHotelScreen from '../Flight&Hotel/FlightAndHotelScreen';
import DetailScreenFAndH from '../Flight&Hotel/DetailScreenFAndH';
import InsuranceScreen from '../Insurance/InsuranceScreen';
import InsuranceCustomerScreen from '../Insurance/InsuranceCustomerScreen';
import NewUploadPassportBackScreen from '../NewUploadPassportBackScreen';
import NewPancardScreen from '../NewPancardScreen';
import EditNewPancad from '../EditForm/EditNewPancad';
import EditNewUploadPassportScreen from '../EditForm/EditNewUploadPassportScreen';
import EditNewUploadPassportBackScreen from '../EditForm/EditNewUploadPassportBackScreen';
import EditTravellerPhotoScreen from '../EditForm/EditTravellerPhotoScreen';

const stack = createStackNavigator();

const AppNavigater = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} />
      <stack.Screen name="VisaScreen" component={VisaScreen} />
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
      <stack.Screen name="DetailVisaScreen" component={DetailVisaScreen} />
      <stack.Screen name="DetailTransaction" component={DetailTransaction} />
      <stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <stack.Screen
        name="UploadPassportBackScreen"
        component={UploadPassportBackScreen}
      />
      <stack.Screen
        name="TravellerPhotoScreen"
        component={TravellerPhotoScreen}
      />
      <stack.Screen name="PancardScreen" component={PancardScreen} />
      <stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
      <stack.Screen name="InsurancePlans" component={InsurancePlans} />
      <stack.Screen
        name="InsuranceUploadScreen"
        component={InsuranceUploadScreen}
      />
      <stack.Screen name="SimScreen" component={SimScreen} />
      <stack.Screen name="InnerEsimScreen" component={InnerEsimScreen} />
      <stack.Screen name="SearchEsimScreen" component={SearchEsimScreen} />
      <stack.Screen name="FlightAndHotelScreen" component={FlightAndHotelScreen} />
      <stack.Screen name="DetailScreenFAndH" component={DetailScreenFAndH} />
      <stack.Screen name="InsuranceCustomerScreen" component={InsuranceCustomerScreen} />
      <stack.Screen name="NewUploadPassportBackScreen" component={NewUploadPassportBackScreen} />
      <stack.Screen name="NewPancardScreen" component={NewPancardScreen} />
      <stack.Screen name="EditNewUploadPassportScreen" component={EditNewUploadPassportScreen} />
      <stack.Screen name="EditNewUploadPassportBackScreen" component={EditNewUploadPassportBackScreen} />
      <stack.Screen name="EditNewPancad" component={EditNewPancad} />
      <stack.Screen name="EditTravellerPhotoScreen" component={EditTravellerPhotoScreen} />
    </stack.Navigator>
  );
};

export default AppNavigater;
