import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import VisaCard from '../component/VisaCard';
import VIsaInstruction from '../component/VIsaInstruction';
import FaqSection from '../component/FaqSection';
import {useDispatch} from 'react-redux';
import {fetchVisa} from './redux/VisaSlice';

const DetailVisaScreen = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const [visaDetails, setVisaDetails] = useState(null);  // State to hold fetched visa data

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    handleVisaFetch();
  }, []);

  const handleVisaFetch = async () => {
    const params = {
      country_code: 'AE',
      nationality_code: 'IN',
    };

    const resultAction = await dispatch(fetchVisa(params));
    if (fetchVisa.fulfilled.match(resultAction)) {
      setVisaDetails(resultAction.payload.data);
    } else {
      console.error('Error fetching visa details');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.mainContainer}>
          <View style={{marginTop: 25}}>
            <Image source={item.image} style={styles.banner} />
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}>
              <Icon name={'chevron-small-left'} size={35} color={'#000'} />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.title}>
              {item.title}
              <Text style={[styles.title, {fontWeight: '400'}]}>
                {' '}
                - {item.type}
              </Text>
            </Text>
          </View>
          <View>
            {/* Pass visaDetails as props to VisaCard */}
            {visaDetails && <VisaCard visaDetails={visaDetails} />}
          </View>
          <View>
            <VIsaInstruction />
          </View>
          <View>
            <FaqSection />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailVisaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  mainContainer: {
    paddingHorizontal: 25,
  },
  banner: {
    width: '100%',
    height: 255,
    resizeMode: 'cover',
    borderRadius: 25,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    left: 15,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});
