import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {image} from '../constant';

const Reward = ({title, description, rewardImage}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.map}
        style={{
          width: '100%',
          height: 130,
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
          <Text style={{fontSize: 13, color: '#fff'}}>{title}</Text>
          <Text style={{fontSize: 10, color: '#fff', marginTop: 5}}>
            {description}
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{color: '#fff', fontSize: 10}}>Get Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#327113',
    borderRadius: 8,
    position: 'relative',
    borderColor: '#327113',
    marginTop: 10,
  },
  whiteCircleTop: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    top: -15,
    left: 140,
  },
  whiteCircleBottom: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    bottom: -15,
    left: 140,
  },
  dottedDivider: {
    position: 'absolute',
    width: 1,
    height: 130,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#fff',
    top: 15,
    left: 155,
  },
  ImageContainer: {
    position: 'relative',
    width: '38%',
    height: '100%',
    padding: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    width: '52%',
    height: '100%',
    padding: 15,
  },
  buttonContainer: {
    width: 100,
    height: 35,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
    borderColor: '#fff',
  },
});
