/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
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
import {useDispatch} from 'react-redux';
import {signUp} from './redux/SignUpSlice';

const SingUpScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = value => {
    setInputValue(value);
  };

  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };

  const validateEmail = email => {
    // Simple regex pattern to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNavigation = async () => {
    if (!inputValue) {
      setToastMsg('Enter your Email');
      return;
    }

    // Validate email format
    if (!validateEmail(inputValue)) {
      setToastMsg('Please enter a valid Email');
      return;
    }

    setDisable(true);
    const params = {
      user_email_id: inputValue,
    };

    try {
      const resultAction = await dispatch(signUp(params));

      const payload = resultAction?.payload;
      if (payload?.success === 0) {
        setToastMsg(payload?.msg);
      } else if (payload?.success === 1) {
        if (payload?.data === false) {
          navigation.navigate('UploadPassportScreen', {data: inputValue});
        } else {
          // Show a toast message if something else happened
          setToastMsg(payload?.msg);
        }
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setToastMsg('Something went wrong, please try again later.');
    } finally {
      setDisable(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <BackButton />
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.fontTitle,
              {fontSize: 24, fontFamily: 'Inter-Bold'},
            ]}>
            Sign Up
          </Text>
          <Text style={[styles.fontDescription, {fontSize: 18, marginTop: 5}]}>
            Start Your Journey with affordable price
          </Text>
        </View>
        <View style={styles.border}>
          <Text
            style={[styles.fontDescription, {fontSize: 16, color: '#808080'}]}>
            EMAIL
          </Text>
          <TextInputBox
            onChangeText={handleInputChange}
            placeholder={'Enter Your Email'}
            keyboardType="email-address" // This ensures the keyboard opens with an "@" symbol
          />
        </View>
        <View
          style={{
            marginTop: 30,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.buttonBox2}
            onPress={handleNavigation}
            disabled={disable}>
            <Text style={{fontSize: 18, color: '#fff'}}>Next</Text>
            <Image source={image.arrow} style={styles.Icon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: SIZES.body6,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={[[styles.fontDescription], {fontSize: 16, marginRight: 5}]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={[
                styles.fontDescription,
                {fontSize: 16, color: '#327113'},
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
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginTop: 65,
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
    height: 55,
    backgroundColor: '#F2F3F6',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonBox2: {
    height: SIZES.width * 0.135,
    backgroundColor: '#327113',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  Icon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: 5,
  },
});
