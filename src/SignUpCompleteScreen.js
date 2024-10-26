/* eslint-disable react-hooks/exhaustive-deps */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackArrow from '../component/BackArrow';
import ImageBox from '../component/ImageBox';
import LottieView from 'lottie-react-native';
import {SIZES, image} from '../constant';
import {useDispatch} from 'react-redux';
import {completeSignUp} from './redux/SignUpSlice';

const SignUpCompleteScreen = ({navigation, route}) => {
  const {passportData} = route.params; // Get passportData from route params
  const [isModalVisible, setModalVisible] = useState(false);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(''); // State to store user profile photo URL
  const dispatch = useDispatch();
  console.log(passportData);

  const toggleModal = () => {
    if (!profilePhotoUrl) {
      showToast("User photo is required.");
      return;
    }
    setModalVisible(!isModalVisible);
  };

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const handleImageUpload = url => {
    setProfilePhotoUrl(url); // Store the uploaded image URL
  };

  const navigateToNextPage = async () => {
    // Structure params according to requirements
    const params = {
      user_name: passportData.firstName, // Assuming 'user_name' maps to 'firstName'
      user_email_id: passportData.email,
      user_phone_number: passportData.phone,
      user_profile_photo: profilePhotoUrl, // Add user photo URL
      user_saved_applications: [
        {
          first_name: passportData.firstName,
          last_name: passportData.lastName,
          passport: passportData.passportNo,
          birth_place: passportData.birthPlace,
          country_name: passportData.countryName,
          date_of_expiry: passportData.dateOfExpiry,
          date_of_issue: passportData.dateOfIssue,
          dob: passportData.dob,
          father_name: passportData.fatherName,
          mother_name: passportData.motherName,
          gender: passportData.gender,
        },
      ],
    };

    // Dispatch the action with structured params
    const resultAction = await dispatch(completeSignUp(params));

    if (resultAction?.payload?.success) {
      setModalVisible(!isModalVisible);
      setTimeout(() => navigation.navigate('LoginScreen'), 3000);
    } else {
      console.error('Sign-up failed', resultAction?.payload?.msg);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(navigateToNextPage, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalVisible]);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Traveller Photo'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload a profile photo\nand we’ll complete your registration.'
            }
            onImageUpload={handleImageUpload} // Handle the profile photo upload
          />
        </View>
        <TouchableOpacity
          onPress={() => toggleModal()}
          style={[styles.button, {marginTop: SIZES.width * 0.05}]}>
          <Text style={styles.buttonText}>Complete Sign-Up</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <LottieView
                  source={image.complete}
                  autoPlay
                  loop
                  style={{width: SIZES.width * 0.3, height: SIZES.width * 0.5}}
                />
              </View>
              <Text
                style={{
                  fontSize: 24,
                  color: '#27214D',
                  marginTop: 20,
                }}>
                Congratulations !!!
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Your account has been successfully created
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: SIZES.extralarge,
  },
  button: {
    backgroundColor: 'green',
    padding: SIZES.body6,
    borderRadius: 8,
    alignItems: 'center',
    height: SIZES.width * 0.135,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: SIZES.width * 0.05,
  },
  modalView: {
    width: '100%',
    height: SIZES.width * 0.974,
    backgroundColor: '#fff',
    borderRadius: SIZES.width * 0.05,
    padding: SIZES.width * 0.075,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
