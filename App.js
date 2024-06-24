import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screens/Login';
import Mensagem from './src/Screens/Mensagem';
import Cadastro from './src/Screens/Cadastro';
import Perfil from './src/Screens/Perfil';
import Home from './src/Screens/Home';
import Postar from './src/Screens/Postar';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black', 
        inactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen name={"Home"}  component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons name="home" size={24} color={focused ? 'black' : 'gray'} />
          )
        }}
      />
      <Tab.Screen name={"Mensagem"}  component={Mensagem}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign name="message1" size={24} color={focused ? 'black' : 'gray'} />
          )
        }}
      />
       <Tab.Screen name={"Perfil"}  component={Perfil}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign name="user" size={24} color={focused ? 'black' : 'gray'} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Login"} component={Login}/>
        <Stack.Screen
          name={"Home"}
          component={HomeTabs}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name={"Cadastro"} component={Cadastro}/>
        <Stack.Screen name="Postar" component={Postar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
