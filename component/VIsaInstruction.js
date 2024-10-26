import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {image} from '../constant';

const VIsaInstruction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps to apply visa</Text>
      <View style={[styles.flexBox, {marginTop: 35}]}>
        <Image source={image.Ind1} style={styles.image} />
        <View>
          <Text style={styles.topic}>Choose Visa</Text>
          <Text style={styles.discription}>
            Choose the type of visa you {' \n'} required
          </Text>
        </View>
      </View>
      <View style={styles.flexBox}>
        <Image source={image.Ind2} style={styles.image} />
        <View>
          <Text style={styles.topic}>Fill Form</Text>
          <Text style={styles.discription}>
            Proceed with the application by {' \n'} filling required details
          </Text>
        </View>
      </View>
      <View style={styles.flexBox}>
        <Image source={image.Ind3} style={styles.image} />
        <View>
          <Text style={styles.topic}>Pay Online</Text>
          <Text style={styles.discription}>Complete the payment</Text>
        </View>
      </View>
      <View style={styles.flexBox}>
        <Image source={image.Ind4} style={styles.image} />
        <View>
          <Text style={styles.topic}>Recieve Visa</Text>
          <Text style={styles.discription}>Recieve you visa via email</Text>
        </View>
      </View>
    </View>
  );
};

export default VIsaInstruction;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#327113',
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  topic: {fontSize: 20, color: '#000', fontWeight: '700'},
  discription: {fontSize: 16, color: '#000', paddingTop: 5, lineHeight: 23},
  flexBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 25,
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },
});
