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
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../constant/ThemeContext';
import {SIZES, image} from '../constant';
import BackArrow from '../component/BackArrow';
import ButtonBox from '../component/ButtonBox';
import UserDetails from '../component/UserDetails';
import Icon from 'react-native-vector-icons/AntDesign';
import CheckIcon from 'react-native-vector-icons/Entypo';
import Pluscircle from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from './redux/ProfileSlice';
import UserDetailEdit from '../component/UserDetailEdit';

const DetailScreen = ({navigation, route}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [selectedUser, setSelectedUser] = useState([]);
  const [savedUser, setSavedUser] = useState([]);
  const {isloading, isSuccess, isError, userSelectedData} = useSelector(
    state => state.fetchVisa,
  );
  const {data} = useSelector(state => state.loginVerify);
  const dispatch = useDispatch();
  const passportDataList = useSelector(state => state.address.passportData);
  
  useEffect(() => {
    fetchSavedAddress();
  }, []);

  const fetchSavedAddress = async () => {
    var params = {
      user_email_id: data?.user_data?.user_email_id,
    };
    const resultAction = await dispatch(fetchProfile(params));
    setSavedUser([resultAction.payload.data]);
  };

  const handleUserSelect = userId => {
    console.log("====>", userId)
    if (selectedUser.includes(userId)) {
      setSelectedUser(selectedUser.filter(id => id !== userId));
    } else {
      setSelectedUser([...selectedUser, userId]);
    }
  };

  const totalPrice = selectedUser.length * userSelectedData?.visa_price_b2c;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <BackArrow placeholder={''} />
        <ScrollView showsVerticalScrollIndicator={false}>
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
              {savedUser.map(item => (
                <View
                  key={item._id}
                  style={{marginBottom: SIZES.body6}}
                  onPress={() => console.log('index')}>
                  <UserDetails data={item} onSelect={handleUserSelect} />
                </View>
              ))}
            </View>
            <View>
              {passportDataList.map((item, index) => (
                <View
                  key={index}
                  style={{marginBottom: SIZES.body6}}
                  onPress={() => console.log('index')}>
                  <UserDetailEdit data={item} onSelect={handleUserSelect} />
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
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.flexBox}>
          <View>
            <Text style={{fontSize: SIZES.body5, color: '#808080'}}>
              Subtotal
            </Text>
            <Text style={{...theme.FONTS.h3, color: '#000'}}>
              ₹ {totalPrice}
            </Text>
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
    borderWidth: 1,
    borderColor: '#dadada',
    justifyContent: 'center',
    padding: SIZES.body6,
  },
  protection: {
    width: '100%',
    height: SIZES.width * 0.535,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#dadada',
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
