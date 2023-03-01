import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import User from '../pages/User';
import HomeIcon from '../assets/icons/Home.svg';
import CartIcon from '../assets/icons/Cart.svg';
import LikeIcon from '../assets/icons/Like.svg';
import UserIcon from '../assets/icons/User.svg';
import HomeActive from '../assets/icons/HomeActive.svg';
import CartActive from '../assets/icons/CartActive.svg';
import LikeActive from '../assets/icons/LikeActive.svg';
import UserActive from '../assets/icons/UserActive.svg';
import Menu from '../components/Menu';
import HomesStack from './homesStack';
import TabBarNav from './tabBarNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../pages/ProductDetail';
function Router(props) {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => ({
          headerShown: false
          // headerShown: route.name === "ProductDetail" ? true : false,
        })}
        >
        <Stack.Screen name="MainNav" component={TabBarNav} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
