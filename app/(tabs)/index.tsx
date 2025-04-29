import React, { useState } from 'react';
import { View, Text,Image,StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DownloadPicture } from '@/components/BottomSheet';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import useWallpapers from '@/hooks/useWallpapers';
import ImageCard from '@/components/ImageCard';



const Account = () => {
 const wallpapers= useWallpapers();


  return (
    <SafeAreaView style={{flex:1}}>
  <ParallaxScrollView 
    headerBackgroundColor={{dark:"black",light:"white"}} 
    headerImage={
      <Image style={{flex:1}} source={{uri :wallpapers[0]?.url ?? ""}} />
    }>



      <View style={styles.container}>
        <View  style={styles.innerContainer}>
        <FlatList
        data={wallpapers}
        renderItem={({item}) => <ImageCard wallpaper={item} />}
        keyExtractor={item => item.name}
      />
        </View>
    
        <View  style={styles.innerContainer}>
        <FlatList
        data={wallpapers}
        renderItem={({item}) => <ImageCard wallpaper={item} />}
        keyExtractor={item => item.name}
      />
        </View>
    
      </View>
     
  </ParallaxScrollView>
</SafeAreaView>

  );
};

export default Account;

const styles=StyleSheet.create({
  container:{
    // display:"flex",
    flexDirection:"row",
    flex:1
  },
  innerContainer:{
    flex:0.5,
    padding:10,
  }
})