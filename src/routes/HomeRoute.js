import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import userHome from '../screens/userHome';
import userDetails from '../screens/UserDetails';

const Stack = createStackNavigator();
function HomeRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={userHome} />
        <Stack.Screen name="details" component={userHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRoute;
