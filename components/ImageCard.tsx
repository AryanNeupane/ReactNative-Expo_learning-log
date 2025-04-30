import { View, Text, Image, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Wallpaper } from '@/hooks/useWallpapers'
import { ThemedText } from './ThemedText'
import { Ionicons } from '@expo/vector-icons'

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  const theme = useColorScheme() ?? 'light'

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
          <Ionicons name="heart" size={24} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
        card: {
          width: '100%', // make card take full width of container
          marginBottom:15
        },
        imageWrapper: {
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
        },
        image: {
          width: '100%', // ✅ fills the width of card
          height: 300,
          resizeMode: 'cover',
        },
        labelContainer: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 8,
        },
        label: {
          color: 'white',
          fontSize: 16,
          fontWeight: '600',
        },
      });
      
