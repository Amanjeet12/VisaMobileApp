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

const UploadPassportBackScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Your Passport Back'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload your passport front pic and\nwe’ll fetch all necessary data.'
            }
          />
        </View>
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{...theme.FONTS.h4, color: '#000'}}>
            Passport Back Details
          </Text>
        </View>
        <View style={{marginTop: 0}}>
          <CommonTextInput
            title={"Father's name"}
            placeholder={'Enter Father name'}
          />
        </View>
        <View>
          <CommonTextInput
            title={"Mother's name"}
            placeholder={'Enter Mother no'}
          />
        </View>
        <View style={{marginTop: SIZES.width * 0.05}}>
          <ButtonBox placeholder={'Next'} specific={'PancardScreen'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadPassportBackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
    backgroundColor: '#fff',
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: SIZES.extralarge,
  },
});
