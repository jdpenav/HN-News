import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = () => {

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  var contra = "P@ssw0rd";
  var usuario = "elbicho";


  const navigation = useNavigation();

  const validar = () => {
    var res = false;
    if (!nombreUsuario || !contrasena) {
      Alert.alert("Debe rellenar ambos campos");
      res = true;


    } else if (nombreUsuario !== usuario || contrasena !== contra) {
      Alert.alert("Credenciales inválidas");
      res = true;
    }

    return res;
  }

  const guardar = () => {
    if (!validar()) {
      navigation.navigate("Discover");
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, []);


  return (
    <SafeAreaView className="flex-1 bg-white">

      <Image source={require('../assets/personitas.gif')} className="" />
      
      <View className="flex bg-cyan-800 h-96 mx-4 rounded-xl py-1 px-2 shadow-lg ">
        <View className="flex-1 bg-cyan-700 h-96 m-4 rounded-xl py-1 px-4 shadow-lg shadow-black">
          <Text className="text-4xl mt-4 text-center text-white">Bienvenido</Text>
          <TextInput className="bg-white m-2 rounded h-10 px-2"
            placeholder='Usuario'
            value={nombreUsuario}
            onChangeText={setNombreUsuario}
          ></TextInput>
          <TextInput className="bg-white m-2 rounded h-10 px-2"
            placeholder='Contraseña'
            value={contrasena}
            onChangeText={setContrasena}
          ></TextInput>
          <TouchableOpacity className="bg-cyan-200 m-4 rounded h-10 p-3" onPress={() => navigation.navigate("Discover")}>
            <Text className="text-center font-extrabold" onPress={guardar}>LOGIN</Text>
          </TouchableOpacity>
          <Text className="text-center my-2 text-white" onPress={() => navigation.navigate("CrearCuenta")}>¿No tienes cuenta? Registrate</Text>
        </View>
        <Text className="text-center my-2 text-white"
          onPress={() => navigation.navigate("Inicio")}>
          Volver
        </Text>
      </View>


    </SafeAreaView>
  )
}

export default Login