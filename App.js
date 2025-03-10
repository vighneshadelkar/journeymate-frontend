import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { AuthProvider, AuthContext } from './app/context/AuthContext';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import CameraScreen from "./app/screens/CameraScreen"
import ProfileScreen from './app/screens/ProfileScreen';
import MapScreen from './app/screens/MapScreen';
import { LocationProvider } from './app/context/LocationContext';
import FrontCameraScreen from './app/screens/FrontCameraScreen';
import GraphScreen from './app/screens/GraphScreen';
import WeatherScreen from './app/screens/WeatherScreen';
import SplashScreen from './app/screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <LocationProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Frontcamera" component={FrontCameraScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Graph" component={GraphScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
