/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {SIZES} from '../constant';

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
              {
                paddingLeft:
                  selectedOption && selectedOption.image ? 0 : SIZES.body6,
              },
            ]}>
            {selectedOption ? selectedOption.title : title}
          </Text>
        </View>
        <View>
          <Icon
            name="chevron-small-down"
            size={SIZES.width * 0.06}
            color={'#000'}
          />
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
                  style={{
                    width: SIZES.width * 0.035,
                    height: SIZES.width * 0.035,
                    resizeMode: 'contain',
                  }}
                />
              ) : null}

              <Text style={{paddingLeft: SIZES.body6, color: '#888'}}>
                {item.title}
              </Text>
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
    padding: SIZES.body6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    justifyContent: 'space-between',
    height: SIZES.extralarge + 4,
  },
  image: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    marginRight: SIZES.body6,
  },
  title: {
    color: '#000',
    fontSize: SIZES.body4,
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
    padding: SIZES.width * 0.035,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
