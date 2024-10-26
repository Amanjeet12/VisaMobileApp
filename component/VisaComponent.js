import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {image} from '../constant';
import {useNavigation} from '@react-navigation/native';

const VisaComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: 175}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Visa247 Essentials</Text>

        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.touchableArea}
            onPress={() => navigation.navigate('VisaScreen')}>
            <Image source={image.Essentials1} style={styles.icon} />
            <Text style={styles.iconText}>Visa</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.touchableArea}
            onPress={() => navigation.navigate('InsuranceScreen')}>
            <Image source={image.Essentials2} style={styles.icon} />
            <Text style={styles.iconText}>Insurance</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.touchableArea}
            onPress={() => navigation.navigate('SimScreen')}>
            <Image source={image.sim} style={styles.icon} />
            <Text style={styles.iconText}>E-Sim</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.touchableArea}
            onPress={() => navigation.navigate('FlightAndHotelScreen')}>
            <Image source={image.Essentials3} style={styles.icon} />
            <Text style={styles.iconText}>Flight</Text>
          </TouchableOpacity>

          <View style={styles.divider} />
          <TouchableOpacity style={styles.touchableArea}>
            <Image source={image.Essentials4} style={styles.icon} />
            <Text style={styles.iconText}>Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VisaComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 7,
    height: 155,
    padding: 15,
    backgroundColor: '#EFFFE7',
    elevation: 8,
    marginHorizontal: 7,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
  touchableArea: {
    alignItems: 'center', // Align the image and text vertically
  },
  icon: {
    width: 40, // Set width as needed
    height: 40, // Set height as needed
    resizeMode: 'contain', // Ensures the images fit well within the dimensions
  },
  iconText: {
    marginTop: 5, // Space between icon and text
    fontSize: 12, // Smaller font size for the labels
    color: '#000', // Text color
  },
  divider: {
    height: 50, // Adjust height according to your design needs
    width: 1,
    backgroundColor: '#D3D3D3', // Light grey color for the divider
  },
});
