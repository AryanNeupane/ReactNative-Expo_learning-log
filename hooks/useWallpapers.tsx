import { View, Text } from 'react-native'
import React from 'react'
export interface Wallpaper {
    url:string,
    name:string
}

export default function useWallpapers() : Wallpaper[] {
    return [
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Sh3fqrSCQIim_QM1TXrofQ",
        name: "nature"
      },
      {
        url: "https://ideogram.ai/assets/image/lossless/response/QkWLRQmwS1qWvUkPytcOtg",
        name: "abstract"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/LyRYTYPRQFW0J4hlEIl57Q",
        name: "mountains"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/XxDvtLm2TcKMF6cORdduvg",
        name: "forest"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/aF24fB1HS72Qi889YaWbGw",
        name: "cityscape"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/ozdIk467SEWmNMMDhWoQ_Q",
        name: "night"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/lHx_z-OtQyW8S53ahZrPTg",
        name: "sunset"
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/3JQSQ8TXQ3-gvAqSgfQdwA",
        name: "minimal"
      }
    ];
  }
  