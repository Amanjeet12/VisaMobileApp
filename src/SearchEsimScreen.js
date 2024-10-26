import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons
import {image} from '../constant';

const SearchEsimScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([
      {id: '1', name: 'Global eSIM Plan'},
      {id: '2', name: 'Local eSIM Plan'},
    ]);
  };

  const handleBackPress = () => {
    navigation.goBack(); // Assuming you're using React Navigation
  };

  const simOffers = [
    {
      id: 1,
      title: 'Global Special 20GB',
      duration: '365 Days',
      dataAllowance: '20GB',
      price: '63.99',
      countries: [
        {id: '1', name: 'Canada', flag: '🇨🇦'},
        {id: '2', name: 'Bangladesh', flag: '🇧🇩'},
        {id: '3', name: 'Angola', flag: '🇦🇴'},
        // Assume all flags up to +102 countries
      ],
    },
    {
      id: 2,
      title: 'Global Special 20GB',
      duration: '365 Days',
      dataAllowance: '20GB',
      price: '63.99',
      countries: [
        {id: '1', name: 'Canada', flag: '🇨🇦'},
        {id: '2', name: 'Bangladesh', flag: '🇧🇩'},
        {id: '3', name: 'Angola', flag: '🇦🇴'},
        // Assume all flags up to +102 countries
      ],
    },
  ];

  const OfferCard = ({offer}) => {
    return (
      <TouchableOpacity
        style={styles.offerCard}
        onPress={() => navigation.navigate('InnerEsimScreen')}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <Image
            source={image.global}
            style={{width: 35, height: 35, resizeMode: 'contain'}}
          />
          <View>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={{color: '#000'}}>
              {offer.duration} | {offer.dataAllowance}
            </Text>
          </View>
        </View>

        <Text style={styles.offerPrice}>${offer.price}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.flagsContainer}>
            {offer.countries.slice(0, 3).map(country => (
              <Text key={country.id} style={styles.flag}>
                {country.flag}
              </Text>
            ))}
            <Text style={styles.buttonText}>+102 countries</Text>
          </View>
          <View>
            <Text style={[styles.buttonText, {paddingTop: 5}]}>
              View Offer &gt;&gt;
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Type here to search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          placeholderTextColor={'#000'}
        />
      </View>
      <FlatList
        data={simOffers}
        renderItem={({item}) => <OfferCard offer={item} />}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
        contentContainerStyle={{marginTop: 25}}
      />
    </SafeAreaView>
  );
};

export default SearchEsimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  backButton: {
    paddingRight: 7,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    height: 55,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#327113',
    justifyContent: 'center',
    padding: 10,
  },
  searchButtonText: {
    color: '#fff',
  },
  resultItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  offerCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  offerPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    paddingLeft: 50,
    marginTop: 5,
  },
  flagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  flag: {
    marginRight: 5,
    fontSize: 24,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#327113',
    textAlign: 'center',
  },
});
