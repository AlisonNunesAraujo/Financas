import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { AuthContext } from "../../contexts/auth"; 



export default function SingUp() {

    const { user } = useContext(AuthContext)
    
    function  hendle(){
        console.log( user.nome )
        
    }

   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput placeholder="Nome" style={styles.TextInput} />
            <TextInput placeholder="EMAIL" style={styles.TextInput} />
            <TextInput placeholder="SENHA" style={styles.TextInput} />

            <Text></Text>

            <TouchableOpacity style={styles.buttom} onPress={hendle}>
                <Text style={styles.titlebuttom}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080'
    },
    title: {
        fontSize: 35,
        color: 'white'
    },
    TextInput: {
        width: '60%',
        marginTop: 10,
        fontSize: 15,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10

    },

    buttom: {
        backgroundColor: 'blue',
        width: '50%',
        height: 50,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlebuttom: {
        color: 'white',
        fontSize: 20,
    },
})