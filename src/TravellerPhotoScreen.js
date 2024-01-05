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
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
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
          style={[styles.button, {marginTop: SIZES.width * 0.05}]}>
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
                style={{
                  ...theme.FONTS.h2,
                  color: '#27214D',
                  marginTop: SIZES.width * 0.05,
                }}>
                Congratulations !!!
              </Text>
              <Text
                style={{
                  ...theme.FONTS.body1,
                  color: '#000',
                  textAlign: 'center',
                }}>
                Your account has been successfully created
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
      {console.log('cc', SIZES.width * 0.135)}
    </SafeAreaView>
  );
};

export default TravellerPhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: SIZES.extralarge,
  },
  button: {
    backgroundColor: 'green',
    padding: SIZES.body6,
    borderRadius: 8,
    alignItems: 'center',
    height: SIZES.width * 0.135,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SIZES.width * 0.047,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: SIZES.width * 0.05,
  },
  modalView: {
    width: '100%',
    height: SIZES.width * 0.974,
    backgroundColor: '#fff',
    borderRadius: SIZES.width * 0.05,
    padding: SIZES.width * 0.075,
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
