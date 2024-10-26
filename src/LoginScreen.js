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
import TextInputBox from '../component/TextInputBox';
import ButtonBox from '../component/ButtonBox';
import {SIZES, image} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {loginVerify} from './redux/AuthSlice';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(''); // Separate state for email
  const [password, setPassword] = useState(''); // Separate state for password
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };

  const handleNavigation = async () => {
    setDisable(true);
    const params = {
      user_email_id: email, // Use email state
      user_password: password, // Use password state
    };
    const resultAction = await dispatch(loginVerify(params));
    console.log('resultAction', resultAction.payload.success);
    if (resultAction?.payload?.success === 0) {
      setToastMsg(resultAction.payload.msg);
    }
    setDisable(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.fontTitle,
              {fontSize: 24, fontFamily: 'Inter-Bold'},
            ]}>
            Sign In
          </Text>
          <Text
            style={[
              styles.fontDescription,
              {fontFamily: 'Inter-Medium', fontSize: 15, marginTop: 5},
            ]}>
            Start Your Journey with affordable price
          </Text>
        </View>
        <View style={styles.border}>
          <Text
            style={[
              styles.fontDescription,
              {fontFamily: 'Inter-Medium', fontSize: 15, color: '#808080'},
            ]}>
            EMAIL
          </Text>
          <TextInputBox
            onChangeText={setEmail} // Handle email input
            placeholder={'Enter Your Email'}
            value={email}
          />
        </View>
        <View>
          <Text
            style={[
              styles.fontDescription,
              {fontFamily: 'Inter-Medium', fontSize: 15, color: '#808080'},
            ]}>
            PASSWORD
          </Text>
          <TextInputBox
            onChangeText={setPassword} // Handle password input
            placeholder={'Enter Your Password'}
            secureTextEntry
            value={password}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.buttonBox,
            {
              marginTop: 8,
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#327113',
            },
          ]}
          onPress={() => handleNavigation()} disabled={disable}>
          <Text style={styles.buttonText}>SIGN IN</Text>
          <Image source={image.check} style={styles.image} />
        </TouchableOpacity>
        {/* <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text style={[[styles.fontDescription], {fontSize: 16}]}>
            Or Sign In With
          </Text>
        </View> */}
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ButtonnBox image={image.google} />
          <ButtonnBox image={image.apple} />
        </View> */}
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 15,
          }}>
          <Text
            style={[
              [styles.fontDescription],
              {
                fontFamily: 'Inter-Medium',
                fontSize: 15,
                marginRight: 8,
              },
            ]}>
            Don’t Have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SingUpScreen')}>
            <Text
              style={[
                styles.fontDescription,
                {fontFamily: 'Inter-Medium', fontSize: 15, color: '#327113'},
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
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginTop: 105,
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
    height: 55,
    backgroundColor: '#ECEFF6',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  button: {
    padding: SIZES.body6,
    borderRadius: 8,
    alignItems: 'center',
    height: SIZES.width * 0.134,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 8,
  },
});
