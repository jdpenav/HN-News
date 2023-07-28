import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage, Ronald2, noticias, NotFound } from '../assets';


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
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Noticias</Text>
      </View>


      {/*Segunda Seccion */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[40px]">Honduras Noticias</Text>
        <Text className="text-[#38c8badd] text-[32px] font-bold ">Lo más relevante</Text>
        <Text className="text-[#3C6072] text-base">
          Noticias relevantes, tanto nacionales cono internacionales.
        </Text>
      </View>


      {/*Tercera Seccion Seccion */}
      <View className="w-[400px] h-[400px] bg-[#023047] rounded-full absolute  bottom-28 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#000000] rounded-full absolute -bottom-28 -left-36"></View>


      {/*Imagen */}
      <View className="flex-1 relative items-center justify-center">
        <Image source={noticias} className="w-full h-full object-cover mt-20" />
      </View>


      {/*BOTÓN CREAR*/}
      <View className="flex items-start justify-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("CrearCuenta")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#5DC1B9] mx-4 rounded-full items-center justify-center">
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#5DC1B9]">
              <Text className="text-gray-50 text-[18px] font-semibold">Crear</Text>
            </View>
        </TouchableOpacity>
      </View>


      {/*BOTÓN INVITADO*/}
      <View className="flex items-center justify-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#5DC1B9] rounded-full items-center justify-center">
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#5DC1B9]">
              <Text className="text-gray-50 text-[18px] font-semibold">Invitado</Text>
            </View>
        </TouchableOpacity>
      </View>

      
      {/*BOTÓN LOGIN*/}
      <View className="flex items-end justify-center mx-4">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#5DC1B9] ml-1 rounded-full items-center justify-center">
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#5DC1B9]">
              <Text className="text-gray-50 text-[18px] font-semibold">Login</Text>
            </View>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}


export default HomeScreen