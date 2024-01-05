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
import Transaction from '../component/Transaction';
import {SIZES} from '../constant';

const TransactionScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();
  const [selectedButton, setSelectedButton] = useState('Issued');
  const handleButtonClick = buttonName => {
    setSelectedButton(buttonName);
  };
  const data = [
    {
      id: 1,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 2,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 3,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 4,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
    {
      id: 5,
      from: 'india',
      to: 'UAE',
      price: '$100',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />

      <View style={styles.mainContainer}>
        <View style={styles.Header}>
          <Text style={styles.textTitle}>Transactions</Text>
        </View>
        <View style={styles.flexContainer}>
          {['Issued', 'In-Process', 'Rejected'].map(buttonName => (
            <TouchableOpacity
              key={buttonName}
              style={[
                styles.buttonContainer,
                {
                  backgroundColor:
                    selectedButton === buttonName ? '#327113' : 'white',
                  borderColor:
                    selectedButton === buttonName ? '#327113' : '#327113',
                },
              ]}
              onPress={() => handleButtonClick(buttonName)}>
              <Text
                style={{
                  color: selectedButton === buttonName ? 'white' : '#327113',
                  fontSize: SIZES.width * 0.04,
                }}>
                {buttonName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView>
          <View style={{marginBottom: SIZES.width * 0.5}}>
            {data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{marginTop: SIZES.body6, marginBottom: SIZES.body6}}
                onPress={() => navigation.navigate('DetailTransaction')}>
                <Transaction />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.05,
  },
  Header: {
    marginTop: SIZES.body6,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: SIZES.h3,
    color: '#000',
    fontWeight: '500',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: SIZES.width * 0.05,
    height: SIZES.width * 0.11,
    paddingBottom: 15,
  },
  buttonContainer: {
    height: SIZES.width * 0.11,
    borderRadius: 32,
    borderWidth: 1,
    width: SIZES.width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
