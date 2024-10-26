/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import {SIZES} from '../constant';

const TextInput = ({onChangeText, placeholder}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = newText => {
    setText(newText);
    onChangeText(newText); // Pass the value to the parent component
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <RNTextInput
      style={[
        styles.input,
        {
          borderColor: isFocused
            ? 'rgba(13, 22, 52, 0.5)'
            : 'rgba(13, 22, 52, 0.2)',
        },
      ]}
      value={text}
      onChangeText={handleTextChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      placeholderTextColor="black"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 15,
  },
});

export default TextInput;
