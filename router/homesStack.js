import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
const Stack = createNativeStackNavigator();

function HomesStack(props) {
  return (
    <Stack.Navigator
    screenOptions={() => ({
      headerShown: false ,
    })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default HomesStack;