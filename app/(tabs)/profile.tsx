import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { useFirebase } from '@/hooks/useFirebase';
// import { UserData, ModulesData, QuizScores } from '@/hooks/firebase';
// import { router } from 'expo-router';

export default function Profile() {
  // Backend-related functionality has been commented out
  // const { user, getUserData, updateUserData, logOut } = useFirebase();

  const [displayName, setDisplayName] = useState('User');
  const [newDisplayName, setNewDisplayName] = useState('');
  const [email, setEmail] = useState('user@example.com');
  // const [moduleProgress, setModuleProgress] = useState<ModulesData | null>(null);
  // const [quizScores, setQuizScores] = useState<QuizScores | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // Commenting out useEffect and all backend-dependent logic
  /*
  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        router.replace('/login');
        return;
      }
      await loadUserData();
    };
    checkAuth();
  }, [user]);

  const loadUserData = async () => {
    // Load user data logic
  };

  const handleSaveName = async () => {
    // Save display name logic
  };

  const handleLogout = async () => {
    // Log out logic
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.title}>Please log in to view your profile</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/login')}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  */

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Welcome, {displayName}!</Text>
      <Text style={styles.email}>Email: {email}</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Change Display Name:</Text>
        <TextInput
          style={styles.input}
          value={newDisplayName}
          onChangeText={setNewDisplayName}
          placeholder="Enter new name"
        />
        <TouchableOpacity
          style={styles.button}
          // Commenting out actual save logic
          // onPress={handleSaveName}
          onPress={() => {
            setDisplayName(newDisplayName);
            setNewDisplayName('');
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Module Progress</Text>
      <View style={styles.progressContainer}>
        {/* Example static data, replace with actual if needed */}
        <View style={styles.progressItem}>
          <Text style={styles.progressTitle}>Module 1</Text>
          <Text style={styles.progressText}>Progress: 50%</Text>
          <Text style={styles.progressText}>Current Section: Introduction</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quiz Scores</Text>
      <View style={styles.progressContainer}>
        {/* Example static data, replace with actual if needed */}
        <View style={styles.scoreItem}>
          <Text style={styles.scoreTitle}>Quiz 1</Text>
          <Text style={styles.scoreText}>80%</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        // Commenting out logout functionality
        // onPress={handleLogout}
        onPress={() => alert('Logout functionality is disabled in this frontend-only version')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 20,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1B57B0',
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1B57B0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1B57B0',
  },
  progressContainer: {
    backgroundColor: '#f5f7fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  progressItem: {
    marginBottom: 10,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  scoreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    marginTop: 20,
  },
});