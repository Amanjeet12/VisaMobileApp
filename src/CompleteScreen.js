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
import {SIZES, image} from '../constant';
import ButtonBox from '../component/ButtonBox';

const CompleteScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  console.log(SIZES.width * 0.42);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={image.completeIcon} style={styles.image} />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: SIZES.extralarge,
            fontSize: SIZES.width * 0.03,
          }}>
          <Text style={{...theme.FONTS.h1, color: '#fff'}}>
            Happy Travelling
          </Text>
          <Text
            style={{
              fontSize: SIZES.body4,
              textAlign: 'center',
              color: '#fff',
              marginTop: SIZES.body6,
            }}>
            Your application has been submitted we will now process your Visa
          </Text>
        </View>
        <View style={{width: '100%', marginTop: SIZES.extralarge}}>
          <ButtonBox
            placeholder={'Back to home'}
            backgroundColor={'#fff'}
            textColor={'#000'}
            specific={'BottomSheetScreen'}
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
    width: SIZES.width * 0.73,
    height: SIZES.width * 0.42,
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
