import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore'; 
import { database } from '../config/firebaseconfig'; 

export default function Feed() {
  // Estado para armazenar a lista de postagens
  const [posts, setPosts] = useState([]);
  // Estado para armazenar os dados da nova postagem
  const [newPost, setNewPost] = useState({
    nome: '',
    endereco: '',
    legenda: '',
    telefone: '',
  });

  // Função useEffect para buscar as postagens do Firestore quando o componente for montado
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(database, 'doacao')); // Obtém os documentos da coleção 'doacao'
      const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapeia os documentos para obter os dados
      setPosts(fetchedPosts); // Atualiza o estado com as postagens obtidas
    };
    fetchPosts(); // Chama a função para buscar as postagens
  }, []);

  // Função para adicionar uma nova postagem
  const addPost = async () => {
    console.log('Adicionando post:', newPost); // Log para exibir os dados da nova postagem
    const { nome, endereco, legenda, telefone } = newPost; // Desestruturação dos dados da nova postagem
    // Verifica se algum campo está vazio
    if (!nome || !endereco || !legenda || !telefone) {
      console.error('Algum dos campos está vazio');
      return;
    }
    // Verifica se algum campo está vazio depois de remover espaços em branco
    if (nome.trim() === '' || endereco.trim() === '' || legenda.trim() === '' || telefone.trim() === '') {
      console.error('Algum dos campos está vazio depois de remover espaços em branco');
      return;
    }
    try {
      // Adiciona a nova postagem ao Firestore
      const newPostRef = await addDoc(collection(database, 'doacao'), newPost);
      // Atualiza a lista de postagens localmente
      const updatedPosts = [...posts, { id: newPostRef.id, ...newPost }];
      setPosts(updatedPosts); // Atualiza o estado com as postagens atualizadas
      // Limpa os campos da nova postagem
      setNewPost({ nome: '', endereco: '', legenda: '', telefone: '' });
      console.log('Post adicionado com sucesso:', newPostRef.id); // Log para indicar que a postagem foi adicionada com sucesso
      // Exibe um alerta de sucesso
      Alert.alert('Sucesso', 'Postagem adicionada com sucesso');
    } catch (error) {
      console.error('Error adding document: ', error); // Exibe um erro se ocorrer algum problema ao adicionar a postagem
    }
  };  

  return (
    <View style={styles.container}>
      {/* Conteúdo do feed */}
      <View style={styles.content}>
        {/* Campos para adicionar uma nova postagem */}
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={newPost.nome}
          onChangeText={text => setNewPost({ ...newPost, nome: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={newPost.endereco}
          onChangeText={text => setNewPost({ ...newPost, endereco: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Legenda"
          value={newPost.legenda}
          onChangeText={text => setNewPost({ ...newPost, legenda: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={newPost.telefone}
          onChangeText={text => setNewPost({ ...newPost, telefone: text })}
        />
        {/* Botão para adicionar a postagem */}
        <TouchableOpacity style={styles.button} onPress={addPost}>
          <Text style={styles.buttonText}>Adicionar Postagem</Text>
        </TouchableOpacity>
        {/* Lista de postagens */}
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '50%', 
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10, 
  },

  button: {
    backgroundColor: '#363636',
    padding: 10,
    borderRadius: 8,
    width: 300,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
