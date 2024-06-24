import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthRouts from './src/Routs/auth.routs';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRouts/>
    </NavigationContainer>
  );
}

