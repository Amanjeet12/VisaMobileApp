import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SIZES, image} from '../../constant';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useDarkTheme} from '../../constant/ThemeContext';
import ButtonBox from '../../component/ButtonBox';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import BannerComponent from '../../component/BannerComponent';
import IconTextInput from '../../component/IconTextInput';

const popularSearches = [
  'UAE',
  'Dubai',
  'Canada',
  'Canada',
  'Singapore',
  'Thailand',
  'Canada',
];

const FlightAndHotelScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const navigation = useNavigation();
  let RBSheetRef = null;
  const [initial, setInitial] = useState('');
  const [returning, setReturning] = useState('');
  const [activeInput, setActiveInput] = useState(''); // 'departure' or 'returning'
  const [selected, setSelected] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [selectedOption, setSelectedOption] = useState('Flight');

  const openBottomSheet = inputType => {
    if (RBSheetRef) {
      setActiveInput(inputType);
      RBSheetRef.open();
    }
  };

  const confirmButtonPressed = () => {
    if (activeInput === 'departure') {
      setInitial(selected);
    } else if (activeInput === 'returning') {
      setReturning(selected);
    }

    setActiveInput('');
    if (RBSheetRef) {
      RBSheetRef.close();
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const formatSelectedDate = dateString => {
    const dateObject = new Date(dateString);
    const month = dateObject.toLocaleString('default', {month: 'short'});
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const handleNavigation = () => {
    navigation.navigate('DetailScreenFAndH', {item: selectedOption});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={image.visa3} style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name={'chevron-small-left'} size={35} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Flight & Hotels</Text>
        <View style={styles.upperContainer}>
          <Text style={styles.titleHeader}>Choose</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 35,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={[
                styles.singleContainer,
                {
                  backgroundColor:
                    selectedOption === 'Flight' ? 'green' : '#fff',
                  borderColor: 'green',
                },
              ]}
              onPress={() => setSelectedOption('Flight')}>
              <Image
                source={
                  selectedOption === 'Flight'
                    ? image.flightIcon
                    : image.flightIcong
                }
                style={{width: 45, height: 45, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: selectedOption === 'Flight' ? '#fff' : 'green',
                }}>
                Flight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.singleContainer,
                {
                  backgroundColor:
                    selectedOption === 'Hotel' ? 'green' : '#fff',
                  borderColor: 'green',
                },
              ]}
              onPress={() => setSelectedOption('Hotel')}>
              <Image
                source={
                  selectedOption === 'Hotel'
                    ? image.hotelicon
                    : image.hotelicong
                }
                style={{width: 45, height: 45, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: selectedOption === 'Hotel' ? '#fff' : '#000',
                }}>
                Hotel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 35}}>
            <View style={styles.iconContainer}>
              <View>
                <Text style={styles.titleFont}>To</Text>
              </View>
              <IconTextInput placeholder="India" iconName={image.takeoff} />
            </View>
            <View style={[styles.iconContainer, {marginTop: 14}]}>
              <View>
                <Text style={styles.titleFont}>From</Text>
              </View>
              <IconTextInput placeholder="UAE" iconName={image.landing} />
            </View>
            <View style={{marginTop: SIZES.width * 0.037}}>
              <View>
                <Text style={styles.titleFont}>Departure Date</Text>
              </View>
              <TouchableOpacity
                style={styles.boxContainer}
                activeOpacity={0.8}
                onPress={() => openBottomSheet('departure')}>
                <View style={{width: '13%', alignItems: 'center'}}>
                  <Image
                    source={image.calendars}
                    style={{
                      width: SIZES.width * 0.06,
                      height: SIZES.width * 0.06,
                    }}
                  />
                </View>
                <View style={{width: '87%'}}>
                  <Text
                    style={{
                      color: '#000',
                      paddingLeft: SIZES.width * 0.013,
                      fontSize: SIZES.body4,
                    }}>
                    {initial ? initial : `Select Date`}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: SIZES.width * 0.037}}>
              <View>
                <Text style={styles.titleFont}>Returning Date</Text>
              </View>
              <TouchableOpacity
                style={styles.boxContainer}
                activeOpacity={0.8}
                onPress={() => openBottomSheet('returning')}>
                <View style={{width: '13%', alignItems: 'center'}}>
                  <Image
                    source={image.calendars}
                    style={{
                      width: SIZES.width * 0.06,
                      height: SIZES.width * 0.06,
                    }}
                  />
                </View>
                <View style={{width: '87%'}}>
                  <Text
                    style={{
                      color: '#000',
                      paddingLeft: SIZES.width * 0.013,
                      fontSize: SIZES.body4,
                    }}>
                    {returning ? returning : `Select Date`}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.iconContainer,
                {marginTop: SIZES.h1, marginBottom: SIZES.body6},
              ]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNavigation()}>
                <Text style={[styles.buttonText, {color: '#fff'}]}>
                  {selectedOption === 'Hotel' ? 'View Hotels' : 'View Flights'}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <BannerComponent />
            </View>
          </View>
          <RBSheet
            ref={ref => {
              RBSheetRef = ref;
            }}
            height={SIZES.width * 1.5}
            openDuration={250}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.40)',
              },
              container: {
                borderTopLeftRadius: SIZES.width * 0.05,
                borderTopRightRadius: SIZES.width * 0.05,
              },
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                padding: SIZES.width * 0.061,
                paddingTop: SIZES.largeTitle,
              }}>
              <Text style={{...theme.FONTS.h1, color: '#000'}}>
                Select Date
              </Text>
              <Text style={{...theme.FONTS.body1}}>
                {formatSelectedDate(selected)}
              </Text>
              <Calendar
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'white',
                  },
                }}
                theme={{
                  selectedDayBackgroundColor: 'green',
                  todayTextColor: 'green',
                  arrowColor: 'green',
                  textDisabledColor: '#d9e',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: SIZES.width * 0.037,
                  left: 0,
                  right: 0,
                  marginHorizontal: SIZES.width * 0.06,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={confirmButtonPressed}>
                  <View>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlightAndHotelScreen;

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
  singleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderWidth: 1,
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
  title: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    top: 140,
    left: 25,
    fontWeight: '700',
  },
  iconContainer: {
    marginTop: 35,
  },
  titleFont: {
    fontSize: SIZES.body5,
    color: '#000',
    fontWeight: '400',
  },
  upperContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: -55,
  },
  titleHeader: {
    fontSize: 24,
    marginHorizontal: 35,
    marginTop: 25,
    color: '#327113',
    fontWeight: '600',
    paddingBottom: 15,
  },
  // Styling for tag container and items
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  tag: {
    backgroundColor: '#fff',
    borderColor: '#e4ede0',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  tagText: {
    fontSize: 16,
    color: '#333',
  },
  border: {
    borderWidth: 0.7,
    marginHorizontal: 35,
    marginTop: 25,
  },
  boxContainer: {
    marginTop: SIZES.body6,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    height: SIZES.extralarge,
    paddingLeft: SIZES.width * 0.01,
  },
  button: {
    backgroundColor: 'green',
    padding: SIZES.body6,
    borderRadius: 8,
    alignItems: 'center',
    height: SIZES.extralarge,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
