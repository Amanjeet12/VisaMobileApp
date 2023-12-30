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
import {image} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/Entypo';

const SettingScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />
      <View style={styles.profileContainer}>
        <View style={{marginTop: 20}}>
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
            <Text style={{...theme.FONTS.h2, color: '#fff'}}>Jos Creative</Text>
            <Text style={{...theme.FONTS.body1, color: '#fff', marginTop: -5}}>
              josphamdes@gmail.com
            </Text>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="edit" size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.whiteContainer}>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.password}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{...theme.FONTS.body1, color: '#000', paddingLeft: 15}}>
                Reset Password
              </Text>
            </View>
            <View>
              <Arrow name="chevron-right" size={24} color={'#ccc'} />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{...theme.FONTS.body1, color: '#000', paddingLeft: 15}}>
                Contact Support
              </Text>
            </View>
            <View>
              <Arrow name="chevron-right" size={24} color={'#ccc'} />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{...theme.FONTS.body1, color: '#000', paddingLeft: 15}}>
                Privacy Policy
              </Text>
            </View>
            <View>
              <Arrow name="chevron-right" size={24} color={'#ccc'} />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.profile}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{...theme.FONTS.body1, color: '#000', paddingLeft: 15}}>
                Terms & Conditions
              </Text>
            </View>
            <View>
              <Arrow name="chevron-right" size={24} color={'#ccc'} />
            </View>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.logout}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{...theme.FONTS.body1, color: '#000', paddingLeft: 15}}>
                Logout
              </Text>
            </View>
            <View>
              <Arrow name="chevron-right" size={24} color={'#ccc'} />
            </View>
          </TouchableOpacity>
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
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    padding: 20,
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
    height: 100,
    marginTop: 30,
  },
  image: {
    width: '80%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 60,
  },
  textContainer: {
    width: '60%',
    height: '100%',
    padding: 10,
  },
  iconContainer: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 15,
  },
  whiteContainer: {
    height: '60%',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
  },
  border: {
    width: '100%',
    height: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
