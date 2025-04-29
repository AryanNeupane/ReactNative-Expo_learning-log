
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
        <Stack screenOptions={{
       headerShown: false 
      }}>
        <Stack.Screen name='(notabs)/accountInfo'options={{headerShown:true ,headerTitle:"Account info",
        headerBackTitle:"Go Back"
        }} />
        </Stack>   
    </GestureHandlerRootView>
  );
}
