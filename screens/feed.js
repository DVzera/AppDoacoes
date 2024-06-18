import { Text, View, TextInput, TouchableOpacity} from "react-native"
import {useState} from 'react';

export default function Feed(){
    const [a, numero] = useState();
    const [b, dobrado] = useState();
    const array = [];
    function numeroColocar(){
        array.push(a)
        const b = array.map((x) => x * 2);
        dobrado(b);
    }

    return(
        <View>
            <Text>Numero</Text>
            <TextInput
            placeholder= 'Digite o numero que deseja dobrar:'
            placeholderTextColor={'#808080'}
            value={a}
            onChangeText = {numero}
            />
            <TouchableOpacity onPress = {numeroColocar}>
                <text>Numero dobrado</text>
              </TouchableOpacity>
            <Text> {b} </Text>
        </View>
    )
}
