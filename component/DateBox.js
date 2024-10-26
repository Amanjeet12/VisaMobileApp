import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateBox = ({placeholder, onDateSelect, defaultDate = new Date()}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultDate); // Initialize with defaultDate

  useEffect(() => {
    setSelectedDate(defaultDate);  // Set default date when the component is initialized
  }, [defaultDate]);

  const handleDateChange = (event, selected) => {
    setShowDatePicker(Platform.OS === 'ios'); // On iOS, the DateTimePicker is a modal
    if (selected) {
      setSelectedDate(selected);
      onDateSelect && onDateSelect(selected); // Trigger the callback function
    }
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDatePicker}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {selectedDate ? selectedDate.toLocaleDateString() : placeholder}
          </Text>
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default DateBox;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 4,
    paddingLeft: 15,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#686d80',
  },
  dateContainer: {
    height: 50,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#000',
  },
});
