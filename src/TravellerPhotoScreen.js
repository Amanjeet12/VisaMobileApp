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
  Modal,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import BackArrow from '../component/BackArrow';
import ImageBox from '../component/ImageBox';
import LottieView from 'lottie-react-native';
import {SIZES, image} from '../constant';

const TravellerPhotoScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToNextPage = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate('BottomSheetScreen');
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(navigateToNextPage, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalVisible]);

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
          <BackArrow placeholder={'Add Traveller Photo'} />
        </View>
        <View>
          <ImageBox
            placeholder={
              'Upload your passport front pic and\nwe’ll fetch all necessary data.'
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => toggleModal()}
          style={[styles.button, {marginTop: 20}]}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <LottieView
                  source={image.complete}
                  autoPlay
                  loop
                  style={{width: SIZES.width * 0.3, height: SIZES.width * 0.5}}
                />
              </View>
              <Text
                style={{...theme.FONTS.h2, color: '#27214D', marginTop: 20}}>
                Congratulations !!!
              </Text>
              <Text style={{...theme.FONTS.body1, color: '#000'}}>
                Your account has been successfully created
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravellerPhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalView: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
