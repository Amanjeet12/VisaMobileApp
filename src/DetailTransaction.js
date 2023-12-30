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
import {image} from '../constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Download from 'react-native-vector-icons/Feather';
import ButtonBox from '../component/ButtonBox';

const DetailTransaction = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <View style={styles.mainContainer}>
        <BackArrow placeholder={'Visa Details'} />
        <View style={styles.boxContainer}>
          <View style={styles.flex}>
            <Image source={image.flagIND} style={styles.image} />
            <Text style={{paddingLeft: 10, color: '#000'}}>
              30 Days Tourist Visa
            </Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <Text style={styles.title}>IN</Text>
            <Text style={[styles.title, {textAlign: 'right'}]}>UAE</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <View style={styles.flex}>
              <Icon name={'person'} size={12} color={'#327113'} />
              <Text style={[styles.description, {paddingLeft: 3}]}>
                2 person
              </Text>
            </View>
            <Text style={[styles.description, {textAlign: 'right'}]}>$100</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 12},
            ]}>
            <View style={styles.flex}>
              <Image source={image.avatar} style={styles.image} />
              <Text style={{color: '#000', marginLeft: 5}}>
                Vikrant Kumar Singh
              </Text>
            </View>
            <View>
              <Download
                name={'arrow-down-circle'}
                size={25}
                color={'#327113'}
              />
            </View>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 3},
            ]}>
            <View style={styles.flex}>
              <Image source={image.avatar} style={styles.image} />
              <Text style={{color: '#000', marginLeft: 5}}>
                Rohit Kumar Singh
              </Text>
            </View>
            <View>
              <Download
                name={'arrow-down-circle'}
                size={25}
                color={'#327113'}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: 20},
          ]}>
          <Text style={styles.description}>Status</Text>
          <Text style={[styles.description, {color: '#327113'}]}>
            Visa Issued
          </Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: 10},
          ]}>
          <Text style={styles.description}>Invoice</Text>
          <Text style={styles.description}>INV23124131332</Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: 10},
          ]}>
          <Text style={styles.description}>Transaction Date</Text>
          <Text style={styles.description}>Wed, 18 Oct 2022</Text>
        </View>
        <View
          style={[
            styles.flex,
            {justifyContent: 'space-between', marginTop: 10},
          ]}>
          <Text style={styles.description}>Payment Method</Text>
          <Text style={styles.description}>Razorpay</Text>
        </View>
        <View style={[styles.boxContainer, {height: 120, marginTop: 20}]}>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 0},
            ]}>
            <Text style={styles.description}>Visa Fee</Text>
            <Text style={styles.description}>$100</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <Text style={styles.description}>Service Fee</Text>
            <Text style={styles.description}>$5</Text>
          </View>
          <View
            style={[
              styles.flex,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <Text style={styles.description}>Total </Text>
            <Text style={styles.description}>$105</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
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
    paddingHorizontal: 24,
  },
  boxContainer: {
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    color: '#0D1634',
    fontWeight: '500',
  },
});
