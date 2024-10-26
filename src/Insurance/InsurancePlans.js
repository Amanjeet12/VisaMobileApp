import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {fetchInsurance} from '../redux/InsuranceSlice';

const InsurancePlans = ({route}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planType, setPlanType] = useState(''); // Initially, no hardcoded value
  const [plansData, setPlansData] = useState({});
  const [planTypes, setPlanTypes] = useState([]); // Dynamically store plan types
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserInsurance();
  }, []);

  const fetchUserInsurance = async () => {
    const params = {
      country_code: 'AE',
      nationality_code: 'IN',
    };
    const resultAction = await dispatch(fetchInsurance(params));
    if (resultAction.payload.success === 1) {
      const fetchedPlans = resultAction.payload.data[0].plans;
      setPlansData(fetchedPlans); // Store the insurance plans data
      const dynamicPlanTypes = Object.keys(fetchedPlans); // Extract plan types from response
      setPlanTypes(dynamicPlanTypes); // Set plan types dynamically
      setPlanType(dynamicPlanTypes[0]); // Set default plan type
    }
  };

  const getPlanByType = () => {
    if (!plansData || !plansData[planType]) return [];
    return plansData[planType]?.age_groups || [];
  };

  const filteredPlans = getPlanByType();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name={'chevron-small-left'} size={45} color={'#000'} />
          </TouchableOpacity>
          <View style={styles.headerCenterContainer}>
            <Text style={styles.header}>Choose Plan</Text>
          </View>
        </View>
        <View style={{marginTop: 35}}>
          <Text
            style={{
              paddingHorizontal: 25,
              fontSize: 22,
              color: '#000',
              fontWeight: '500',
            }}>
            Select what suits you
          </Text>
        </View>
        <View style={styles.tabContainer}>
          {planTypes.map(type => (
            <TouchableOpacity
              key={type}
              onPress={() => setPlanType(type)}
              style={[styles.tab, planType === type && styles.activeTab]}>
              <Text style={styles.tabText}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.card,
                  selectedPlan === plan?.customer?._id && styles.selectedCard,
                ]}
                onPress={() => setSelectedPlan(plan?.customer?._id)}>
                <View
                  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.planTitle}>{plan?.description}</Text>
                  <Text style={{fontSize: 14, color: '#252831'}}>
                    {plan?.age_group}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    marginHorizontal: 45,
                    marginBottom: 15,
                  }}>
                  {plan?.benefits?.map((benefit, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 5,
                      }}>
                      <Check name={'check'} size={16} color={'#327113'} />
                      <Text style={styles.benefit}>{benefit}</Text>
                    </View>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    marginBottom: 5,
                    justifyContent: 'space-between',
                    paddingTop: 15,
                    borderTopWidth: 1,
                    marginHorizontal: 30,
                  }}>
                  <Text style={styles.price}>Price: ₹ {plan?.customer?.base_price}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{textAlign: 'center', marginTop: 20}}>
              No plans available for the selected type.
            </Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {/* <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>
            ₹
            {selectedPlan
              ? filteredPlans.find(plan => plan?.customer?._id === selectedPlan)
                  ?.customer?.base_price
              : 0}
          </Text>
        </View> */}
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('DetailScreen')}>
          <Text style={styles.proceedButtonText}>Select & Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
    paddingTop: 15,
  },
  headerCenterContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginTop: 18,
  },
  tab: {
    width: 100,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#b8ccae',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'green',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  scrollViewContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 25,
    borderWidth: 0.5,
    borderColor: '#747F8A',
  },
  selectedCard: {
    borderColor: 'green',
    borderWidth: 2,
  },
  planTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  benefit: {
    fontSize: 14,
    color: '#252831',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  discount: {
    fontSize: 14,
    color: 'black',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  proceedButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default InsurancePlans;
