/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import TextInputBox from '../component/TextInputBox';
import ButtonBox from '../component/ButtonBox';
import {SIZES, image} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = value => {
    setInputValue(value);
  };

  const ButtonnBox = ({image}) => {
    return (
      <TouchableOpacity style={styles.buttonBox}>
        <Image
          source={image}
          style={{
            width: SIZES.largeTitle,
            height: SIZES.largeTitle,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={[styles.fontTitle, {...theme.FONTS.h1}]}>Sign In</Text>
          <Text style={[styles.fontDescription, {...theme.FONTS.body1}]}>
            Start Your Journey with affordable price
          </Text>
        </View>
        <View style={styles.border}>
          <Text
            style={[
              styles.fontDescription,
              {...theme.FONTS.body1, color: '#808080'},
            ]}>
            EMAIL
          </Text>
          <TextInputBox
            onChangeText={handleInputChange}
            placeholder={'Enter Your Email'}
          />
        </View>
        <View>
          <Text
            style={[
              styles.fontDescription,
              {...theme.FONTS.body1, color: '#808080'},
            ]}>
            PASSWORD
          </Text>
          <TextInputBox
            onChangeText={handleInputChange}
            placeholder={'Enter Your Password'}
          />
        </View>
        <View style={{marginTop: SIZES.body6}}>
          <ButtonBox
            placeholder={'Sign In'}
            icon={image.check}
            specific={'BottomSheetScreen'}
          />
        </View>
        <View style={{marginVertical: SIZES.horizontal, alignItems: 'center'}}>
          <Text style={[[styles.fontDescription], {...theme.FONTS.body1}]}>
            Or Sign In With
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ButtonnBox image={image.google} />
          <ButtonnBox image={image.apple} />
        </View>
        <View
          style={{
            marginTop: SIZES.body6,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              [styles.fontDescription],
              {...theme.FONTS.body1, marginRight: SIZES.width * 0.013},
            ]}>
            Don’t Have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text
              style={[
                styles.fontDescription,
                {...theme.FONTS.body1, color: '#327113'},
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.horizontal,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginTop: SIZES.width * 0.25,
  },
  fontTitle: {
    color: '#000',
    fontWeight: '600',
  },
  fontDescription: {
    color: '#808080',
  },
  border: {
    marginTop: SIZES.h3,
  },
  buttonBox: {
    height: SIZES.width * 0.146,
    backgroundColor: '#ECEFF6',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
