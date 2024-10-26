import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Burger from 'react-native-vector-icons/EvilIcons';
import {image} from '../constant';
import BannerComponent from '../component/BannerComponent';
import Back from 'react-native-vector-icons/Entypo';


const data = [
  {
    id: 1,
    title: 'USA',
    type: 'Travel Visa',
    price: '7500',
    image: image.visa1,
  },
  {
    id: 2,
    title: 'Malaysia',
    type: 'Travel Visa',
    price: '7500',
    image: image.visa2,
  },
  {
    id: 3,
    title: 'Malaysia',
    type: 'Travel Visa',
    price: '7500',
    image: image.visa2,
  },
];

const VisaScreen = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Back name={'chevron-small-left'} size={35} color={'#000'} />
        </TouchableOpacity>
        <Image source={image.visa3} style={styles.heroImage} />
        <Text style={styles.title}>Get a Visa</Text>
        <View style={styles.upperContainer}>
          <View style={styles.searchContainer}>
            <Icon name={'search'} size={24} color={'#8A8A8A'} />
            <TextInput
              style={styles.searchInput}
              placeholder="Enter Destination"
              placeholderTextColor="#000"
            />
            <Burger name={'navicon'} size={24} color={'#8A8A8A'} />
          </View>
          <Text style={styles.sectionTitle}>Travel Stories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}
            contentContainerStyle={styles.cardScrollContainer} // Add this line
          >
            {data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('DetailVisaScreen', {item: item})
                }>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title} </Text>
                <Text style={[styles.cardTitle, {paddingTop: 3}]}>
                  {item.type}{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.cardPrice}>
                    Starting from - ₹{item.price}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <Icon name="chevron-right" size={24} color={'#fff'} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}
            contentContainerStyle={styles.cardScrollContainer} // Add this line
          >
            {data.map(item => (
              <TouchableOpacity key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title} </Text>
                <Text style={[styles.cardTitle, {paddingTop: 3}]}>
                  {item.type}{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.cardPrice}>
                    Starting from - ₹{item.price}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <Icon name="chevron-right" size={24} color={'#fff'} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{paddingHorizontal: 25, marginBottom: 35}}>
            <BannerComponent />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VisaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: 255,
  },
  cardScrollContainer: {
    paddingRight: 20, // Adds padding on the right side of the scroll area
  },
  title: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    top: 140,
    left: 25,
    fontWeight: '700',
  },
  upperContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: -55,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
  searchContainer: {
    marginHorizontal: 20,
    backgroundColor: '#f5f6f6',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    elevation: 4,
    marginTop: 35,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 25,
    color: '#000',
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 25,
    paddingHorizontal: 25,
    paddingRight: 20, // Adds padding on the right side of the scroll area
  },
  card: {
    width: 223, // Adjusted for better spacing and fit
    marginRight: 20, // Added spacing between cards
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E2EA',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  cardPrice: {
    fontSize: 12,
    color: '#327113',
    fontWeight: '600',
  },
  buttonContainer: {
    width: 35,
    height: 35,
    backgroundColor: '#327113',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    left: 15,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11,
  },
});
