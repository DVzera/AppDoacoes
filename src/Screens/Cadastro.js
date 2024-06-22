import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform,TouchableOpacity } from 'react-native';
import { auth } from '../config/firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const NovoUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      Alert.alert('conta criada');
      navigation.navigate('Login'); 
    } catch (error) {
      //console.error('Error signing up:', error);
      Alert.alert('Error', error.message);
    }
  };
  
  
  return(
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding": "height"}
      style={styles.container}>
        <Text style={styles.text}>App Doações</Text>
        <Text style={styles.text2}>Cadastro</Text>
        <Text style={styles.text3}>Insira seu login para Cadastrar-se</Text>
        <TextInput
        style= {styles.input}
        placeholder= 'E-mail'
        placeholderTextColor={'#808080'}
        alue={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />
        <TextInput
        style= {styles.input2}
        placeholder= 'Senha'
        placeholderTextColor={'#808080'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={NovoUsuario}>
          <Text style={styles.txtbutton}>Criar</Text>
        </TouchableOpacity> 

        <Text 
          style={styles.txtbutton}
          onPress={() => navigation.navigate('Login')}>
          Já possui uma conta? Logar
        </Text>
      </KeyboardAvoidingView>
    )
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000	'
      },
      text2: {
        textAlign: 'center',
        fontSize: 22,
        color: '#000000	'
      },
      text3: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000000	'
      },
      button: {
        shadowRadius: 20,
        borderRadius: 10,
        backgroundColor: '#363636',
        width: 300,
        height: 35,
      },
      txtbutton: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 20,
        textAlign: 'center',
      },
      input:{
        backgroundColor: '#FFF',
        borderColor: '#000000',
        borderWidth: 0.8,
        shadowRadius: 20,
        borderRadius: 8,
        padding: 10,
        width: 300,
        height: 37,
      },
      input2:{
        backgroundColor: '#FFF',
        borderColor: '#000000',
        borderWidth: 0.8,
        shadowRadius: 20,
        borderRadius: 8,
        padding: 10,
        width: 300,
        height: 37,

      },
      logo: {
        marginTop: 50,
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        overlayColor: '#6959CD',
      },
});