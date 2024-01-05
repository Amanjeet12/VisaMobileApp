import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/Feather';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.map}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            padding: SIZES.width * 0.037,
            paddingHorizontal: SIZES.width * 0.061,
            height: '100%',
          }}>
          <View style={styles.flexbox}>
            <View>
              <Text style={styles.title}>From</Text>
              <Text style={styles.description}>India</Text>
            </View>
            <View>
              <Text style={[styles.title, {textAlign: 'right'}]}>To</Text>
              <Text style={[styles.description, {textAlign: 'left'}]}>UAE</Text>
            </View>
          </View>
          <View style={[styles.flexbox, {marginTop: SIZES.width * 0.05}]}>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                  },
                ]}>
                Days of stay
              </Text>
              <Text style={styles.description}>90 days</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                  },
                ]}>
                Entry Type
              </Text>
              <Text style={[styles.description, {textAlign: 'right'}]}>
                Single
              </Text>
            </View>
          </View>
          <View style={styles.smallContainer} />
          <View style={styles.smallContainer2} />
          <View style={styles.divider} />
          <View
            style={[
              styles.flexbox,
              {
                position: 'absolute',
                bottom: SIZES.body6,
                width: '100%',
                left: SIZES.width * 0.061,
              },
            ]}>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                    color: '#FFC727',
                  },
                ]}>
                Download Visa
              </Text>
            </View>
            <View>
              <Icon
                name={'arrow-down-circle'}
                size={SIZES.width * 0.06}
                color={'#FFC727'}
              />
            </View>
          </View>
          <View style={styles.aeroplane}>
            <Image
              source={image.flight}
              style={{
                width: SIZES.width * 0.365,
                height: SIZES.h1,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={[
                styles.description,
                {paddingLeft: SIZES.width * 0.02, color: '#fff'},
              ]}>
              Tourism
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.49,
    backgroundColor: '#327113',
    borderRadius: 20,
    borderColor: 'rgba(255, 199, 39, 0.70)',
    borderWidth: 2,
  },
  smallContainer: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    bottom: SIZES.width * 0.098,
    left: -SIZES.width * 0.03,
    borderWidth: 2,
    borderColor: 'rgba(255, 199, 39, 0.70)',
  },
  smallContainer2: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    bottom: SIZES.width * 0.098,
    right: -SIZES.width * 0.03,
    borderWidth: 2,
    borderColor: 'rgba(255, 199, 39, 0.70)',
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: SIZES.width * 0.044,
    fontWeight: '500',
    lineHeight: SIZES.h1,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    height: 1,
    left: SIZES.width * 0.061,
    bottom: SIZES.width * 0.123,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD', // Adjust color as needed
    borderStyle: 'dotted',
  },
  description: {
    fontSize: SIZES.width * 0.03,
    color: '#fff',
    fontWeight: '400',
    paddingTop: 2,
  },
  aeroplane: {
    position: 'absolute',
    top: SIZES.width * 0.037,
    left: SIZES.width * 0.292,
    alignItems: 'center',
  },
});
