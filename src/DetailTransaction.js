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
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Download from 'react-native-vector-icons/Feather';
import ButtonBox from '../component/ButtonBox';

const DetailTransaction = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={'light-content'}
      />
      <View style={styles.mainContainer}>
        <BackArrow placeholder={'Visa Details'} />
        <View style={styles.boxContainer}>
          <View style={styles.flex}>
            <Image source={image.flagIND} style={styles.image} />
            <Text
              style={{
                paddingLeft: SIZES.body6,
                color: '#000',
                fontSize: SIZES.width * 0.035,
              }}>
              30 Days Tourist Visa
            </Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.body6},
            ]}>
            <Text style={styles.title}>IN</Text>
            <Text style={[styles.title, {textAlign: 'right'}]}>UAE</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.body6},
            ]}>
            <View style={styles.flex}>
              <Icon name={'person'} size={SIZES.body5} color={'#327113'} />
              <Text style={[styles.description, {paddingLeft: 3}]}>
                2 person
              </Text>
            </View>
            <Text style={[styles.description, {textAlign: 'right'}]}>$100</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.body5},
            ]}>
            <View style={styles.flex}>
              <Image source={image.avatar} style={styles.image} />
              <Text
                style={{
                  color: '#000',
                  marginLeft: SIZES.width * 0.013,
                  fontSize: SIZES.width * 0.03,
                }}>
                Vikrant Kumar Singh
              </Text>
            </View>
            <View>
              <Download
                name={'arrow-down-circle'}
                size={SIZES.width * 0.05}
                color={'#327113'}
              />
            </View>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.width * 0.01},
            ]}>
            <View style={styles.flex}>
              <Image source={image.avatar} style={styles.image} />
              <Text
                style={{
                  color: '#000',
                  marginLeft: SIZES.width * 0.015,
                  fontSize: SIZES.width * 0.03,
                }}>
                Rohit Kumar Singh
              </Text>
            </View>
            <View>
              <Download
                name={'arrow-down-circle'}
                size={SIZES.width * 0.05}
                color={'#327113'}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: SIZES.width * 0.05},
          ]}>
          <Text style={styles.description}>Status</Text>
          <Text style={[styles.description, {color: '#327113'}]}>
            Visa Issued
          </Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: SIZES.body6},
          ]}>
          <Text style={styles.description}>Invoice</Text>
          <Text style={styles.description}>INV23124131332</Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: SIZES.body6},
          ]}>
          <Text style={styles.description}>Transaction Date</Text>
          <Text style={styles.description}>Wed, 18 Oct 2022</Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: SIZES.body6},
          ]}>
          <Text style={styles.description}>Payment Method</Text>
          <Text style={styles.description}>Razorpay</Text>
        </View>
        <View
          style={[
            styles.boxContainer,
            {height: SIZES.width * 0.292, marginTop: SIZES.width * 0.05},
          ]}>
          <View style={[styles.flex, {justifyContent: 'space-between'}]}>
            <Text style={styles.description}>Visa Fee</Text>
            <Text style={styles.description}>$100</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.body6},
            ]}>
            <Text style={styles.description}>Service Fee</Text>
            <Text style={styles.description}>$5</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: SIZES.body6},
            ]}>
            <Text style={styles.description}>Total </Text>
            <Text style={styles.description}>$105</Text>
          </View>
        </View>
        <View style={{marginTop: SIZES.width * 0.05}}>
          <ButtonBox placeholder={'Download Invoice'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.06,
  },
  boxContainer: {
    height: SIZES.width * 0.5,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    paddingVertical: SIZES.width * 0.06,
    paddingHorizontal: SIZES.width * 0.04,
  },
  image: {
    width: SIZES.width * 0.06,
    height: SIZES.width * 0.06,
    resizeMode: 'contain',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.width * 0.06,
    color: '#000',
    fontWeight: '500',
  },
  description: {
    fontSize: SIZES.width * 0.028,
    color: '#0D1634',
    fontWeight: '500',
  },
});
