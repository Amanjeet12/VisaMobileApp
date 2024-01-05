/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
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
import {SIZES, image} from '../constant';
import BackArrow from '../component/BackArrow';
import ButtonBox from '../component/ButtonBox';
import UserDetails from '../component/UserDetails';
import Icon from 'react-native-vector-icons/AntDesign';
import CheckIcon from 'react-native-vector-icons/Entypo';
import Pluscircle from 'react-native-vector-icons/AntDesign';

const DetailScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };

  const data = [
    {
      id: 1,
      name: 'Vikrant singh',
    },
    {
      id: 2,
      name: 'Amanjeet Singh',
    },
  ];

  const handleUserSelect = userId => {
    setSelectedUser(userId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <BackArrow placeholder={''} />
        <ScrollView>
          <View>
            <Text style={{...theme.FONTS.h4, color: '#000'}}>
              Complete Details
            </Text>
            <View style={{marginTop: SIZES.body6}}>
              <Text style={{...theme.FONTS.body1, color: '#000'}}>
                Saved Details
              </Text>
            </View>
            <View>
              {data.map(item => (
                <View
                  key={item.id}
                  style={{marginBottom: SIZES.body6}}
                  onPress={() => console.log('index')}>
                  <UserDetails data={item} onSelect={handleUserSelect} />
                </View>
              ))}
            </View>

            <View>
              <Text style={{...theme.FONTS.body1, color: '#000'}}>
                Add Traveler
              </Text>
              <TouchableOpacity
                style={[
                  styles.selectedUser,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => navigation.navigate('NewUploadPassportScreen')}>
                <Text
                  style={{
                    fontSize: SIZES.width * 0.035,
                    color: 'rgba(37, 40, 49, 0.50))',
                  }}>
                  Create New Coustomer
                </Text>
                <Icon name="plus" size={SIZES.width * 0.061} color={'#000'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginBottom: SIZES.width * 0.366,
                marginTop: SIZES.body6,
              }}>
              <Text style={{...theme.FONTS.body1, color: '#000'}}>
                Extra Protection
              </Text>
              <View style={styles.protection}>
                <View style={styles.flex}>
                  <View style={styles.flex}>
                    <Image
                      source={image.verified}
                      style={{
                        width: SIZES.h1,
                        height: SIZES.h1,
                        resizeMode: 'contain',
                        marginRight: SIZES.width * 0.013,
                      }}
                    />
                    <Text style={{color: '#000', fontSize: SIZES.body4}}>
                      Travel Insurance
                    </Text>
                  </View>
                  <View>
                    <Text style={{...theme.FONTS.h3, color: '#000'}}>$100</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.flex,
                    {
                      justifyContent: 'flex-start',
                      marginTop: SIZES.width * 0.05,
                    },
                  ]}>
                  <CheckIcon
                    name="check"
                    size={SIZES.width * 0.037}
                    color={'blue'}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.body6,
                      color: 'rgba(37, 40, 49, 0.50))',
                      fontSize: SIZES.width * 0.03,
                    }}>
                    Coverage for Accidents up to ₹10000
                  </Text>
                </View>
                <View
                  style={[
                    styles.flex,
                    {
                      justifyContent: 'flex-start',
                      marginTop: SIZES.width * 0.013,
                    },
                  ]}>
                  <CheckIcon
                    name="check"
                    size={SIZES.width * 0.037}
                    color={'blue'}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.body6,
                      color: 'rgba(37, 40, 49, 0.50))',
                      fontSize: SIZES.width * 0.03,
                    }}>
                    Coverage for Accidents up to ₹10000
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.ButtonBox,
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isClicked ? '#327113' : '#F2F3F6',
                    },
                  ]}
                  onPress={handlePress}>
                  <Pluscircle
                    name="pluscircle"
                    size={SIZES.width * 0.058}
                    color={isClicked ? '#fff' : '#327113'}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.body6,
                      color: isClicked ? '#fff' : '#327113',
                      fontFamily: 'Inter-Medium',
                      fontSize: SIZES.width * 0.04,
                    }}>
                    {isClicked ? 'Insurance Added' : 'Add Insurance'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.flexBox}>
          <View>
            <Text style={{fontSize: SIZES.body5, color: '#808080'}}>
              Subtotal
            </Text>
            <Text style={{...theme.FONTS.h3, color: '#000'}}>$100</Text>
          </View>
          <View>
            <ButtonBox
              placeholder={'Proceed To Payment'}
              icon={image.check}
              specific={'CompleteScreen'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.06,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    height: SIZES.width * 0.195,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3, // Adjust the height to control the shadow direction
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6, // For Android
    borderTopColor: '#CCC',
    borderTopWidth: 0.5,
    justifyContent: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.06,
  },
  selectedUser: {
    width: '100%',
    height: SIZES.width * 0.134,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    justifyContent: 'center',
    padding: SIZES.body6,
  },
  protection: {
    width: '100%',
    height: SIZES.width * 0.535,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(13, 22, 52, 0.05)',
    padding: SIZES.width * 0.05,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ButtonBox: {
    height: SIZES.width * 0.146,
    width: '100%',
    backgroundColor: '#F2F3F6',
    marginTop: SIZES.width * 0.034,
    borderRadius: 8,
  },
});
