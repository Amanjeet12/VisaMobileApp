import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SIZES, image} from '../constant';
import Check from 'react-native-vector-icons/AntDesign';

const UserDetails = ({data, onSelect}) => {
  const {user_email_id, _id, user_name} = data;
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onSelect(_id);
  };

  const Icon = () => {
    // Replace this with your actual icon component
    return <Check name="check" size={SIZES.width * 0.06} color={'#fff'} />;
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
              paddingLeft: SIZES.body6,
              color: '#000',
              fontFamily: 'Inter-Medium',
              fontSize: SIZES.width * 0.035,
            }}>
            {user_name}
          </Text>
        </View>
      </View>
      <View style={styles.mailContainer}>
        <View style={[styles.flex, {justifyContent: 'flex-start'}]}>
          <Image source={image.mail} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: SIZES.body5,
              color: 'rgba(37, 40, 49, 0.50)',
            }}>
            {user_email_id}
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dadada',
    padding: 15,
    paddingHorizontal: 18,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBox: {
    width: SIZES.width * 0.061,
    height: SIZES.width * 0.061,
    backgroundColor: 'green',
    borderRadius: 8,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  mailContainer: {
    width: '100%',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    padding: 8,
  },
  image: {
    width: SIZES.width * 0.05,
    height: SIZES.width * 0.05,
    resizeMode: 'contain',
    marginRight: SIZES.width * 0.013,
  },
});
