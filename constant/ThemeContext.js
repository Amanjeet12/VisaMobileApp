import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {theme, COLORS} from '.';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const isDarkTheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(
    isDarkTheme === 'dark' ? COLORS.dark : COLORS.light,
  );

  useEffect(() => {
    setCurrentTheme(isDarkTheme === 'dark' ? COLORS.dark : COLORS.light);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme =>
      prevTheme === COLORS.light ? COLORS.dark : COLORS.light,
    );
  };

  const theme = currentTheme;

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  const context = useContext(ThemeContext);

  // console.log('context:', context);
  if (!context) {
    throw new Error('useDarkTheme must be used within a ThemeProvider');
  }
  return context;
};
