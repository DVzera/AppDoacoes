import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import {useState} from 'react';

export default function Login({navigation}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function SignIn(){
    if (username == '1' && password == '2'){
      navigation.navigate("Home")
      setPassword('');
      setUsername('');
    }
    else {
      alert('Dados Inválidos!')
    }
  }


    return(
        <View style={styles.container}>
            <Text style={styles.text}>App Doações</Text>
            <Text style={styles.text2}>Login</Text>
            <Text style={styles.text3}>Insira seu login para continuar</Text>
            <TextInput
            style= {styles.input}
            placeholder= 'Login'
            placeholderTextColor={'#808080'}
            value={username}
            onChangeText = {setUsername}
            />
            <TextInput
            style= {styles.input2}
            placeholder= 'Senha'
            placeholderTextColor={'#808080'}
            value={password}
            onChangeText = {setPassword}
            />
            <TouchableOpacity onPress={SignIn} style={styles.button}>
                <Text style={styles.txtbutton}>Continuar com o Email</Text>
            </TouchableOpacity>
        </View>
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