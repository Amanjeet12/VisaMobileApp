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
import {useDarkTheme} from '../constant/ThemeContext';
import BackArrow from '../component/BackArrow';
import ImageBox from '../component/ImageBox';
import CommonTextInput from '../component/CommonTextInput';
import ButtonBox from '../component/ButtonBox';

const SavePancardScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Traveller Pancard'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload your passport front pic and\nwe’ll fetch all necessary data.'
            }
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{...theme.FONTS.h2, color: '#000'}}>
            Pancard Details
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <CommonTextInput title={'Name'} placeholder={'Enter Your Name'} />
        </View>
        <View>
          <CommonTextInput title={'Pancard no'} placeholder={'Enter pan no'} />
        </View>
        <View style={{marginTop: 20}}>
          <ButtonBox
            placeholder={'Next'}
            specific={'TravellerPhotoSaveScreen'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavePancardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});
