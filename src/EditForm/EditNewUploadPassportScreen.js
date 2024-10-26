import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackArrow from '../../component/BackArrow';
import ImageBox from '../../component/ImageBox';
import {RadioButton} from 'react-native-paper';
import DateBox from '../../component/DateBox';
import {SIZES, image} from '../../constant';
import CountryPickerDropdown from '../../component/CountryPickerDropdown';

const EditNewUploadPassportScreen = ({navigation, route}) => {
  const {passportData} = route.params;
  const [inputValue, setInputValue] = useState({
    passportNo: passportData.passportNo || '',
    firstName: passportData.firstName || '',
    lastName: passportData.lastName || '',
    birthPlace: passportData.birthPlace || '',
    dob: passportData.dob || '',
    countryName: passportData.countryName || '',
    dateOfIssue: passportData.dateOfIssue || '',
    dateOfExpiry: passportData.dateOfExpiry || '',
    gender: passportData.gender || '',
    email: passportData.email || '',
    phone: passportData.phone || '',
    passport_front: passportData.passport_front || '',
    passport_back: passportData.passport_back || '',
    fatherName: passportData.fatherName || '',
    motherName: passportData.motherName || '',
    pancardNumber: passportData.pancardNumber || '',
    pancardPhoto: passportData.pancardPhoto || '',
    profilePhotoUrl: passportData.profilePhotoUrl || '',
    userId: passportData.userId || '',
  });

  useEffect(() => {}, []);

  // Callback function to handle image upload and set passport_front URL
  const handleImageUpload = url => {
    setInputValue(prevState => ({
      ...prevState,
      passport_front: url, // Set the uploaded URL for passport_front
    }));
  };

  const handleInputChange = (field, value) => {
    setInputValue(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const showToast = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };

  const handleNext = () => {
    const {
      passportNo,
      firstName,
      lastName,
      birthPlace,
      dob,
      countryName,
      dateOfIssue,
      dateOfExpiry,
      gender,
      email,
      phone,
      passport_front, // Add passport_front validation
    } = inputValue;

    // Check if any field is empty and show a toast message
    if (!passportNo) return showToast('Passport number is required.');
    if (!firstName) return showToast('First name is required.');
    if (!lastName) return showToast('Last name is required.');
    if (!birthPlace) return showToast('Birth place is required.');
    if (!dob) return showToast('Date of birth is required.');
    if (!countryName) return showToast('Country name is required.');
    if (!dateOfIssue) return showToast('Date of issue is required.');
    if (!dateOfExpiry) return showToast('Date of expiry is required.');
    if (!passport_front) return showToast('Passport front image is required.');
    if (!email) return showToast('Email id is required.');
    if (!phone) return showToast('phone no is required.');

    navigation.navigate('EditNewUploadPassportBackScreen', {
      passportData: inputValue,
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Your Passport Front'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload your passport front pic and\nwe’ll fetch all necessary data.'
            }
            initialImageUrl={inputValue.passport_front} // Pass initial image URL
            onImageUpload={handleImageUpload} // Callback for uploaded image
          />
        </View>

        <View style={{marginTop: SIZES.padding}}>
          <Text
            style={{fontSize: 20, fontFamily: 'Inter-Medium', color: '#000'}}>
            Passport Front Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.width * 0.015,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => handleInputChange('gender', 'male')}
            activeOpacity={0.7}>
            <RadioButton
              value="male"
              status={inputValue.gender === 'male' ? 'checked' : 'unchecked'}
              color="#327113"
            />
            <Text style={{fontSize: 16, color: '#000'}}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SIZES.body6,
            }}
            onPress={() => handleInputChange('gender', 'female')}
            activeOpacity={0.7}>
            <RadioButton
              value="female"
              status={inputValue.gender === 'female' ? 'checked' : 'unchecked'}
              color="#327113"
            />
            <Text style={{fontSize: 16, color: '#000'}}>Female</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 25}}>
          <Text style={styles.header}>Passport No</Text>
          <TextInput
            placeholder="Enter passport no"
            value={inputValue.passportNo}
            onChangeText={text => handleInputChange('passportNo', text)}
            style={styles.input}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>First Name</Text>
          <TextInput
            placeholder="Enter first name"
            value={inputValue.firstName}
            onChangeText={text => handleInputChange('firstName', text)}
            style={styles.input}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Last Name</Text>
          <TextInput
            placeholder="Enter last name"
            value={inputValue.lastName}
            onChangeText={text => handleInputChange('lastName', text)}
            style={styles.input}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Phone Number</Text>
          <TextInput
            placeholder="Enter Phone number"
            value={inputValue.phone}
            onChangeText={text => handleInputChange('phone', text)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={10}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Email</Text>
          <TextInput
            placeholder="Enter Email Id"
            value={inputValue.email}
            onChangeText={text => handleInputChange('email', text)}
            style={styles.input}
            keyboardType="email-address"
            maxLength={10}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Country Name</Text>
          <CountryPickerDropdown
            onSelectCountry={country =>
              handleInputChange('countryName', country?.label || '')
            }
          />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={styles.header}>DOB</Text>
          <DateBox
            placeholder="Select a date"
            defaultDate={
              passportData.dob
                ? new Date(passportData.dob)
                : new Date('1990-01-01')
            } // Convert ISO string to Date or set a default
            onDateSelect={date => handleInputChange('dob', date.toISOString())} // Ensure date is in ISO format
          />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Birth Place</Text>
          <TextInput
            placeholder="Enter Birth Place"
            value={inputValue.birthPlace}
            onChangeText={text => handleInputChange('birthPlace', text)}
            style={styles.input}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Date Of Issue</Text>
          <DateBox
            placeholder="Date of Issue"
            defaultDate={
              passportData.dateOfIssue
                ? new Date(passportData.dateOfIssue)
                : new Date()
            } // Convert ISO string to Date
            onDateSelect={date =>
              handleInputChange('dateOfIssue', date.toISOString())
            } // Ensure date is in ISO format
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.header}>Date Of Expiry</Text>
          <DateBox
            placeholder="Date of Expiry"
            defaultDate={
              passportData.dateOfExpiry
                ? new Date(passportData.dateOfExpiry)
                : new Date('2032-01-01')
            } // Convert ISO string to Date or set a default
            onDateSelect={date =>
              handleInputChange('dateOfExpiry', date.toISOString())
            } // Ensure date is in ISO format
          />
        </View>
        <View
          style={{
            marginTop: 30,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.buttonBox2} onPress={handleNext}>
            <Text style={{fontSize: 18, color: '#fff'}}>Next</Text>
            <Image source={image.arrow} style={styles.Icon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditNewUploadPassportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: SIZES.extralarge,
  },
  header: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    paddingBottom: 5,
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
  input: {
    height: 55,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: '#686d80',
  },
});
