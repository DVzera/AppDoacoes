import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { getDocs, collection, onSnapshot } from 'firebase/firestore';
import { database } from '../config/firebaseconfig';
import MaterialIcon from 'react-native-vector-icons/AntDesign';

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Função para buscar posts do Firestore e atualizar o estado local
    const unsubscribe = onSnapshot(collection(database, 'doacao'), (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(fetchedPosts);
    });

    // Retorna uma função de limpeza para remover o listener quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {/* ScrollView para rolar a lista de postagens */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Título das doações */}
        <Text style={styles.titulo}>Doações</Text>
        {/* Mapeia cada postagem para renderizá-la */}
        {posts.map((post, index) => (
          <View key={post.id} style={[styles.containerPostagem, index !== 0 && { marginTop: 30 }]}>
            {/* Nome do usuário */}
            <View style={styles.containerUsuario}>
              <Text style={styles.texto}>{post.nome}</Text>
            </View>
            {/* Legenda, endereço e telefone da postagem */}
            <Text style={styles.legenda}>{post.legenda}</Text>
            <Text style={styles.legenda}>Endereço: {post.endereco}</Text>
            <Text style={styles.legenda}>Telefone: {post.telefone}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Botão de adicionar postagem */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Postar');
        }}
        style={styles.botaoAdicionar}
      >
        <MaterialIcon name="plus" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10, 
    paddingBottom: 60, 
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30, 
  },

  containerUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  texto: {
    marginLeft: 10,
    fontStyle: 'italic',
    fontSize: 20,
    color: '#000',
  },
  legenda: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#000',
  },

  containerPostagem: {
    backgroundColor: '#FFF',
    marginBottom: 20, 
    shadowColor: '#000',
    borderRadius: 10, 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  
  botaoAdicionar: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: 'black',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});