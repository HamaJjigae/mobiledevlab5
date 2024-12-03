import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>My To Do List</Text>
        <Text style={styles.text}>Created by: Matthew Biggs</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AboutScreen;
