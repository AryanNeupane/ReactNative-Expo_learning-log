import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function account() {
  return (
    <View>
      <Link href={"/(notabs)/accountInfo"}>
        <Text>Account</Text>
      </Link>
    </View>
  )
}