import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';

const Reward = ({title, description, rewardImage}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.map}
        style={{
          width: '100%',
          height: SIZES.width * 0.315,
          flexDirection: 'row',
        }}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={styles.whiteCircleTop} />
        <View style={styles.whiteCircleBottom} />
        <View style={styles.dottedDivider} />
        <View style={styles.ImageContainer}>
          <Image source={rewardImage} style={styles.image} />
        </View>
        <View style={{width: '10%'}} />
        <View style={styles.textContainer}>
          <Text style={{fontSize: SIZES.width * 0.032, color: '#fff'}}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: SIZES.body6,
              color: '#fff',
              marginTop: SIZES.width * 0.012,
            }}>
            {description}
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{color: '#fff', fontSize: SIZES.body6}}>Get Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.315,
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#327113',
    borderRadius: 8,
    position: 'relative',
    borderColor: '#327113',
    marginTop: SIZES.body6,
  },
  whiteCircleTop: {
    position: 'absolute',
    width: SIZES.h1,
    height: SIZES.h1,
    backgroundColor: '#fff',
    borderRadius: SIZES.h1,
    top: -SIZES.width * 0.037,
    left: SIZES.width * 0.341,
  },
  whiteCircleBottom: {
    position: 'absolute',
    width: SIZES.h1,
    height: SIZES.h1,
    backgroundColor: '#fff',
    borderRadius: 30,
    bottom: -SIZES.width * 0.037,
    left: SIZES.width * 0.341,
  },
  dottedDivider: {
    position: 'absolute',
    width: 1,
    height: SIZES.width * 0.315,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#fff',
    top: SIZES.width * 0.037,
    left: SIZES.width * 0.377,
  },
  ImageContainer: {
    position: 'relative',
    width: '38%',
    height: '100%',
    padding: SIZES.width * 0.037,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    width: '52%',
    height: '100%',
    padding: SIZES.width * 0.037,
  },
  buttonContainer: {
    width: SIZES.width * 0.245,
    height: SIZES.width * 0.085,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: SIZES.body6,
    borderColor: '#fff',
  },
});
