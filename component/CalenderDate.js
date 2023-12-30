import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; // Import your desired icon library
import {image} from '../constant';
import BottomSheet from '@gorhom/bottom-sheet';

const CalenderDate = ({placeholder, iconName}) => {
  const [isFocused, setIsFocused] = useState(false);
  const bottomSheetRef = useRef(null);

  const handleTextInputClick = () => {
    console.log('enter');
    bottomSheetRef.current.expand();
  };

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleTextInputClick}
        style={{
          width: '10%',
          alignItems: 'center',
        }}>
        <Image source={image.apple} style={styles.customImage} />
      </TouchableOpacity>
      <View style={{width: '90%'}}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#000"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundComponent={() => (
          <View
            style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', height: 100}}
          />
        )}>
        {/* Content of the bottom sheet goes here */}
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Your bottom sheet content */}
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CalenderDate;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 12,
    paddingLeft: 3,
  },
  input: {
    height: 50,
    fontSize: 14,
    backgroundColor: 'pink',
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
