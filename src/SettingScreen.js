import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {SIZES, image} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/Entypo';

const SettingScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <View style={styles.profileContainer}>
        <View style={{marginTop: SIZES.width * 0.04}}>
          <Text style={{...theme.FONTS.h2, color: '#fff', fontWeight: '500'}}>
            My Profile
          </Text>
        </View>
        <View style={styles.flexBox}>
          <View style={{width: '30%', height: '100%'}}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={image.image} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={{...theme.FONTS.h3, color: '#fff'}}>Jos Creative</Text>
            <Text style={{...theme.FONTS.body1, color: '#fff', marginTop: -5}}>
              josphamdes@gmail.com
            </Text>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="edit" size={SIZES.width * 0.06} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.whiteContainer}>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.password}
                style={{
                  width: SIZES.width * 0.061,
                  height: SIZES.width * 0.061,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  paddingLeft: SIZES.body4,
                }}>
                Reset Password
              </Text>
            </View>
            <View>
              <Arrow
                name="chevron-right"
                size={SIZES.width * 0.06}
                color={'#ccc'}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{
                  width: SIZES.width * 0.061,
                  height: SIZES.width * 0.061,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  paddingLeft: SIZES.body4,
                }}>
                Contact Support
              </Text>
            </View>
            <View>
              <Arrow
                name="chevron-right"
                size={SIZES.width * 0.06}
                color={'#ccc'}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{
                  width: SIZES.width * 0.061,
                  height: SIZES.width * 0.061,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  paddingLeft: SIZES.body4,
                }}>
                Privacy Policy
              </Text>
            </View>
            <View>
              <Arrow
                name="chevron-right"
                size={SIZES.width * 0.06}
                color={'#ccc'}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{
                  width: SIZES.width * 0.061,
                  height: SIZES.width * 0.061,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  paddingLeft: SIZES.body4,
                }}>
                Terms & Conditions
              </Text>
            </View>
            <View>
              <Arrow
                name="chevron-right"
                size={SIZES.width * 0.06}
                color={'#ccc'}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.logout}
                style={{
                  width: SIZES.width * 0.061,
                  height: SIZES.width * 0.061,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  paddingLeft: SIZES.body4,
                }}>
                Logout
              </Text>
            </View>
            <View>
              <Arrow
                name="chevron-right"
                size={SIZES.width * 0.064}
                color={'#ccc'}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              bottom: -SIZES.width * 0.18,
              left: SIZES.width * 0.3,
            }}>
            <Text
              style={{
                color: 'rgba(0, 0, 0, 0.50)',
                fontSize: SIZES.width * 0.043,
              }}>
              Version 1.0
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    height: '32%',
    width: '100%',
    backgroundColor: '#327113',
    borderBottomLeftRadius: SIZES.width * 0.09,
    borderBottomRightRadius: SIZES.width * 0.09,
    padding: SIZES.width * 0.05,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: SIZES.width * 0.25,
    marginTop: SIZES.width * 0.079,
  },
  image: {
    width: SIZES.width * 0.195,
    height: SIZES.width * 0.195,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  textContainer: {
    width: '60%',
    height: '100%',
    padding: SIZES.body6,
  },
  iconContainer: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    paddingTop: SIZES.body2,
  },
  whiteContainer: {
    height: '60%',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: SIZES.body4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: SIZES.width * 0.135,
    alignItems: 'center',
  },
  border: {
    width: '100%',
    height: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
