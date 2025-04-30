import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { ThemedText } from './ThemedText';


export const DownloadPicture = ({ onClose , wallpaper }: {
  onClose: () => void;
  wallpaper:Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onClose={onClose}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{display:'none'}}
      style={styles.container}
    >
      <BottomSheetView style={styles.contentContainer}>
  <Image
    source={{ uri: wallpaper.url }}
    style={styles.image} // ✅ use defined style
    resizeMode="cover"
  />
  <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
  <Button title="Download" />
</BottomSheetView>

    </BottomSheet>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  contentContainer: {
    flex: 1,
    // padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:"80%",
    flex:1,
    // borderRadius: 12,
    marginBottom: 10,
  },
  text:{
    color:"black",
    
  }
});
