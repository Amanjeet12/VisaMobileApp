import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';

const VisaContainer = () => {
  return (
    <View style={styles.container}>
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
              {fontSize: SIZES.body5, lineHeight: SIZES.width * 0.05},
            ]}>
            Days of stay
          </Text>
          <Text style={styles.description}>90 days</Text>
        </View>
        <View>
          <Text
            style={[
              styles.title,
              {fontSize: SIZES.body5, lineHeight: SIZES.width * 0.05},
            ]}>
            Entry Type
          </Text>
          <Text style={[styles.description, {textAlign: 'right'}]}>Single</Text>
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
              {fontSize: SIZES.width * 0.035, lineHeight: SIZES.width * 0.05},
            ]}>
            Total Price{' '}
          </Text>
        </View>
        <View>
          <Text style={[styles.title, {textAlign: 'right'}]}>$100</Text>
        </View>
      </View>
      <View style={styles.aeroplane}>
        <Image
          source={image.aeroplane}
          style={{
            width: SIZES.width * 0.73,
            height: SIZES.width * 0.098,
            resizeMode: 'stretch',
          }}
        />
        <Text
          style={[
            styles.description,
            {paddingLeft: SIZES.width * 0.037, color: '#000'},
          ]}>
          Tourism
        </Text>
      </View>
    </View>
  );
};

export default VisaContainer;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.48,
    backgroundColor: '#fff',
    borderRadius: SIZES.width * 0.05,
    padding: SIZES.width * 0.037,
    paddingHorizontal: SIZES.width * 0.061,
  },
  smallContainer: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    backgroundColor: '#327113',
    borderRadius: SIZES.h1,
    position: 'absolute',
    bottom: SIZES.largeTitle,
    left: -SIZES.width * 0.032,
  },
  smallContainer2: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    backgroundColor: '#327113',
    borderRadius: SIZES.h1,
    position: 'absolute',
    bottom: SIZES.largeTitle,
    right: -SIZES.width * 0.032,
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#22313F',
    fontSize: SIZES.width * 0.044,
    fontWeight: '500',
    lineHeight: SIZES.h1,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    height: 1,
    left: SIZES.width * 0.061,
    bottom: SIZES.extralarge,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD', // Adjust color as needed
    borderStyle: 'dotted',
  },
  description: {
    fontSize: SIZES.width * 0.03,
    color: '#808991',
    fontWeight: '400',
    paddingTop: SIZES.width * 0.005,
  },
  aeroplane: {
    position: 'absolute',
    top: SIZES.width * 0.015,
    left: SIZES.width * 0.061,
    alignItems: 'center',
  },
});
