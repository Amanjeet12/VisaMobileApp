import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {image} from '../constant';
import Check from 'react-native-vector-icons/AntDesign';

const UserDetails = ({data, onSelect}) => {
  const {name, id} = data;
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onSelect(id);
  };

  const Icon = () => {
    // Replace this with your actual icon component
    return <Check name="check" size={24} color={'#fff'} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flex}>
          <TouchableOpacity
            style={[
              styles.checkBox,
              {backgroundColor: isSelected ? '#327113' : '#fff'},
            ]}
            onPress={handlePress}>
            {isSelected && <Icon />}
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 10,
              color: '#000',
              fontFamily: 'Inter-Medium',
            }}>
            {name}
          </Text>
        </View>
        <View>
          <Text style={{color: '#327113'}}>Edit</Text>
        </View>
      </View>
      <View style={styles.mailContainer}>
        <View style={[styles.flex, {justifyContent: 'flex-start'}]}>
          <Image source={image.mail} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: 12,
              color: 'rgba(37, 40, 49, 0.50)',
            }}>
            vikrant@krantecq.com
          </Text>
        </View>
        <View
          style={[styles.flex, {justifyContent: 'flex-start', marginTop: 3}]}>
          <Image source={image.phone} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: 12,
              color: 'rgba(37, 40, 49, 0.50)',
            }}>
            +91 45444444444
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 135,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    padding: 15,
    paddingHorizontal: 20,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBox: {
    width: 25,
    height: 25,
    backgroundColor: 'green',
    borderRadius: 8,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  mailContainer: {
    width: '100%',
    height: 60,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    borderRadius: 8,
    padding: 8,
  },
  image: {width: 20, height: 20, resizeMode: 'contain', marginRight: 5},
});
