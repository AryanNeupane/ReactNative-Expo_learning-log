import { View, Text,Image , StyleSheet} from 'react-native'
import React from 'react'
import { Wallpaper } from '@/hooks/useWallpapers'




export default function ImageCard({wallpaper}: {
    wallpaper:Wallpaper
}){
    return <View>
            <Image source={{uri:wallpaper.url}} style={style.image} />

        </View>
}

const style=  StyleSheet.create({
 image:{
    flex:1,
    height:300,
    borderRadius:10,
    marginBottom:10,
 }
})