import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { useFirebase } from '@/hooks/useFirebase';
import { UserData, ModulesData } from '@/hooks/firebase';

interface Section {
  id: number;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: 1,
    title: 'Section 1',
    content: ['Content for Section 1', 'More content for Section 1...', 'Final content for Section 1'],
  },
  {
    id: 2,
    title: 'Section 2',
    content: ['Content for Section 2', 'More content for Section 2...', 'Final content for Section 2'],
  },
  {
    id: 3,
    title: 'Section 3',
    content: ['Content for Section 3', 'More content for Section 3...', 'Final content for Section 3'],
  },
  {
    id: 4,
    title: 'Quiz',
    content: ['Quiz content goes here.'],
  },
];

export default function ModuleContent() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user, getUserData, updateUserData } = useFirebase();
  const [activeSection, setActiveSection] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        router.replace('/login');
        return;
      }
      await loadModuleData();
    };
    checkAuth();
  }, [user, id]);

  const loadModuleData = async () => {
    if (!user || !id) return;

    try {
      setIsLoading(true);
      const userData = await getUserData(user.uid);
      const moduleKey = `module${id}` as keyof UserData['module'];
      const moduleData = userData.module[moduleKey];
      
      if (moduleData) {
        const currentSection = parseInt(moduleData.currentSection.split(' ')[1]) || 1;
        setActiveSection(currentSection);
        setProgress(parseInt(moduleData.progress));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load module data');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProgress = async (sectionNum: number) => {
    if (!user || !id) return;

    const newProgress = Math.min((sectionNum / 4) * 100, 100);
    setProgress(newProgress);
    
    try {
      const moduleKey = `module${id}` as keyof ModulesData;
      const currentModuleData = {
        currentSection: `Section ${sectionNum}`,
        progress: `${newProgress}%`,
      };

      const updateData: Partial<UserData> = {
        module: {
          ...(await getUserData(user.uid)).module,
          [moduleKey]: currentModuleData,
        },
      };
      
      await updateUserData(user.uid, updateData);
    } catch (error) {
      Alert.alert('Error', 'Failed to update progress');
    }
  };

  const goToSection = (sectionNum: number) => {
    setActiveSection(sectionNum);
    updateProgress(sectionNum);
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (id !== '1') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Coming Soon</Text>
        <Text style={styles.subtitle}>This module is not available yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Module {id}</Text>
        <Text style={styles.progressText}>Progress: {progress}%</Text>
      </View>
      
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={activeSection}
          onValueChange={(itemValue: number) => goToSection(itemValue)}
          style={styles.picker}
        >
          {sections.map((section) => (
            <Picker.Item 
              key={section.id}
              label={section.title} 
              value={section.id} 
            />
          ))}
        </Picker>
      </View>
      
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#666',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#DDD',
    marginHorizontal: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1B57B0',
  },
  pickerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  picker: {
    height: 50,
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