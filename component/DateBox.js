import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateBox = ({placeholder}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, selected) => {
    setShowDatePicker(Platform.OS === 'ios'); // On iOS, the DateTimePicker is a modal
    if (selected) {
      setSelectedDate(selected);
      // Handle the selected date as needed
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
            {selectedDate.toLocaleDateString()}
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
      <View style={styles.titleBox}>
        <Text style={styles.title}>{placeholder}</Text>
      </View>
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
    borderColor: 'rgba(13, 22, 52, 0.05)',
    justifyContent: 'center',
  },
  dateContainer: {
    height: 50,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#000',
  },
  title: {
    fontSize: 12,
    color: '#888',
  },
  titleBox: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
});
