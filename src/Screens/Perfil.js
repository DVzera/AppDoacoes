import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth, onAuthStateChanged } from '../config/firebaseconfig';

const Perfil = () => {
  const [email, setEmail] = useState(''); 
  const [user, setUser] = useState(null); 

  // Efeito para atualizar o email do usuário quando ele fizer login ou logout
  useEffect(() => {
    // Função para observar mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Se houver um usuário autenticado, atualiza o email e as informações do usuário
        setEmail(currentUser.email);
        setUser(currentUser);
      } else {
        // Se não houver um usuário autenticado, limpa o email e as informações do usuário
        setEmail('');
        setUser(null);
      }
    });

    // Retorna uma função de limpeza para cancelar a subscrição quando o componente for desmontado
    return unsubscribe;
  }, []);

  // Componente de perfil que exibe o email do usuário e uma imagem de avatar
  return (
    <View style={styles.container}>
      {/* Imagem de avatar */}
      <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" }} style={styles.avatar} />
      
      {/* Email do usuário */}
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },

  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, 
  },
  
  email: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
});

export default Perfil;
