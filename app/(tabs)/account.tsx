import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const account = () => {
  return (
    <SafeAreaView>
      <Text>account</Text>
      <Link href={"/accountInfo"}>
        <Text>Accounts Here</Text>
      </Link>
    </SafeAreaView>
  )
}

export default account