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

const SaveUploadPassportScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={theme.background} barStyle={'dark-content'} />
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
        <View>
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
        <View style={{marginTop: 20}}>
          <ButtonBox placeholder={'Next'} specific={'SavePancardScreen'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SaveUploadPassportScreen;

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
