import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {image} from '../constant';
import Icon from 'react-native-vector-icons/Feather';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.map}
        style={{height: '100%', width: '100%'}}>
        <View style={{padding: 15, paddingHorizontal: 25, height: '100%'}}>
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
                bottom: 10,
                width: '100%',
                left: 25,
              },
            ]}>
            <View>
              <Text
                style={[
                  styles.title,
                  {fontSize: 14, lineHeight: 20, color: '#FFC727'},
                ]}>
                Download Visa
              </Text>
            </View>
            <View>
              <Icon name={'arrow-down-circle'} size={24} color={'#FFC727'} />
            </View>
          </View>
          <View style={styles.aeroplane}>
            <Image
              source={image.flight}
              style={{
                width: 150,
                height: 30,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={[styles.description, {paddingLeft: 15, color: '#fff'}]}>
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
    height: 200,
    backgroundColor: '#327113',
    borderRadius: 20,
    // marginTop: 10,
    borderColor: 'rgba(255, 199, 39, 0.70)',
    borderWidth: 2,
  },
  smallContainer: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    left: -12,
    borderWidth: 2,
    borderColor: 'rgba(255, 199, 39, 0.70)',
  },
  smallContainer2: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    right: -12,
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
    color: '#fff',
    fontWeight: '400',
    paddingTop: 2,
  },
  aeroplane: {
    position: 'absolute',
    top: 15,
    left: 120,
    alignItems: 'center',
  },
});
