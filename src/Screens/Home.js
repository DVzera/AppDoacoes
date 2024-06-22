import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Doações</Text>
            </View>
            
            <View style={styles.userContainer}>
                <Image style={styles.user} source={{uri:'https://media.istockphoto.com/id/1135687337/pt/vetorial/flag-of-rio-grande-do-sul-on-button.jpg?s=612x612&w=0&k=20&c=oJAtm_DpEiQmEE60JdLDREZ7Cu00T5itMDn2E9PSA_Q='}}/>  
                <Text style={styles.text}>FARS</Text>
            </View>
            
            <Image style={styles.logo} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTi0Pn1RfIL5hD2NIuRFgpRIrHf7wClTbrXw&s'}}/>
            
            <Text style={styles.caption}>Ajude os impactados pelas inundações no Rio Grande do Sul!</Text>

            <View style={styles.userContainer}>
                <Image style={styles.user} source={{uri:'https://static.vecteezy.com/ti/vetor-gratis/p1/7113275-avatar-homem-rosto-silhueta-usuario-sinal-pessoa-perfil-imagem-masculino-icone-em-circulo-redondo-preto-cor-ilustracao-imagem-contorno-contorno-linha-estilo-fino-vetor.jpg'}}/>  
                <Text style={styles.text}>Asilo São Cristóvão</Text>
            </View>
            
            <Text style={styles.caption}>Precisamos de fraldas geriatricas e roupas para a terceira idade no Asilo São Cristóvão. Por favor doem o Possível!</Text>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    topBar: {
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    text: {
        marginLeft: 10,
        fontStyle: 'italic',
        fontSize: 20,
        color: '#000',
    },
    logo: {
        width: '100%',
        height: 400,
        alignSelf: "center",
    },
    caption: {
        fontSize: 16,
        padding: 15,
        textAlign: 'left',
        color: '#000',
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        fontSize: 16,
        color: '#000',
    },
    user: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});