import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage, Ronald2 } from '../assets';


const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      {/*Primera Seccion*/}

      <View className="flex-row px-6 mt-8 items-center space-x-2" >
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#5DC1B9] text-3xl font-semibold">HN</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/*Segunda Seccion */}

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[40px]">Enjoy Honduras</Text>
        <Text className="text-[#38c8badd] text-[32px] font-bold ">Cool Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Honduras will captivate you with its dreamy beaches, rich culture, and lush natural beauty.
        </Text>
      </View>

      {/*Tercera Seccion Seccion */}

      <View className="w-[400px] h-[400px] bg-[#5DC1B9] rounded-full absolute  bottom-28 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#d36027] rounded-full absolute -bottom-28 -left-36"></View>

      {/*Imagen */}

      <View className="flex-1 relative items-center justify-center">
        <Image source={Ronald2} className="w-full h-full object-cover mt-20" />
        <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#5DC1B9] rounded-full items-center justify-center">
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#5DC1B9]">
              <Text className="text-gray-50 text-[21px] font-semibold">Vamos</Text>
            </View>
        </TouchableOpacity>

      </View>










    </SafeAreaView>
  )
}

export default HomeScreen