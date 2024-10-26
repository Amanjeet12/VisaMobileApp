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
import IconTextInput from '../../component/IconTextInput';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useDarkTheme} from '../../constant/ThemeContext';
import ButtonBox from '../../component/ButtonBox';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import BannerComponent from '../../component/BannerComponent';

const popularSearches = [
  'UAE',
  'Dubai',
  'Canada',
  'Canada',
  'Singapore',
  'Thailand',
  'Canada',
];

const InsuranceScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const navigation = useNavigation();
  let RBSheetRef = null;
  const [initial, setInitial] = useState('');
  const [returning, setReturning] = useState('');
  const [activeInput, setActiveInput] = useState(''); // 'departure' or 'returning'
  const [selected, setSelected] = useState(
    new Date().toISOString().split('T')[0],
  );

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={image.visa3} style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name={'chevron-small-left'} size={35} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Travel Insurance</Text>
        <View style={styles.upperContainer}>
          <Text style={styles.titleHeader}>Popular Searches</Text>

          <View style={styles.tagContainer}>
            {popularSearches.map((item, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.border} />
          <View style={{marginHorizontal: 35}}>
            <View style={styles.iconContainer}>
              <View>
                <Text style={styles.titleFont}>To</Text>
              </View>
              <IconTextInput
                placeholder="United Arab Emirates"
                iconName={image.landing}
                editable={false}
              />
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
              <ButtonBox
                placeholder={'View Insurance'}
                specific={'InsurancePlans'}
              />
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

export default InsuranceScreen;

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
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
  titleHeader: {
    fontSize: 24,
    marginHorizontal: 35,
    marginTop: 25,
    color: '#327113',
    fontWeight: '600',
    paddingBottom: 25,
    borderBottomWidth: 1,
  },
  // Styling for tag container and items
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    flexWrap: 'wrap',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: SIZES.width * 0.044,
  },
});
