import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/home";
import Login from "./screens/login";

export default function App(){
  const Tab = createDrawerNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name={"Login"} component={Login}/>
        <Tab.Screen name={"Home"} component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}