import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Importing Feather icons

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the most popular online shopping store?',
      answer:
        'Morbi adipiscing gravida dolor dui tincidunt libero. Duis malesuada massa libero nec accumsan nunc gravida.',
    },
    {
      question: 'Why online shopping is popular nowadays?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more FAQs as needed
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Frequently Asked Questions</Text>
      <ScrollView>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity
              style={styles.questionContainer}
              onPress={() => toggleAnswer(index)}>
              <Text style={styles.question}>{item.question}</Text>
              <Icon
                name={activeIndex === index ? 'chevron-up' : 'chevron-down'} // Toggle icon
                size={20}
                color="#000" // Icon color
              />
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={styles.answer}>{item.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  faqItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginTop: 15,
  },
  questionContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space between text and icon
    alignItems: 'center', // Center align vertically
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1, // Allow the text to take available space
  },
  answer: {
    fontSize: 16,
    color: '#777',
    marginTop: 8,
  },
});

export default FAQSection;
