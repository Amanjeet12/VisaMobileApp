import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const ProfileHeader = () => {
  const {data, isloading, isError, isSuccess} = useSelector(
    state => state.loginVerify,
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
        <Image
          source={
            data?.user_data?.user_profile_photo
              ? {uri: data?.user_data?.user_profile_photo}
              : image.image
          }
          style={{
            width: 55,
            height: 55,
            borderRadius: 27.5, // Half of width/height for a perfect circle
            resizeMode: 'cover', // Ensure the image covers the entire area
          }}
        />
        <Text style={styles.text}>Hey {data?.user_data?.user_name}</Text>
      </View>

      <TouchableOpacity>
        <Icon name="customerservice" size={34} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    height: 85,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: SIZES.body3,
    color: '#22313F',
    fontWeight: '700',
  },
});
