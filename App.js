import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import Home from "./screens/home";
import Login from "./screens/login";
import Feed from "./screens/feed";
import Cadastro from "./screens/cadastro";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={Home}/>
      <Tab.Screen name={"Feed"} component={Feed}/>
      <Tab.Screen name={"Cadastro"} component={Cadastro}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}