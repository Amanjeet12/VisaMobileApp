import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {image} from '../constant';
import ButtonBox from '../component/ButtonBox';

const CompleteScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={image.completeIcon} style={styles.image} />
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{...theme.FONTS.h1, color: '#fff'}}>
            Happy Travelling
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: '#fff',
              marginTop: 10,
            }}>
            Your application has been submitted we will now process your Visa
          </Text>
        </View>
        <View style={{width: '100%', marginTop: 50}}>
          <ButtonBox
            placeholder={'Back to home'}
            backgroundColor={'#fff'}
            textColor={'#000'}
            specific={'DashboardScreen'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327113',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 170,
    resizeMode: 'contain',
  },
  imageContainer: {
    // marginTop: 100,
  },
  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
