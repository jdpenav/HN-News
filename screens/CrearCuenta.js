import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage, Ronald2, noticias } from '../assets';


const CrearCuenta = () => {


  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
        <Text className="text-[#3C6072] text-[40px]">Cree una Cuenta</Text>
      </View>

      {/*SECCION PARA EL CUADRO DE DATOS DE LOGINS */}
      <View className="w-[400px] h-[400px] bg-[#457b9d] rounded-lg absolute bottom-28 mx-1.5 my-24 opacity-90 items-center justify-center"></View>
      <View>
        
        
      </View>

      

      {/*BOTÓN DE CREAR CUENTA */}
      <View className="flex-1 relative items-center justify-center">
        <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 items-center justify-center">
            <View className="w-48 h-16 items-center justify-center rounded-lg bg-[#5DC1B9]">
              <Text className="text-gray-50 text-[21px] font-semibold">Crear Cuenta</Text>
            </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default CrearCuenta