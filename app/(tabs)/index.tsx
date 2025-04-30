import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import useWallpapers from '@/hooks/useWallpapers';
import ImageCard from '@/components/ImageCard';
import { useState } from 'react';
import { Wallpaper } from '@/hooks/useWallpapers';
import BottomSheet from '@gorhom/bottom-sheet';
import { DownloadPicture } from '@/components/BottomSheet';

const Account = () => {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null |Wallpaper>(null)
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: 'black', light: 'white' }}
        headerImage={
          <Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.url ?? '' }} />
        }
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={()=>{
                  setSelectedWallpaper(item)
              }} />}
              keyExtractor={(item) => item.name}
              scrollEnabled={false} // ✅ disables inner scrolling
            />
          </View>

          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===1)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={()=>{
                setSelectedWallpaper(item)
              }} />}
              keyExtractor={(item) => item.name}
              scrollEnabled={false} // ✅ disables inner scrolling
            />
          </View>
        </View>
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
    </SafeAreaView>
  ); 
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  innerContainer: {
    flex: 0.5,
    padding:5,
  },
});
