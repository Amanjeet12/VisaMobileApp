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
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {SIZES, image} from '../constant';
import BackArrowWhite from '../component/BackArrowWhite';
import VisaContainer from '../component/VisaContainer';

const SearchVisa = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [scaleAnimation] = useState(new Animated.Value(1));

  const data = [
    {
      id: 1,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 2,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 3,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 4,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
  ];

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1.2,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [scaleAnimation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            position: 'absolute',
            top: SIZES.body6,
            width: '100%',
            height: '100%',
          }}>
          <Animated.Image
            source={image.map}
            style={{
              width: '100%',
              height: '60%',
              resizeMode: 'cover',
              transform: [{scale: scaleAnimation}],
            }}
          />
        </View>

        <ScrollView>
          <View>
            <View style={{marginHorizontal: SIZES.width * 0.061}}>
              <BackArrowWhite placeholder={'Select Visa'} />
            </View>
            {data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  marginHorizontal: SIZES.width * 0.061,
                  marginTop: SIZES.body6,
                  marginBottom: SIZES.body6,
                }}
                onPress={() => navigation.navigate('DetailScreen')}>
                <VisaContainer data={[item]} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchVisa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327113',
  },
});
