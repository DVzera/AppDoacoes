import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, TextInput } from 'react-native';

export function Profile(){
  return(
    // Text = Texto

    <View>
        <Text style={styles.txt}>Dumbass cat </Text> 
        <Image style={styles.logo} source={{uri:'https://i.redd.it/580r1es3lbi91.gif'}}/>
        <TextInput
            style= {styles.input}
            placeholder= 'How Dumb?'
            placeholderTextColor={'white'}
        />
        <TextInput
            style= {styles.input}
            placeholder= 'How Stupid?'
            placeholderTextColor={'white'}
        />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('DUMBASS!!')}>
            <Text style={styles.txtbutton}>Dumbass!!</Text>
        </TouchableOpacity>
    </View>
  );

}

// exportação padrão
export default function Gallery() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6959CD',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    marginTop: 50,
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
    overlayColor: '#6959CD',
  },
  txt: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 30,
    color: '#09427d',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#09427d',
    shadowRadius: 20,
    borderRadius: 10,
    padding: 10,
  },
  txtbutton: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 30,
  },
  img:{
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  input:{
    marginTop: 10,
    backgroundColor: '#09427d',
    shadowRadius: 20,
    borderRadius: 10,
    padding: 10,
  }
});