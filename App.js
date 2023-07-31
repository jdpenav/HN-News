import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import Item from './screens/Item';
import Login from './screens/Login';
import CrearCuenta from './screens/CrearCuenta';
import DiscoverEnglish from './screens/DiscoverEnglish';
import DiscoverFrench from './screens/DiscoverFrench';
import ItemEnglish from './screens/ItemEnglish';
import ItemFrench from './screens/ItemFrench';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="DiscoverEnglish" component={DiscoverEnglish} />
        <Stack.Screen name="DiscoverFrench" component={DiscoverFrench} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="ItemEnglish" component={ItemEnglish} />
        <Stack.Screen name="ItemFrench" component={ItemFrench} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
