import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Feed from './Screens/Feed';
import Cadastro from './Screens/Cadastro';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={Home}/>
      <Tab.Screen name={"Feed"} component={Feed}/>
    </Tab.Navigator>
  );
}

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={"Login"} component={Login}/>
      <Stack.Screen name={"Home"} component={HomeTabs}/>
      <Stack.Screen name={"Cadastro"} component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}