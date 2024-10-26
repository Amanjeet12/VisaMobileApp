import {
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
import React, {useState} from 'react';
import BackArrow from '../../component/BackArrow';
import ImageBox from '../../component/ImageBox';
import {SIZES} from '../../constant';

const EditNewPancad = ({route, navigation}) => {
  const {passportData} = route.params; // Get passportData from route params
  console.log("pancard", passportData)
  const [pancardNumber, setPancardNumber] = useState(
    passportData.pancardNumber || '',
  );
  const [pancardPhotoUrl, setPancardPhotoUrl] = useState(
    passportData.pancardPhoto || '',
  ); // State for Pancard photo URL

  // Optional validation toast message
  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  // Function to handle Pancard image upload
  const handleImageUpload = url => {
    setPancardPhotoUrl(url); // Save the uploaded image URL
  };

  const handleNext = () => {
    if (!pancardNumber) {
      return showToast('Pancard number is required.');
    }
    if (!pancardPhotoUrl) {
      return showToast('Pancard photo is required.');
    }

    // Merge pancardNumber and pancardPhotoUrl into passportData
    const updatedPassportData = {
      ...passportData,
      pancardNumber,
      pancardPhoto: pancardPhotoUrl, // Add the Pancard photo URL
    };

    // Navigate to the next screen with the updated passportData
    navigation.navigate('EditTravellerPhotoScreen', {
      passportData: updatedPassportData,
    });
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Traveller Pancard'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload Pancard photo\nand we’ll fetch all necessary data.'
            }
            initialImageUrl={pancardPhotoUrl} // Pass initial image URL
            onImageUpload={handleImageUpload} // Handle the Pancard image upload
          />
        </View>
        <View style={{marginTop: SIZES.width * 0.05}}>
          <Text
            style={{fontSize: 20, fontFamily: 'Inter-Medium', color: '#000'}}>
            Pancard Details
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.header}>Pancard No</Text>
          <TextInput
            placeholder="Enter Pancard Number"
            value={pancardNumber}
            onChangeText={setPancardNumber} // Set the PAN card number in state
            style={{
              height: 55,
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,
              borderColor: '#686d80',
            }}
            placeholderTextColor={'grey'}
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditNewPancad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
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
});
