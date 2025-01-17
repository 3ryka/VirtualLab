import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useFirebase } from '@/hooks/useFirebase';
import { FirebaseError } from '@/hooks/firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useFirebase();

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      Alert.alert(
        'Success', 
        'Account created successfully. Please log in.',
        [{ text: 'OK', onPress: () => router.replace('/login') }]
      );
    } catch (error) {
      const firebaseError = error as FirebaseError;
      Alert.alert(
        'Signup Error',
        firebaseError.code === 'auth/email-already-in-use'
          ? 'Email is already in use'
          : firebaseError.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        Already have an account? {' '}
        <Link href="./login" style={styles.link}>Log In</Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1B57B0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    textAlign: 'center',
  },
  link: {
    color: '#1B57B0',
    textDecorationLine: 'underline',
  },
});