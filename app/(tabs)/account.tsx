import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DownloadPicture } from '@/components/BottomSheet';

const Account = () => {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
      <Text>Account</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setPictureOpen(true)}
      />
      {pictureOpen && <DownloadPicture />}
      </View>
    </SafeAreaView>
  );
};

export default Account;
