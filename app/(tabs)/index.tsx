import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
  return <View>
    <Text>Home screen</Text>
  </View>
}

function ProfileScreen(){
  return <View>
  <Text>Liked</Text>
</View>
}
function SettingScreen(){
  return <View>
  <Text>Suggested</Text>
</View>
}
