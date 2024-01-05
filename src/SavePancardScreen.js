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
import {SIZES} from '../constant';

const SavePancardScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={theme.background} barStyle={'dark-content'} />
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
        <View style={{marginTop: SIZES.width * 0.05}}>
          <Text style={{...theme.FONTS.h4, color: '#000'}}>
            Pancard Details
          </Text>
        </View>
        <View style={{marginTop: 0}}>
          <CommonTextInput title={'Name'} placeholder={'Enter Your Name'} />
        </View>
        <View>
          <CommonTextInput title={'Pancard no'} placeholder={'Enter pan no'} />
        </View>
        <View style={{marginTop: SIZES.width * 0.05}}>
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
    paddingHorizontal: SIZES.width * 0.05,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: SIZES.extralarge,
  },
});
