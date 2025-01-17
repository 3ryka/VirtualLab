import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { globalStyles } from '../../styles/globalStyles';

const Index: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/studying.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Learn English with Fun!</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Link href="/modules" asChild>
          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Index;