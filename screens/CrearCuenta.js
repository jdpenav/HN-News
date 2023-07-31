import { View, Text, Image, TextInput,TouchableOpacity, Alert} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CrearCuenta = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, []);

  const validar = () =>{
    if(!nombreUsuario || !contrasena || !correo || !nombre){
      Alert.alert("Debe rellenar todos los campos.");
      return true;
    }
    return false;
  }

  const guardar = () => {
    if(!validar()){
      Alert.alert("Usuario creado correctamente");
      navigation.navigate("Discover")
    }
  }
 
  return (
    <SafeAreaView className="flex-1 bg-white flex-co justify-items-center">
      <Image source={require('../assets/pesonita2.gif')} className="mx-24" />
      <View className="flex bg-cyan-800 h-4/6 mx-4 rounded-xl py-1 px-2 shadow-lg ">
        <View className="flex-1 bg-cyan-700 h-96 m-4 rounded-xl py-1 px-4 shadow-lg shadow-black">
            <Text className="text-4xl mt-4 text-center text-white">Registrate</Text>
            <TextInput className="bg-white m-2 rounded h-10 px-2" 
            placeholder='Nombre*'
            value={nombre}
            onChangeText={setNombre}></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" 
            placeholder='Correo*'
            value={correo}
            onChangeText={setCorreo}></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" 
            placeholder='Nombre de Usuario*'
            value={nombreUsuario}
            onChangeText={setNombreUsuario}></TextInput>
            <TextInput className="bg-white m-2 rounded h-10 px-2" 
            placeholder='Contraseña*'
            value={contrasena}
            onChangeText={setContrasena}></TextInput>
            <TouchableOpacity className="bg-cyan-200 m-4 rounded h-10 p-3" onPress={guardar}>
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