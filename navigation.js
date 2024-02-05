import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home-screen" component={HomeScreen} />
                <Stack.Screen name="Resturant-screen" component={RestaurantScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
