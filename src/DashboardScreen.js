import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {SIZES, image} from '../constant';
import IconTextInput from '../component/IconTextInput';
import ButtonBox from '../component/ButtonBox';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DashboardScreen = ({navigation}) => {
  console.log(SIZES.height);
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  let RBSheetRef = null;
  const [selected, setSelected] = useState(
    new Date().toISOString().split('T')[0],
  );

  const calculatePadding = () => {
    // Set specific padding values based on screen height
    if (SIZES.height <= 700) {
      return SIZES.height * 0.8;
    } else if (SIZES.height > 700 && SIZES.height <= 800) {
      return SIZES.height * 0.78;
    } else {
      return SIZES.height * 0.68;
    }
  };

  const [initial, setInitial] = useState('');
  const [returning, setReturning] = useState('');
  const [activeInput, setActiveInput] = useState(''); // 'departure' or 'returning'

  const openBottomSheet = inputType => {
    if (RBSheetRef) {
      setActiveInput(inputType);

      RBSheetRef.open();
    }
  };

  const formatSelectedDate = dateString => {
    const dateObject = new Date(dateString);
    const month = dateObject.toLocaleString('default', {month: 'short'});
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${month} ${day}, ${year}`;
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={image.map}
              style={styles.image}
              imageStyle={{resizeMode: 'contain'}}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Discover{'\n'}a new world</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  left: '25%',
                }}>
                <Image source={image.logo} style={styles.logoImage} />
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.whiteContainer, {height: calculatePadding()}]}>
            <View>
              <View style={[styles.iconContainer, {marginTop: 20}]}>
                <View>
                  <Text style={styles.titleFont}>From</Text>
                </View>
                <IconTextInput
                  placeholder="Enter your location"
                  iconName={image.takeoff}
                />
              </View>
              {/* <View
                style={{
                  position: 'absolute',
                  bottom: 57,
                  right: 10,
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  zIndex: 999,
                }}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Image
                      source={image.converter}
                      style={{width: 25, height: 25, resizeMode: 'contain'}}
                    />
                  </View>
                </TouchableOpacity>
              </View> */}

              <View style={styles.iconContainer}>
                <View>
                  <Text style={styles.titleFont}>To</Text>
                </View>
                <IconTextInput
                  placeholder="Enter your Destination"
                  iconName={image.landing}
                />
              </View>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <Text style={styles.titleFont}>Departure Date</Text>
              </View>
              <TouchableOpacity
                style={styles.boxContainer}
                activeOpacity={0.8}
                onPress={() => openBottomSheet('departure')}>
                <View style={{width: '10%'}}>
                  <Image
                    source={image.calendars}
                    style={{width: 24, height: 24}}
                  />
                </View>
                <View style={{width: '90%'}}>
                  <Text style={{color: '#000'}}>
                    {initial ? initial : `Select Date`}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <Text style={styles.titleFont}>Returning Date</Text>
              </View>
              <TouchableOpacity
                style={styles.boxContainer}
                activeOpacity={0.8}
                onPress={() => openBottomSheet('returning')}>
                <View style={{width: '10%'}}>
                  <Image
                    source={image.calendars}
                    style={{width: 24, height: 24}}
                  />
                </View>
                <View style={{width: '90%'}}>
                  <Text style={{color: '#000'}}>
                    {returning ? returning : `Select Date`}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={[styles.iconContainer, {marginTop: 30, marginBottom: 10}]}>
              <ButtonBox placeholder={'Search Visas'} specific={'SearchVisa'} />
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
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#fff',
                  padding: 25,
                  paddingTop: 40,
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
                    bottom: 15,
                    left: 0,
                    right: 0,
                    marginHorizontal: 24,
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327113',
  },
  imageContainer: {
    height: SIZES.height * 0.32,
    backgroundColor: '#327113',
    opacity: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 3,
  },
  textContainer: {
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 40,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 30,
  },
  iconContainer: {
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  titleFont: {
    fontSize: 14,
    color: '#22313F',
    fontWeight: '400',
  },
  boxContainer: {
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    height: 50,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default DashboardScreen;
