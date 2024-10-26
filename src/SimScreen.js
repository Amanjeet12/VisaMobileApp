import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Make sure you have this installed
import {useNavigation} from '@react-navigation/native';
import {image} from '../constant';

const countries = [
  {id: '1', name: 'Canada', flag: '🇨🇦'},
  {id: '2', name: 'Bangladesh', flag: '🇧🇩'},
  {id: '3', name: 'Angola', flag: '🇦🇴'},
  {id: '4', name: 'Greece', flag: '🇬🇷'},
  {id: '5', name: 'Portugal', flag: '🇵🇹'},
  {id: '6', name: 'Greece', flag: '🇬🇷'},
];

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
  // Additional SIM offers can be added here
];

const FlagItem = ({item}) => (
  <TouchableOpacity style={styles.flagButton}>
    <Text style={styles.flagText}>{item.flag}</Text>
  </TouchableOpacity>
);

const IconTextInput = ({onPress, iconName, iconSize, iconColor, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.searchIcon}
      />
      <Text style={{fontSize: 16, color: '#000',}}>Search</Text>
    </TouchableOpacity>
  );
};

const SimScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('popular');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleTab = tab => {
    setSelectedTab(tab);
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchEsimScreen'); // Make sure 'SearchScreen' is defined in your navigator
  };

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
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={image.visa3} style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name={'chevron-small-left'} size={35} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>e-SIM</Text>
        <View style={styles.mainContainer}>
          <IconTextInput
            iconName="magnifying-glass"
            iconSize={25}
            iconColor="#8A8A8A"
            placeholder="Search"
            placeholderTextColor="#22313F"
            onPress={handleSearchPress} // Use onPress for triggering navigation
          />
          <View style={{marginTop: 25, marginBottom: 5}}>
            <Text style={{fontSize: 22, color: '#327113', fontWeight: '700'}}>
              Popular eSIM Destinations
            </Text>
          </View>
          <View style={styles.border} />
          <FlatList
            horizontal
            data={countries}
            renderItem={FlagItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            style={styles.flagsList}
          />
          <View style={styles.border} />
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedTab === 'popular' ? styles.toggleActive : {},
              ]}
              onPress={() => toggleTab('popular')}>
              <Text
                style={
                  selectedTab === 'popular'
                    ? styles.toggleText
                    : {color: '#327113', fontSize: 16}
                }>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedTab === 'latest' ? styles.toggleActive : {},
              ]}
              onPress={() => toggleTab('latest')}>
              <Text
                style={
                  selectedTab === 'latest'
                    ? styles.toggleText
                    : {color: '#327113', fontSize: 16}
                }>
                Latest
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexBox}>
            <TouchableOpacity style={[styles.boxContainer, styles.flexBox]}>
              <Image
                source={image.eSIM}
                style={{width: 35, height: 35, resizeMode: 'contain'}}
              />
              <Text style={styles.text}>eSIM & Topup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.boxContainer, styles.flexBox]}>
              <Image
                source={image.help}
                style={{width: 35, height: 35, resizeMode: 'contain'}}
              />
              <Text style={styles.text}>Help & FAQs</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={simOffers}
              renderItem={({item}) => <OfferCard offer={item} />}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
              contentContainerStyle={{marginTop: 25}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    height: 250,
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    left: 15,
    top: StatusBar.currentHeight || 0 + 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    position: 'absolute',
    top: 180,
    left: 25,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    backgroundColor: '#f0f0f0',
    height: 55,
    gap: 5,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent',
    height: 55,
  },
  border: {
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: '#000',
  },
  flagsList: {
    marginTop: 15,
    paddingLeft: 15,
  },
  flagButton: {
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'column',
  },
  flagText: {
    fontSize: 24,
  },
  countryName: {
    fontSize: 16,
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 40,
    padding: 7,
    borderRadius: 25,
  },
  toggleButton: {
    padding: 10,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    paddingHorizontal: 45,
  },
  toggleActive: {
    backgroundColor: '#327113',
  },
  toggleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  boxContainer: {
    backgroundColor: '#f0f0f0',
    width: 170,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#E6E8E9',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
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

export default SimScreen;
