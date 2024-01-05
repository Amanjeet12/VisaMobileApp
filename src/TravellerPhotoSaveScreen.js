/* eslint-disable react-hooks/exhaustive-deps */
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
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import BackArrow from '../component/BackArrow';
import ImageBox from '../component/ImageBox';
import ButtonBox from '../component/ButtonBox';
import {SIZES} from '../constant';

const TravellerPhotoSaveScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={theme.background} barStyle={'dark-content'} />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <BackArrow placeholder={'Add Traveller Photo'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload your passport front pic and\nwe’ll fetch all necessary data.'
            }
          />
        </View>
        <View style={{marginTop: SIZES.width * 0.05}}>
          <ButtonBox placeholder={'Next'} specific={'DetailScreen'} />
        </View>
      </ScrollView>
      {console.log(SIZES.width * 0.0853)}
    </SafeAreaView>
  );
};

export default TravellerPhotoSaveScreen;

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
