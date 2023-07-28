import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import Item from './screens/Item';
import Login from './screens/Login';
import CrearCuenta from './screens/CrearCuenta';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
