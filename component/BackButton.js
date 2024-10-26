import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <Image
        source={image.back}
        style={{width: 35, height:35, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
