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
import BackButton from '../component/BackButton';

const SingUpScreen = ({navigation}) => {
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
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <BackButton />
        </View>
        <View style={styles.mainContainer}>
          <Text style={[styles.fontTitle, {...theme.FONTS.h1}]}>Sign Up</Text>
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
        <View style={{marginTop: SIZES.body6}}>
          <ButtonBox
            placeholder={'Sign Up'}
            icon={image.check}
            specific={'UploadPassportScreen'}
          />
        </View>
        <View style={{marginVertical: SIZES.horizontal, alignItems: 'center'}}>
          <Text style={[[styles.fontDescription], {...theme.FONTS.body1}]}>
            Or Sign Up With
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
              {...theme.FONTS.body1, marginRight: 5},
            ]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={[
                styles.fontDescription,
                {...theme.FONTS.body1, color: '#327113'},
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.horizontal,
  },
  mainContainer: {
    marginTop: SIZES.width * 0.09,
  },
  fontTitle: {
    color: '#000',
    fontWeight: '600',
  },
  fontDescription: {
    color: 'grey',
  },
  border: {
    marginTop: SIZES.h3,
  },
  buttonBox: {
    height: SIZES.width * 0.146,
    backgroundColor: '#F2F3F6',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
