import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; // Import your desired icon library
import {image} from '../constant';

const IconTextInput = ({placeholder, iconName}) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log(iconName);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '10%',
          alignItems: 'center',
        }}>
        <Image source={iconName} style={styles.customImage} />
      </View>
      <View style={{width: '90%'}}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#000"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
  },
  title: {
    fontSize: 12,
    paddingLeft: 3,
  },
  input: {
    height: 50,
    fontSize: 14,
    backgroundColor: '#F5F6F6',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  customImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, // Adjust the spacing as needed
    backgroundColor: '#000',
  },
  customImage: {
    width: 24, // Adjust the width and height as needed
    height: 24,
  },
});
