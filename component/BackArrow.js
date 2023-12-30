import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import {useNavigation} from '@react-navigation/native';

const BackArrow = ({placeholder}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={image.left}
          style={{width: SIZES.h3, height: SIZES.h3, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Text style={styles.fontTitle}>{placeholder}</Text>
    </View>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.146,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    height: SIZES.width * 0.08,
    width: SIZES.width * 0.08,
    justifyContent: 'center',
  },
  fontTitle: {
    fontSize: SIZES.padding,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});
