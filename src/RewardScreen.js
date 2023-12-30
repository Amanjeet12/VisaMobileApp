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
import Reward from '../component/Reward';
import {image} from '../constant';

const RewardScreen = () => {
  const {theme, toggleTheme, isDarkTheme} = useDarkTheme();

  const rewardsData = [
    {
      id: 1,
      title: 'Save 10% on your emirates flight tickets',
      description: 'For international flights',
      Image: image.image,
    },
    {
      id: 2,
      title: 'Save 10% on your emirates flight tickets',
      description: 'For international flights',
      Image: image.mac,
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar backgroundColor={'#327113'} barStyle={'light-content'} />

      <View style={styles.mainContainer}>
        <View style={styles.Header}>
          <Text style={styles.textTitle}>Rewards</Text>
        </View>
        <View style={styles.rewardSection}>
          {rewardsData.map(reward => (
            <Reward
              key={reward.id}
              title={reward.title}
              description={reward.description}
              rewardImage={reward.Image}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RewardScreen;

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
  rewardSection: {
    marginTop: 20,
  },
});
