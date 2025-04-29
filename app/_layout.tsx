import { View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
        <Slot /> 
    </GestureHandlerRootView>
  );
}
