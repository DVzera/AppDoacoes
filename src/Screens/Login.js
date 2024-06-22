import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, Button } from 'react-native';
import { auth, onAuthStateChanged } from '../config/firebaseconfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const LoginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigation.navigate('Home', { idUser: userCredential.user.uid }); 
    } catch (error) {
      console.error('Error logging in:', error);
      setError(true);
    }
  };

  useEffect(() => {
    const statusAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home", { idUser: user.uid });
      }
    });

    return () => statusAuth();
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.text}>App Doações</Text>
      <Text style={styles.text2}>Login</Text>
      <Text style={styles.text3}>Insira seu login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#808080'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && (
        <View style={styles.alert}>
          <Ionicons name="alert-circle" size={24} color="red" />
          <Text style={styles.txtalert}>email ou senha inválidos</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={LoginUser} disabled={email === '' || password === ''}>
        <Text style={styles.txtbutton}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.txtNewuser} onPress={() => navigation.navigate('Cadastro')}>
        Não possui uma conta? criar
      </Text>
    </KeyboardAvoidingView>
  );
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
    color: '#000000'
  },
  text2: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000000'
  },
  text3: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000000'
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
  input: {
    backgroundColor: '#FFF',
    borderColor: '#000000',
    borderWidth: 0.8,
    shadowRadius: 20,
    borderRadius: 8,
    padding: 10,
    width: 300,
    height: 37,
  },
  alert: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txtalert: {
    fontSize: 16,
    color: 'red'
  },
  txtNewuser: {
    color: '#0000EE',
    marginTop: 20,
  },

  txtNewuser:{
    color: '#373D20',
    fontSize: 20,
    padding:10,
    marginTop: 10,
  }
});
