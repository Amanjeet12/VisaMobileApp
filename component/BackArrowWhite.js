import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const BackArrowWhite = ({placeholder}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={SIZES.h1} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.fontTitle}>{placeholder}</Text>
    </View>
  );
};

export default BackArrowWhite;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.146,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    height: SIZES.width * 0.087,
    width: SIZES.width * 0.087,
    justifyContent: 'center',
  },
  fontTitle: {
    fontSize: SIZES.width * 0.05,
    color: '#fff',
    fontWeight: '500',
  },
});
