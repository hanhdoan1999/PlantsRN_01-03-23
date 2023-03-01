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

function TabBarNav(props) {
  const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? <HomeActive /> : <HomeIcon />;
              } else if (route.name === 'Cart') {
                iconName = focused ? <CartActive /> : <CartIcon />;
              } else if (route.name === 'WishList') {
                iconName = focused ? <LikeActive /> : <LikeIcon />;
              } else {
                iconName = focused ? <UserActive /> : <UserIcon />;
              }
              return iconName;
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#BFC2C8',
            tabBarShowLabel: route.name === 'ProductDetail' ? true : false,
          })}>
          <Tab.Screen name="HomesStack" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="WishList" component={Wishlist} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
  );
}

export default TabBarNav;
