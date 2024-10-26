import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {countries} from 'countries-list';

const CountryPickerDropdown = ({onSelectCountry}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const countryItems = Object.values(countries).map((country, index) => ({
      label: country.name,
      value: country.iso2 || `N/A-${index}`, // Ensure unique fallback values
      key: country.iso2 || `N/A-${index}`, // Ensure unique keys
    }));
    setItems(countryItems);
  }, []);

  const handleChange = selectedValue => {
    setValue(selectedValue);

    // Find the selected item by the `value`, not the `label`
    const selectedCountry = items.find(item => item.value === selectedValue);

    if (selectedCountry) {
      console.log('Selected Country:', selectedCountry);
      onSelectCountry && onSelectCountry(selectedCountry); // Only call the prop if it's provided
    } else {
      console.log('Selected country is undefined or not found');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value} // The selected country value
          items={items} // The list of country options
          setOpen={setOpen}
          setValue={setValue} // This triggers the `handleChange` function internally
          setItems={setItems}
          searchable={true}
          searchPlaceholder="Search countries..."
          placeholder="Select a country..."
          onChangeValue={handleChange} // Use this to detect changes in selection
          listMode="SCROLLVIEW"
          zIndex={3000}
          zIndexInverse={1000}
          style={styles.dropdown}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 55,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: '#686d80',
  },
});

export default CountryPickerDropdown;
