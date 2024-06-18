import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import {useState} from 'react';

export default function Home(){
  const [count, setCount] = useState(0);
    
  function counter(){
    setCount(count+100000)
  }
  function descounter(){
    setCount(count-1)
  }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Casa Legal</Text>
            <Image style={styles.logo} source={{uri:'https://media1.tenor.com/m/ZuXnTDxIbjQAAAAC/shocked-shocked-cat.gif'}}/>
            
            <ScrollView style={styles.scrollView}>
              <Text style={styles.text}> {count} </Text>
              <TouchableOpacity onPress = {counter}>
                <Text>Contar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {descounter}>
                <Text>Descontar</Text>
              </TouchableOpacity>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. */}
            </ScrollView>
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
      textscroll: {
        textAlign: 'center',
        fontStyle: 'italic',
        padding: 5,
        fontSize: 25,
        color: '#09427d',
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
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
