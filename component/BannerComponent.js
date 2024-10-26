import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {image} from '../constant';

const BannerComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={image.banner}
        style={{width: '100%', height: 151, borderRadius: 15}}
        resizeMode="cover" 
      />
    </View>
  );
};

export default BannerComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
