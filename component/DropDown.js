/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DropdownWithImage = ({image, title, options}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {selectedOption && selectedOption.image ? (
            <Image source={selectedOption.image} style={styles.image} />
          ) : null}
          <Text
            style={[
              styles.title,
              {paddingLeft: selectedOption && selectedOption.image ? 0 : 10},
            ]}>
            {selectedOption ? selectedOption.title : title}
          </Text>
        </View>
        <View>
          <Icon name="chevron-small-down" size={24} color={'#000'} />
        </View>
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={[styles.dropdown, {zIndex: 5}]}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleOptionSelect(item)}
              style={styles.option}>
              {item.image ? (
                <Image
                  source={item.image}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              ) : null}

              <Text style={{paddingLeft: 10, color: '#888'}}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropdownWithImage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    justifyContent: 'space-between',
    height: 55,
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontSize: 14,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 3,
    marginTop: 5,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
