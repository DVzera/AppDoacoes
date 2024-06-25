import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Mensagem() {
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mensagens</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o número que deseja contatar:'
                placeholderTextColor='#808080'
                value={inputValue}
                onChangeText={setInputValue}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contatar</Text>
            </TouchableOpacity>
            <Text style={styles.result}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
    },
    header: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#1C1C1C',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    result: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 20,
    },
});