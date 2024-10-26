import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SIZES} from '../constant';

const CommonTextInput = ({title, placeholder}) => {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        mode="outlined"
        onFocus={() => setIsFocused(true)}
        label={isFocused ? title : ''}
        outlineColor="rgba(13, 22, 52, 0.05)"
        activeOutlineColor="#327113"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'grey',
  },
  title: {
    fontSize:12,
    paddingLeft: 3,
  },
  input: {
    height: 55,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default CommonTextInput;
