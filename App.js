import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthRouts from './src/Routs/auth.routs';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthRouts/>
      </AuthProvider>
    </NavigationContainer>
  );
}

