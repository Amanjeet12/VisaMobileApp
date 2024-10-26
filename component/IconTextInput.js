import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; // Import your desired icon library
import {SIZES, image} from '../constant';

const IconTextInput = ({placeholder, iconName, editable}) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log(iconName);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '15%',
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
          editable={editable}
        />
      </View>
    </View>
  );
};

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.body6,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    paddingRight: SIZES.width * 0.038,
  },
  title: {
    fontSize: SIZES.body5,
    paddingLeft: SIZES.width * 0.1,
  },
  input: {
    height: SIZES.extralarge,
    fontSize: SIZES.body4,
    backgroundColor: '#F5F6F6',
    borderBottomRightRadius: SIZES.body6,
    borderTopRightRadius: SIZES.body6,
  },
  customImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SIZES.body6, // Adjust the spacing as needed
    backgroundColor: '#000',
  },
  customImage: {
    width: SIZES.width * 0.06, // Adjust the width and height as needed
    height: SIZES.width * 0.06,
  },
});
