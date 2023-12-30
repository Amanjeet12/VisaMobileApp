import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {image} from '../constant';

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
      <View style={[styles.flexbox, {marginTop: 20}]}>
        <View>
          <Text style={[styles.title, {fontSize: 14, lineHeight: 20}]}>
            Days of stay
          </Text>
          <Text style={styles.description}>90 days</Text>
        </View>
        <View>
          <Text style={[styles.title, {fontSize: 14, lineHeight: 20}]}>
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
            bottom: 10,
            width: '100%',
            left: 25,
          },
        ]}>
        <View>
          <Text style={[styles.title, {fontSize: 14, lineHeight: 20}]}>
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
            width: 300,
            height: 40,
            resizeMode: 'stretch',
          }}
        />
        <Text style={[styles.description, {paddingLeft: 15, color: '#000'}]}>
          Tourism
        </Text>
      </View>
    </View>
  );
};

export default VisaContainer;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 25,
  },
  smallContainer: {
    width: 25,
    height: 25,
    backgroundColor: '#327113',
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    left: -13,
  },
  smallContainer2: {
    width: 25,
    height: 25,
    backgroundColor: '#327113',
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    right: -13,
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#22313F',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 30,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    height: 1,
    left: 25,
    bottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD', // Adjust color as needed
    borderStyle: 'dotted',
  },
  description: {
    fontSize: 12,
    color: '#808991',
    fontWeight: '400',
    paddingTop: 2,
  },
  aeroplane: {
    position: 'absolute',
    top: 7,
    left: 25,
    alignItems: 'center',
  },
});
