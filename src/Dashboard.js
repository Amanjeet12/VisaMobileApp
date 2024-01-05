/* eslint-disable react-native/no-inline-styles */
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
import React, {useEffect, useState} from 'react';
import {SIZES, image} from '../constant';
import IconTextInput from '../component/IconTextInput';
import ButtonBox from '../component/ButtonBox';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDarkTheme} from '../constant/ThemeContext';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const Dashboard = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  let RBSheetRef = null;
  const [selected, setSelected] = useState(
    new Date().toISOString().split('T')[0],
  );

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
      <ScrollView style={{flex: 1, marginBottom: SIZES.width * 0.183}}>
        <>
          <View
            style={{
              flex: 0.3,
            }}>
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
            <View
              style={{
                position: 'absolute',
                height: 60,
                width: '100%',
                backgroundColor: '#327113',
                bottom: -40,
                zIndex: 0, // Remove this line or set it to a value >= 0
              }}
            />
          </View>

          <View
            style={[
              styles.whiteContainer,
              {
                flex: 0.7,
                backgroundColor: '#fff',
                paddingBottom: 0,
                position: 'relative',
                zIndex: 1, // Remove this line or set it to a value >= 0
              },
            ]}>
            <View
              style={[styles.iconContainer, {marginTop: SIZES.width * 0.05}]}>
              <View>
                <Text style={styles.titleFont}>From</Text>
              </View>
              <IconTextInput
                placeholder="Enter your location"
                iconName={image.takeoff}
              />
            </View>
            <View style={styles.iconContainer}>
              <View>
                <Text style={styles.titleFont}>To</Text>
              </View>
              <IconTextInput
                placeholder="Enter your Destination"
                iconName={image.landing}
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
                <Text style={{...theme.FONTS.h4, color: '#000'}}>
                  Select Date
                </Text>
                <Text style={{...theme.FONTS.body1, color: '#808080'}}>
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
                    textDisabledColor: '#000',
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
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingHorizontal: SIZES.h1,
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: SIZES.h1,
  },
  title: {
    fontSize: SIZES.width * 0.086,
    color: '#fff',
    fontWeight: '700',
    lineHeight: SIZES.largeTitle,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    borderTopStartRadius: SIZES.h1,
    borderTopEndRadius: SIZES.h1,
    paddingHorizontal: SIZES.h1,
  },
  iconContainer: {
    marginTop: SIZES.body6,
  },
  scrollContainer: {
    flex: 1,
  },
  titleFont: {
    fontSize: SIZES.body5,
    color: '#22313F',
    fontWeight: '400',
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
  logoImage: {
    width: SIZES.width * 0.49,
    height: SIZES.width * 0.25,
    resizeMode: 'contain',
  },
});
