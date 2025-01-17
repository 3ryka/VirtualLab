import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';

const modules = [
  { id: '1', title: 'Module 1', image: require('../../../assets/images/reading.jpg'), isAvailable: true },
  { id: '2', title: 'Module 2', image: require('../../../assets/images/writing.jpg'), isAvailable: false },
  { id: '3', title: 'Module 3', image: require('../../../assets/images/typing.png'), isAvailable: false },
];

export default function Modules() {
  const handleComingSoon = () => {
    Alert.alert('Coming Soon', 'This module is not available yet.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Modules</Text>
      <FlatList
        data={modules}
        renderItem={({ item }) => (
          <View style={styles.moduleCard}>
            <Image source={item.image} style={styles.moduleImage} />
            <View style={styles.moduleContent}>
              <Text style={styles.moduleTitle}>{item.title}</Text>
              {item.isAvailable ? (
                <Link href={`/modules/${item.id}`} asChild>
                  <TouchableOpacity style={styles.enterButton}>
                    <Text style={styles.enterButtonText}>Enter</Text>
                  </TouchableOpacity>
                </Link>
              ) : (
                <TouchableOpacity
                  style={[styles.enterButton, styles.disabledButton]}
                  onPress={handleComingSoon}
                >
                  <Text style={[styles.enterButtonText, styles.disabledButtonText]}>Coming Soon</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(200, 220, 240)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(27, 87, 176)',
    textAlign: 'center',
  },
  moduleCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  moduleImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  moduleContent: {
    padding: 15,
    alignItems: 'center',
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(27, 87, 176)',
    marginBottom: 10,
  },
  enterButton: {
    backgroundColor: 'rgb(27, 87, 176)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  enterButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: 'rgb(150, 150, 150)',
  },
  disabledButtonText: {
    color: 'rgb(220, 220, 220)',
  },
});