import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Home'); // Menyimpan halaman yang dipilih

  const renderPage = () => {
    switch (selectedPage) {
      case 'Modules':
        return (
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Learning Modules</Text>
            <View style={styles.moduleContainer}>
              <View style={styles.moduleCard}>
                <ImageBackground
                  source={require('./reading_cropped.jpg')}
                  style={styles.moduleImage}
                  imageStyle={{ resizeMode: 'cover' }}
                />
                <Text style={styles.moduleTitle}>Module 1</Text>
                <Button title="Enter" color="#4CAF50" onPress={() => { }} />
              </View>
              <View style={styles.moduleCard}>
                <ImageBackground
                  source={require('./writing_cropped.jpg')}
                  style={styles.moduleImage}
                  imageStyle={{ resizeMode: 'cover' }}
                />
                <Text style={styles.moduleTitle}>Module 2</Text>
                <Button title="Enter" color="#4CAF50" onPress={() => { }} />
              </View>
              <View style={styles.moduleCard}>
                <ImageBackground
                  source={require('./typing_cropped.png')}
                  style={styles.moduleImage}
                  imageStyle={{ resizeMode: 'cover' }}
                />
                <Text style={styles.moduleTitle}>Module 3</Text>
                <Button title="Enter" color="#4CAF50" onPress={() => { }} />
              </View>
            </View>
          </View>
        );
      case 'About':
        return (
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>About Us</Text>
            <Text>
              This is the about section. You can put some details here about the app, its features, or your team.
            </Text>
          </View>
        );
      case 'Profile':
        return (
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text>
              This is the profile section. You can add user-specific details like name, email, etc.
            </Text>
          </View>
        );
      default:
        return (
          <View style={styles.homeSection}>
            <ImageBackground
              source={require('./studying_edited.jpg')}
              style={styles.backgroundImage}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <View style={styles.homeContent}>
                <Text style={styles.homeTitle}>Learn English with Fun!</Text>
                <Text style={styles.homeText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in luctus feugiat.
                </Text>
                <Button title="Get Started" color="#00ACEF" onPress={() => { }} />
              </View>
            </ImageBackground>
          </View>
        );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.navname}>Fun4Eng</Text>
        <View style={styles.navmenu}>
          <Text
            style={[styles.navlink, selectedPage === 'Home' && styles.activeLink]}
            onPress={() => setSelectedPage('Home')}
          >
            Home
          </Text>
          <Text
            style={[styles.navlink, selectedPage === 'Modules' && styles.activeLink]}
            onPress={() => setSelectedPage('Modules')}
          >
            Modules
          </Text>
          <Text
            style={[styles.navlink, selectedPage === 'About' && styles.activeLink]}
            onPress={() => setSelectedPage('About')}
          >
            About
          </Text>
          <Text
            style={[styles.navlink, selectedPage === 'Profile' && styles.activeLink]}
            onPress={() => setSelectedPage('Profile')}
          >
            Profile
          </Text>
        </View>
      </View>

      {renderPage()}

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Campus Address</Text>
            <Text>Engineering Building</Text>
            <Text>123 University Street</Text>
            <Text>Jakarta, Indonesia 12345</Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Contact Information</Text>
            <Text>Email: info@fun4eng.edu</Text>
            <Text>Phone: +62 21 1234 5678</Text>
            <Text>Fax: +62 21 1234 5679</Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Social Media</Text>
            <Text>Follow us on Instagram, Facebook, Twitter</Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Operating Hours</Text>
            <Text>Monday - Friday: 8:00 AM - 5:00 PM</Text>
            <Text>Saturday: 9:00 AM - 1:00 PM</Text>
            <Text>Sunday: Closed</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#1B57B0',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  navname: {
    fontSize: 24,
    color: 'white',
  },
  navmenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  navlink: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  activeLink: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  homeSection: {
    position: 'relative',
    minHeight: 300,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContent: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 20,
  },
  homeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center'
  },
  homeText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white'
  },
  aboutSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  moduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  moduleCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  moduleImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  contactSection: {
    padding: 20,
  },
  contactContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  contactCard: {
    marginBottom: 20,
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
