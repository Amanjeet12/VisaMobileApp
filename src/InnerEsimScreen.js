import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import BackArrow from '../component/BackArrow';
import Check from 'react-native-vector-icons/AntDesign';
import {image} from '../constant';
import Down from 'react-native-vector-icons/Entypo';

const data = [
  {
    id: 1,
    image: image.wifi,
    title: 'Network',
    subTitle: '4G/LTE',
  },
  {
    id: 2,
    image: image.earth,
    title: 'Unrestricted',
    subTitle: 'Speed',
  },
  {
    id: 3,
    image: image.mobile,
    title: 'Top-Up',
    subTitle: 'Available',
  },
  {
    id: 4,
    image: image.meter,
    title: 'Unrestricted',
    subTitle: 'Speed',
  },
];

const InnerEsimScreen = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BackArrow placeholder={'E-SIM'} />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Global Pack</Text>
          <View style={styles.containerBox}>
            <View style={styles.segmentControl}>
              <View style={[styles.button, styles.borderRight]}>
                <Check name={'checkcircleo'} size={24} color={'#327113'} />
                <Text style={styles.buttonTextActive}>Data</Text>
              </View>
              <View style={[styles.button, styles.borderRight]}>
                <Check name={'closecircleo'} size={24} color={'#E81B42'} />
                <Text style={styles.buttonText}>Calls</Text>
              </View>
              <View style={styles.button}>
                <Check name={'closecircleo'} size={24} color={'#E81B42'} />
                <Text style={styles.buttonText}>SMS</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#e6e8e9',
                marginHorizontal: 35,
              }}
            />
            <View style={styles.gridContainer}>
              {data.map(item => (
                <View key={item.id} style={styles.statusRow}>
                  <Image source={item.image} style={styles.iconStyle} />
                  <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabel}>{item.title}</Text>
                    <Text style={styles.statusSubLabel}>{item.subTitle}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#000',
                marginHorizontal: 35,
                marginTop: 25,
              }}
            />
            {showMore && (
              <View style={styles.additionalInfo}>
                <Text
                  style={[
                    styles.title,
                    {fontSize: 18, color: '#000', marginBottom: 16},
                  ]}>
                  Excluding Tax
                </Text>
                <Text style={styles.additionalText}>
                  Sales tax may be added based on your country laws{'\n'}
                  Additional Information{'\n'}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra condimentum eget purus in. Consectetur eget id morbi
                  amet amet, in. Ipsum viverra pretium tellus neque.
                </Text>
                <Text
                  style={[
                    styles.title,
                    {
                      fontSize: 18,
                      color: '#000',
                      marginBottom: 16,
                      marginTop: 15,
                    },
                  ]}>
                  Additional Information{' '}
                </Text>
                <Text style={styles.additionalText}>
                  Sales tax may be added based on your country laws{'\n'}
                  Additional Information{'\n'}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra condimentum eget purus in. Consectetur eget id morbi
                  amet amet, in. Ipsum viverra pretium tellus neque.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={{
                paddingHorizontal: 35,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 15,
              }}
              onPress={() => setShowMore(!showMore)}>
              <Text style={{fontSize: 20, color: '#327113'}}>View More</Text>
              <Down
                name={showMore ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={'#000'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InnerEsimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    color: '#327113',
    fontWeight: '600',
  },
  mainContainer: {
    marginTop: 15,
  },
  containerBox: {
    marginTop: 25,
    backgroundColor: '#fcfcfc',
    borderColor: '#e6e8e9',
    borderWidth: 1,
    borderRadius: 8,
  },
  segmentControl: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 5,
    paddingTop: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: '#e6e8e9', // Adjust color to match your design
  },
  buttonText: {
    marginTop: 5,
    color: '#000',
  },
  buttonTextActive: {
    marginTop: 5,
    color: '#327113',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 15,
  },
  statusRow: {
    width: '48%', // Adjusts the width to accommodate exactly two items per row
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingLeft: 5,
    marginTop: 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10, // Adds some space between the icon and the text
  },
  statusTextContainer: {
    flex: 1, // Takes the remaining space in the row
  },
  statusLabel: {
    color: 'grey',
    fontSize: 12,
  },
  statusSubLabel: {
    color: '#000',
    fontSize: 16,
  },
  additionalInfo: {
    padding: 15,
    paddingHorizontal: 25,
  },
  additionalText: {
    fontSize: 16,
    color: 'grey',
  },
});
