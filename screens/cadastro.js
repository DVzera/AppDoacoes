import { Text, View} from "react-native"
import {useState} from 'react';

export default function Cadastro(){
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
            <Text style={styles.text}>Login!!</Text>
            <Image style={styles.logo} source={{uri:'https://media1.tenor.com/m/ZuXnTDxIbjQAAAAC/shocked-shocked-cat.gif'}}/>
            <TextInput
            style= {styles.input}
            placeholder= 'Teu Login'
            placeholderTextColor={'#808080'}
            value={username}
            onChangeText = {setUsername}
            />
            <TextInput
            style= {styles.input}
            placeholder= 'Senha'
            placeholderTextColor={'#808080'}
            value={password}
            onChangeText = {setPassword}
            />
            <TouchableOpacity onPress={SignIn} style={styles.button}>
                <Text style={styles.txtbutton}>Botão Brabo!!</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6959CD',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 30,
        color: '#09427d',
      },
      button: {
        shadowRadius: 20,
        borderRadius: 10,
        backgroundColor: '#363636',
        width: 170,
        height: 35,
      },
      txtbutton: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 20,
        textAlign: 'center',
      },
      input:{
        backgroundColor: '#363636',
        shadowRadius: 20,
        borderRadius: 10,
        padding: 10,
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