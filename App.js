import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './constant/ThemeContext';
import Main from './src/Authentication/Main';
import {AuthProvider} from './constant/Auth';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
