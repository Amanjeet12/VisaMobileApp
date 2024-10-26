/* eslint-disable react-native/no-inline-styles */
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useDarkTheme} from '../constant/ThemeContext';
  import BackArrow from '../component/BackArrow';
  import ImageBox from '../component/ImageBox';
  import CommonTextInput from '../component/CommonTextInput';
  import {RadioButton} from 'react-native-paper';
  import DateBox from '../component/DateBox';
  import DropDown from '../component/DropDown';
  import {SIZES, image} from '../constant';
  
  const InsuranceUploadScreen = ({navigation}) => {
    const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState('first');
  
    const handleInputChange = value => {
      setInputValue(value);
    };
  
    const optionsData = [
      {id: 1, title: 'India', image: image.flagIND},
      {id: 2, title: 'UAE', image: image.flagUSE},
    ];
    const optionsData2 = [
      {id: 1, title: 'Male'},
      {id: 2, title: 'Female'},
    ];
  
    return (
      <SafeAreaView style={styles.container}>
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
            />
          </View>
          <View style={{marginTop: SIZES.padding}}>
            <Text style={{...theme.FONTS.h4, color: '#000'}}>
              Passport Front Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.width * 0.013,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setChecked('first')}
              activeOpacity={0.7}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color="#327113"
              />
              <Text style={{...theme.FONTS.body1, color: '#000'}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: SIZES.body6,
              }}
              onPress={() => setChecked('second')}
              activeOpacity={0.7}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color="#327113"
              />
              <Text style={{...theme.FONTS.body1, color: '#000'}}>Female</Text>
            </TouchableOpacity>
          </View>
          <View>
            <CommonTextInput
              title={'Passport No.'}
              placeholder={'Enter passport no'}
            />
          </View>
          <View>
            <CommonTextInput
              title={'First Name'}
              placeholder={'Enter First Name'}
            />
          </View>
          <View style={{paddingBottom: SIZES.width * 0.061}}>
            <CommonTextInput
              title={'Last Name'}
              placeholder={'Enter Last Name'}
            />
          </View>
          <View>
            <DropDown
              image={image.google}
              title={'Select Country'}
              options={optionsData}
            />
          </View>
          <View style={{marginTop: SIZES.width * 0.05}}>
            <DateBox placeholder={'DOB'} />
          </View>
          <View>
            <View style={{marginTop: SIZES.width * 0.05}}>
              <DropDown
                image={image.apple}
                title={'Select Gender'}
                options={optionsData2}
              />
            </View>
            <CommonTextInput
              title={'Place Birth'}
              placeholder={'Enter Place Birth'}
            />
          </View>
          <View style={{marginTop: 25}}>
            <DateBox placeholder={'Date Of Issue'} />
          </View>
          <View style={{marginTop: 25}}>
            <DateBox placeholder={'Date Of Expiry'} />
          </View>
          <View
            style={{
              marginTop: SIZES.width * 0.05,
              marginBottom: SIZES.width * 0.075,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={styles.buttonBox2}
              onPress={() => navigation.navigate('CompleteScreen')}>
              <Text style={{fontSize: SIZES.width * 0.04, color: '#fff'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default InsuranceUploadScreen;
  
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
    buttonBox: {
      height: SIZES.width * 0.135,
      backgroundColor: '#fff',
      width: '48%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderWidth: 2,
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
      width: SIZES.width * 0.05,
      height: SIZES.width * 0.05,
      resizeMode: 'cover',
      marginLeft: SIZES.width * 0.015,
    },
  });
  