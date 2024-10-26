import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Retrieve the state from storage when the component mounts
    const retrieveLoginState = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value !== null) {
          setIsLoggedIn(JSON.parse(value)); // parse string to boolean
        }
      } catch (error) {
        console.error(
          "Failed to retrieve 'isLoggedIn' from AsyncStorage:",
          error,
        );
      } finally {
        setLoading(false); // Update loading state when finished
      }
    };

    retrieveLoginState();
  }, []);

  const login = async () => {
    console.log('first');
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to set 'isLoggedIn' in :", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Failed to set 'isLoggedIn' in AsyncStorage:", error);
    }
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};