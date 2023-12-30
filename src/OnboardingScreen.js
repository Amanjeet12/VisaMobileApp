/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {SIZES, image} from '../constant';

const slides = [
  {
    id: '1',
    image: image.onboarding1,
    title: 'Explore\nThe Beautiful\nWorld',
  },
  {
    id: '2',
    image: image.onboarding2,
    title: 'Find\nYour Perfect\nVisa',
  },
  {
    id: '3',
    image: image.onboarding3,
    title: 'Book\nVisa\nin Easiest Way',
  },
];

const OnboardingScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    console.log(contentOffsetX);
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    console.log(currentIndex);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * SIZES.width;
      console.log('offset', offset);
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * SIZES.width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Slide = ({item}) => {
    return (
      <View
        style={{
          width: SIZES.width,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
          }}>
          <Image
            source={item?.image}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'stretch',
              borderRadius: 21,
            }}
          />
        </View>
      </View>
    );
  };

  const Middle = ({theme}) => {
    return (
      <View
        style={{
          height: SIZES.height * 0.28,
          width: SIZES.width,
          paddingHorizontal: 20,
          // backgroundColor: '#000',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: '10%',
            alignItems: 'center',
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#327113',
                  width: 60,
                },
              ]}
            />
          ))}
        </View>
        <View style={{flexDirection: 'row'}}>
          {slides.map((item, index) => (
            <View
              key={index}
              style={{height: '100%', justifyContent: 'center'}}>
              {currentSlideIndex === index && (
                <Text style={{...theme.FONTS.h1, color: '#000'}}>
                  {item.title}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.1,
          width: SIZES.width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{marginBottom: 30, marginTop: 10}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: SIZES.extralarge}}>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: theme.primary}]}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    ...theme.FONTS.h5,
                    color: theme.background,
                  }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: theme.primary,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    ...theme.FONTS.h5,
                    color: theme.secondary,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={[styles.btn, {backgroundColor: theme.primary}]}>
                <Text
                  style={{
                    ...theme.FONTS.h5,
                    color: theme.background,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          height: SIZES.height * 0.6,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Middle theme={theme} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Add any additional styles for your text here
  },
  indicator: {
    height: 6,
    width: SIZES.h3,
    backgroundColor: '#E1F0ED',
    marginHorizontal: 3,
    borderRadius: 16,
  },
  btn: {
    flex: 1,
    height: SIZES.extralarge,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px rgba(86, 86, 86, 0.2)',
  },
});

export default OnboardingScreen;
