import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';

export default function ModuleContent() {
  const [activeSection, setActiveSection] = useState(1);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const sections = [
    { id: 1, title: 'Section 1', content: ['Content for Section 1', 'More content for Section 1...', 'Final content for Section 1'] },
    { id: 2, title: 'Section 2', content: ['Content for Section 2', 'More content for Section 2...', 'Final content for Section 2'] },
    { id: 3, title: 'Section 3', content: ['Content for Section 3', 'More content for Section 3...', 'Final content for Section 3'] },
    { id: 4, title: 'Quiz', content: ['Quiz content goes here.'] },
  ];

  interface Section {
    id: number;
    title: string;
    content: string[];
  }

  const goToSection = (sectionId: number): void => {
    setActiveSection(sectionId);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Module</Text>
        <Text style={styles.subtitle}>Progress: {(activeSection / sections.length) * 100}%</Text>
      </View>

      {/* Dropdown Trigger */}
      <TouchableOpacity
        style={styles.dropdownTrigger}
        onPress={() => setDropdownVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {sections.find((section) => section.id === activeSection)?.title || 'Select Section'}
        </Text>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={sections}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => goToSection(item.id)}
                >
                  <Text style={styles.dropdownItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setDropdownVisible(false)}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Content */}
      <ScrollView style={styles.content}>
        {sections.map((section) => (
          activeSection === section.id && (
            <View key={section.id}>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.content.map((text, index) => (
                <Text key={index} style={styles.spacer}>{text}</Text>
              ))}
            </View>
          )
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    padding: 20,
    backgroundColor: '#1B57B0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 5,
  },
  dropdownTrigger: {
    margin: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1B57B0',
    borderRadius: 5,
  },
  modalCloseText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B57B0',
    marginBottom: 10,
  },
  spacer: {
    fontSize: 16,
    marginVertical: 5,
    color: '#666',
  },
});
