import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../app/(tabs)/profile';
import Login from '../app/(auth)/login'; 
import SignUp from '../app/(auth)/signup';

const Stack = createStackNavigator();

const ProfileTab: React.FC = () => {
  const isLoggedIn = false; // Replace this with your actual authentication logic

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileTab;