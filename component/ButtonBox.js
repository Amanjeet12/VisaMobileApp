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

  console.log(SIZES.width * 0.134);

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
    padding: SIZES.body6,
    borderRadius: 8,
    alignItems: 'center',
    height: SIZES.width * 0.134,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SIZES.width * 0.045,
  },
  image: {
    width: SIZES.horizontal,
    height: SIZES.horizontal,
    resizeMode: 'contain',
    marginLeft: 5,
  },
});

export default ButtonBox;
