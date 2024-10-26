import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SIZES, image} from '../constant';
import {useNavigation} from '@react-navigation/native';

const VisaCard = ({item, type}) => {
  const navigation = useNavigation();
  console.log('type', type);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.visaCard}
        style={{height: '100%', width: '100%'}}
        imageStyle={{resizeMode: 'stretch'}}>
        <View
          style={{
            padding: 15,
            paddingHorizontal: 24,
            height: '100%',
          }}>
          <View style={styles.flexbox}>
            <View>
              <Text style={styles.title}>From</Text>
              <Text style={styles.description}>{item?.from || 'India'}</Text>
            </View>
            <View>
              <Text style={[styles.title, {textAlign: 'right'}]}>To</Text>
              <Text style={[styles.description, {textAlign: 'left'}]}>
                {item.to || 'UAE'}
              </Text>
            </View>
          </View>
          <View style={[styles.flexbox, {marginTop: SIZES.width * 0.05}]}>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                  },
                ]}>
                {type === 'Hotel' ? 'Stay Period' : 'Departure'}
              </Text>
              <Text style={styles.description}>{item?.visa_duration}</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                    textAlign:'right'
                  },
                ]}>
                {type === 'Hotel' ? 'Arrival' : 'Arrival'}
              </Text>
              <Text style={[styles.description, {textAlign: 'right'}]}>
                {item.entryType || '24th Oct 2024'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.flexbox,
              {
                position: 'absolute',
                bottom: SIZES.body6,
                width: '100%',
                left: SIZES.width * 0.061,
              },
            ]}>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.035,
                    lineHeight: SIZES.width * 0.05,
                    color: '#808991',
                  },
                ]}>
                Total Price
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: SIZES.width * 0.045,
                    lineHeight: SIZES.width * 0.05,
                    color: '#000',
                    marginTop: 5,
                  },
                ]}>
                ₹ {item?.visa_price_b2c}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 12,
                  backgroundColor: 'green',
                  borderRadius: 13,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onPress={() =>
                  navigation.navigate('DetailScreen', {item: item})
                }>
                <Text style={{color: '#fff', fontSize: 16}}>
                  {' '}
                  {type === 'Hotel' ? 'Apply' : 'Flight'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider} />

          <View style={styles.aeroplane}>
            <Image
              source={image.gFlight}
              style={{
                width: SIZES.width * 0.365,
                height: SIZES.h1,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={[
                styles.description,
                {paddingLeft: SIZES.width * 0.02, color: '#000'},
              ]}>
              {item.visaType}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const HotelAndFlight = ({visaDetails, type}) => {
  return (
    <FlatList
      data={visaDetails} // This should be visaDetails which contains the actual data
      renderItem={({item}) => <VisaCard item={item} type={type} />} // Pass the item from FlatList
      scrollEnabled={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{paddingVertical: 10}}
    />
  );
};

export default HotelAndFlight;

const styles = StyleSheet.create({
  container: {
    height: 235,
    borderRadius: 8,
    marginTop: 25,
    borderColor: '#808991',
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: SIZES.width * 0.044,
    fontWeight: '500',
    lineHeight: SIZES.h1,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    height: 1,
    left: SIZES.width * 0.061,
    bottom: SIZES.width * 0.175,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    borderStyle: 'dotted',
  },
  description: {
    fontSize: SIZES.width * 0.03,
    color: '#000',
    fontWeight: '400',
    paddingTop: 2,
  },
  aeroplane: {
    position: 'absolute',
    top: 14,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
