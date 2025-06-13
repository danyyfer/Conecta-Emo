import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConectaEmo</Text>
      <Text style={styles.subtitle}>No estás sol@. Aquí tu emoción tiene un lugar seguro.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f6f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#636e72',
    textAlign: 'center',
  },
});
