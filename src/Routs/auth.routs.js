import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const Stack = createNativeStackNavigator();

export default function AuthRouts(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false, }}/>
            <Stack.Screen name="SingUp" component={SingUp} options={{headerStyle:{ backgroundColor: '#3b3dbf' }, headerTintColor: 'white', headerTitle: 'Voltar', headerBackTitleVisible: false,}}/>
        </Stack.Navigator>
    )
}