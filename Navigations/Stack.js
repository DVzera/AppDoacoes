import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from './screens/home';
import Login from './screens/login';

export default function Stack (){
  const stack = createStackNavigator();
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Home' component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  )
}