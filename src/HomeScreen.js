import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ProfileHeader from '../component/ProfileHeader';
import VisaComponent from '../component/VisaComponent';
import BannerComponent from '../component/BannerComponent';
import PackageComponent from '../component/PackageComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <ProfileHeader />
          <VisaComponent />
          <BannerComponent />
          <PackageComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
});
