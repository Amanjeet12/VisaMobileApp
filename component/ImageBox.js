import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageBox = ({placeholder}) => {
  console.log(SIZES.width * 0.5);

  const [imageSource, setImageSource] = useState(null);
  const [fileName, setFileName] = useState(null);

  const selectImage = () => {
    launchImageLibrary({quality: 0.5, selectionLimit: 1}, async fileobj => {
      if (fileobj.errorCode || fileobj.didCancel) {
        return console.log('You should handle errors or user cancellation!');
      }

      try {
        const selectedImageUri = fileobj.assets[0].uri;
        const selectedFileName = selectedImageUri.substring(
          selectedImageUri.lastIndexOf('/') + 1,
        );
        setImageSource(selectedImageUri);
        setFileName(selectedFileName);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={selectImage}>
      <View style={styles.innerContainer}>
        {imageSource ? (
          <Image
            source={{uri: imageSource}}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        ) : (
          <View style={styles.innerContainer}>
            <Image
              source={image.upload}
              style={{
                width: SIZES.extralarge,
                height: SIZES.extralarge,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.fontDescription}>{placeholder}</Text>
            <Icon name="plussquare" size={35} color="#327113" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.width * 0.5,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#327113',
    padding: SIZES.padding,
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  fontDescription: {
    textAlign: 'center',
    fontSize: SIZES.body3,
    color: '#000',
    fontWeight: '300',
    paddingVertical: SIZES.body6,
  },
});
