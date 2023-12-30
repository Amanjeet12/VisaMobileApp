/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from './DashboardScreen';
import TransactionScreen from './TransactionScreen';
import RewardScreen from './RewardScreen';
import SettingScreen from './SettingScreen';
import {
  HomeIconComponent,
  HomeIconFocusedComponent,
  RewardFocusedIconComponent,
  RewardIconComponent,
  SettingFocusedIconComponent,
  SettingIconComponent,
  TransactionFocusedIconComponent,
  TransactionIconComponent,
} from './SvgComponent.js/DashboardComponent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomSheetScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}>
      <Tab.Navigator
        initialRouteName="DashboardScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 75,
            borderRadius: 0,
            borderTopWidth: 0.75,
            borderTopColor: '#ABABAB',
            elevation: Platform.OS === 'ios' ? 3 : 20,
            paddingHorizontal: 10,
            shadowOffset: {
              width: 0,
              height: Platform.OS === 'ios' ? -10 : -20,
            },
            shadowOpacity: Platform.OS === 'ios' ? 0.03 : 0.3,
            shadowRadius: 4,
            boxShadow: '0px 1px 25px 6px rgba(0, 0, 0, 0.06)',
          },
        }}>
        <Tab.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size, focused}) =>
              focused ? <HomeIconFocusedComponent /> : <HomeIconComponent />,
          }}
        />
        <Tab.Screen
          name="TransactionScreen"
          component={TransactionScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <TransactionFocusedIconComponent />
              ) : (
                <TransactionIconComponent />
              ),
          }}
        />
        <Tab.Screen
          name="RewardScreen"
          component={RewardScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <RewardFocusedIconComponent />
              ) : (
                <RewardIconComponent />
              ),
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <SettingFocusedIconComponent />
              ) : (
                <SettingIconComponent />
              ),
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomSheetScreen;
