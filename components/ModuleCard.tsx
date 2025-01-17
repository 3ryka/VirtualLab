import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { globalStyles } from '../styles/globalStyles';

interface ModuleProps {
  module: {
    id: string;
    title: string;
    image: any;
  };
}

const ModuleCard: React.FC<ModuleProps> = ({ module }) => {
  return (
    <View style={styles.card}>
      <Image source={module.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{module.title}</Text>
        <Link href={`../(tabs)/module/${module.id}`} asChild> 
          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ModuleCard;