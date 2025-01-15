import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginSignup = () => {
    const [isSignUp, setIsSignUp] = useState(true); // Untuk toggling antara login dan signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (isSignUp) {
            console.log('Sign Up with:', email, password);
        } else {
            console.log('Log In with:', email, password);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {/* Form Sign Up */}
                {isSignUp ? (
                    <>
                        <Text style={styles.header}>Sign Up</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Button title="Sign Up" onPress={handleSubmit} />
                        <TouchableOpacity onPress={() => setIsSignUp(false)}>
                            <Text style={styles.toggleLink}>Already have an account? Log In</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        {/* Form Login */}
                        <Text style={styles.header}>Log In</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Button title="Log In" onPress={handleSubmit} />
                        <TouchableOpacity onPress={() => setIsSignUp(true)}>
                            <Text style={styles.toggleLink}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
        padding: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 16,
    },
    toggleLink: {
        textAlign: 'center',
        color: '#1b57b0',
        marginTop: 10,
    },
});

export default LoginSignup;
