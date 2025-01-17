import React from 'react';
import { Stack } from 'expo-router';

export default function ModulesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerShown: true, headerBackTitle: 'Modules', headerTitle: "Module Content",
          headerStyle: {
            backgroundColor: 'rgb(27, 87, 176)',
          },
          headerTintColor: '#fff', }} />
    </Stack>
  );
}

