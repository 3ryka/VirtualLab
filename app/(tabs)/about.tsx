import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const About: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>Virtual Lab was first developed in 2024.</Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Campus Address</Text>
        <Text>Engineering Building</Text>
        <Text>123 University Street</Text>
        <Text>Jakarta, Indonesia 12345</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Contact Information</Text>
        <Text>Email: info@fun4eng.com</Text>
        <Text>Phone: +62 21 1234 5678</Text>
        <Text>Fax: +62 21 1234 5679</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Social Media</Text>
        <Text>Follow us on:</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://instagram.com/fun4eng')}>Instagram</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://facebook.com/fun4eng')}>Facebook</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://twitter.com/fun4eng')}>Twitter</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Operating Hours</Text>
        <Text>Monday - Friday: 8:00 AM - 5:00 PM</Text>
        <Text>Saturday: 9:00 AM - 1:00 PM</Text>
        <Text>Sunday: Closed</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(180, 200, 230)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(27, 87, 176)',
  },
  content: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'rgb(27, 87, 176)',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgb(27, 87, 176)',
  },
  link: {
    color: 'rgb(27, 87, 176)',
    textDecorationLine: 'underline',
  },
});

export default About;