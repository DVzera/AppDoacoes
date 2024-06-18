import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import Home from "./screens/home";
import Login from "./screens/login";

export default function App(){
  const Tab = createBottomTabNavigator();
  return(
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Login"} component={Login}
          options={{
            tabBarIcon: ({color,style}) => (<Ionicons name="bookmark" size={24} color="black" />)
          }}
        />
        <Tab.Screen name={"Home"} component={Home}
          options={{
            tabBarIcon: ({color,style}) => (<Ionicons name="home" size={24} color="black" />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}