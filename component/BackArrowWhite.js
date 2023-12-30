import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {image} from '../constant';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const BackArrowWhite = ({placeholder}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={30} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.fontTitle}>{placeholder}</Text>
    </View>
  );
};

export default BackArrowWhite;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    height: 35,
    width: 35,
    justifyContent: 'center',
  },
  fontTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
});
