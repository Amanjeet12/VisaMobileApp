import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constant';

const ButtonBox = ({
  placeholder,
  icon,
  specific,
  backgroundColor,
  textColor,
}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    specific ? navigation.navigate(specific) : null;
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: backgroundColor ? backgroundColor : 'green'},
        ]}
        onPress={() => handleNavigation()}>
        <Text
          style={[styles.buttonText, {color: textColor ? textColor : '#fff'}]}>
          {placeholder}
        </Text>
        {icon ? <Image source={icon} style={styles.image} /> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 8,
  },
});

export default ButtonBox;
