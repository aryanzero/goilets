import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavigationComponent = ({ navigateToLessons, navigateToPractice, navigateToProgress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToLessons}>
        <Text style={styles.buttonText}>Lessons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToPractice}>
        <Text style={styles.buttonText}>Practice</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToProgress}>
        <Text style={styles.buttonText}>Progress</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavigationComponent;