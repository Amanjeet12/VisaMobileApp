import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';
import Cross from 'react-native-vector-icons/AntDesign';

const ImageBox = ({placeholder, initialImageUrl, onImageUpload}) => {
  const [imageSource, setImageSource] = useState(initialImageUrl || null);
  const [fileName, setFileName] = useState(null);
  const [imageUrl, setImageUrl] = useState(initialImageUrl || null); // Set initial URL if provided

  const uploadImage = async (uri, fileName) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri,
        name: fileName,
        type: 'image/jpeg', // Adjust type if needed
      });

      const response = await fetch(
        'http://uat.visa247.co.in/backend/upload_file',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const result = await response.json();

      if (result.success === 1) {
        setImageUrl(result.url); // Update URL from the server
        onImageUpload(result.url); // Callback to parent with the URL
      } else {
        Alert.alert('Error', 'Image upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Something went wrong during upload');
    }
  };

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

        // Upload the image after selection
        await uploadImage(selectedImageUri, selectedFileName);
      } catch (error) {
        console.error('Image selection error:', error);
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
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.fontDescription}>{placeholder}</Text>
            <Icon name="plussquare" size={35} color="#327113" />
          </View>
        )}
        {imageSource ? (
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => setImageSource(null)}>
            <Cross name="closecircle" size={18} color={'green'} />
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 165,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#327113',
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  fontDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    paddingVertical: 8,
  },
});
