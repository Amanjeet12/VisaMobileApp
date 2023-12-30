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

const TransactionScreen = ({navigation}) => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  // State to keep track of the selected button
  const [selectedButton, setSelectedButton] = useState('Issued');

  // Function to handle button clicks and update the selected button
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
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
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
                }}>
                {buttonName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView>
          <View style={{marginBottom: 200}}>
            {data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{marginTop: 10, marginBottom: 10}}
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
    paddingHorizontal: 20,
  },
  Header: {
    marginTop: 10,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 45,
    paddingBottom: 15,
  },
  buttonContainer: {
    height: 45,
    borderRadius: 32,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
