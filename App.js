import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import {ThemeProvider} from './constant/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
