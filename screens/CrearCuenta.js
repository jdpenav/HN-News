import { View, Text, Image, TextInput,ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';



const CrearCuenta = () => {

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  const navigation = useNavigation();



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);


  return (
    <SafeAreaView className="flex-1 bg-white flex-co justify-items-center">
      <Image source={require('../assets/pesonita2.gif')} className="mx-20" />
      <View className="flex bg-cyan-800 h-4/6 mx-4 rounded-xl py-1 px-2 shadow-lg ">
        <View className="flex-1 bg-cyan-700 h-96 m-4 rounded-xl py-1 px-4 shadow-lg shadow-black">
            <Text className="text-4xl mt-4 text-center text-white">Registrate</Text>
            <TextInput className="bg-white m-2 rounded h-10 px-2" placeholder='Nombre*'></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" placeholder='Apellido*'></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" placeholder='Nombre de Usuario*'></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" placeholder='Contraseña*'></TextInput>
            <TouchableOpacity className="bg-cyan-200 m-4 rounded h-10 p-3" onPress={() => navigation.navigate("Discover")}>
              <Text className="text-center font-extrabold" >COMENZAR</Text>
            </TouchableOpacity>
            <Text className="text-center my-2 text-white" onPress={() => navigation.navigate("Login")}>¿Ya tienes cuenta? Inicia Sesión</Text>
        </View>
        <Text className="text-center my-2 text-white" 
        onPress={() => navigation.navigate("Inicio")}>
          Volver
        </Text> 
      </View> 
      

    </SafeAreaView>
  )
}

export default CrearCuenta