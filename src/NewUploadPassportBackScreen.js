import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ToastAndroid,
  } from 'react-native';
  import React, {useState} from 'react';
  import BackArrow from '../component/BackArrow';
  import ImageBox from '../component/ImageBox';
  import {SIZES} from '../constant';
  
  const NewUploadPassportBackScreen = ({route, navigation}) => {
    const {passportData} = route.params; // Get passportData from route params
  
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [passportBackUrl, setPassportBackUrl] = useState(''); // State to store the passport back URL
  
    // Show toast message for missing fields
    const showToast = message => {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    };
  
    const handleImageUpload = url => {
      setPassportBackUrl(url); // Set the uploaded URL for passport_back
    };
  
    // Handle the "Next" button click
    const handleNext = () => {
      if (!fatherName) return showToast("Father's name is required.");
      if (!motherName) return showToast("Mother's name is required.");
      if (!passportBackUrl) return showToast('Passport back image is required.');
  
      // Update passportData with the father, mother names, and passport back image URL
      const updatedPassportData = {
        ...passportData,
        fatherName,
        motherName,
        passport_back: passportBackUrl, // Include the passport back image URL
      };
  
      console.log(updatedPassportData);
      // Navigate to the next screen (e.g., PancardScreen) and pass the updated data
      navigation.navigate('NewPancardScreen', {passportData: updatedPassportData});
    };
  
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}>
          <View>
            <BackArrow placeholder={'Add Your Passport Back'} />
          </View>
          <View>
            <ImageBox
              placeholder={
                'Upload your passport back pic and\nwe’ll fetch all necessary data.'
              }
              onImageUpload={handleImageUpload} // Pass the image upload handler
            />
          </View>
          <View style={{marginTop: SIZES.padding}}>
            <Text
              style={{fontSize: 20, fontFamily: 'Inter-Medium', color: '#000'}}>
              Passport Back Details
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.header}>Father's Name</Text>
            <TextInput
              placeholder="Enter Father's Name"
              value={fatherName}
              onChangeText={setFatherName} // Update state when input changes
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
          <View style={{marginTop: 15}}>
            <Text style={styles.header}>Mother's Name</Text>
            <TextInput
              placeholder="Enter Mother's Name"
              value={motherName}
              onChangeText={setMotherName} // Update state when input changes
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
  
  export default NewUploadPassportBackScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: SIZES.width * 0.05,
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
  });
  