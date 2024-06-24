import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function SingIn() {

    const navigation = useNavigation();

    return (
        <View style={styles.Container}>

            <View style={styles.Area}>
                <Text style={{ fontSize: 35, color: 'white' }}>Bem Vindo</Text>

                <Text style={styles.textlogin}>LOGIN</Text>
                <TextInput placeholder="EMAIL" style={styles.TextInput} />
                <TextInput placeholder="SENHA" style={styles.TextInput} />

                <TouchableOpacity style={styles.buttomEntrar}>
                    <Text style={styles.text}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttomRegistro} onPress={ () => navigation.navigate('SingUp') }>
                    <Text>Nao tem uma conta? Faça seu Registro!</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#808080'

    },
    Area: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    textlogin: {
        marginTop: 20,
        fontSize: 20,
        color: 'white'
    },

    TextInput: {
        width: '80%',
        marginTop: 10,
        fontSize: 15,
        alignItems: 'center',
        marginBottom: 5,
       backgroundColor: 'white',
        padding: 12,
        borderRadius: 10

    },

    buttomEntrar: {
        width: '50%',
        height: 50,
        backgroundColor: 'blue',
        margin: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    text: {
        color: 'white',
        fontSize: 15,
    }
})