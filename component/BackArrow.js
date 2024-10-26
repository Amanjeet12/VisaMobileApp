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
          style={{width: 24, height: 24, resizeMode: 'contain'}}
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
    height: 20,
    width: 20,
    justifyContent: 'center',
  },
  fontTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});
