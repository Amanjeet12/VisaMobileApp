import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {image} from '../constant';

const data = [
  {
    id: '1',
    title: 'Hajj Package',
    Departure: '5th Oct 2024',
    Price: '₹7,50,000',
    Day: '40',
    imageUrl: image.packages, // Replace with your image path
  },
  {
    id: '2',
    title: 'Hajj Package',
    Departure: '5th Oct 2024',
    Price: '₹7,50,000',
    Day: '40',
    imageUrl: image.packages, // Replace with your image path
  },
];

const PackageComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Premium Packages</Text>
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imageUrl} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.departure}>Departure - {item.Departure}</Text>
          <Text style={styles.days}>{item.Day} Days</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.price2}>
              Starting from  - <Text style={styles.price}>{item.Price}</Text>
            </Text>
            <Button
              title="Book Now"
              onPress={() => console.log('Booked')}
              color="#327113"
            
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default PackageComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    marginBottom: 100,
  },
  header: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E2EA',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  departure: {
    fontSize: 14,
    marginBottom: 5,
    color: 'grey',
  },
  price: {
    fontSize: 16,
    color: '#327113',
    marginBottom: 5,
  },
  price2: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  days: {
    fontSize: 12,
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {},
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
