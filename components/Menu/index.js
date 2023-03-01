import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from "../../assets/icons/Home.svg";
import Cart from "../../assets/icons/Cart.svg";
import Like from "../../assets/icons/Like.svg";
import User from "../../assets/icons/User.svg";
import HomeActive from "../../assets/icons/HomeActive.svg";
import CartActive from "../../assets/icons/CartActive.svg";
import LikeActive from "../../assets/icons/LikeActive.svg";
import UserActive from "../../assets/icons/UserActive.svg";

function Menu(props) {
  const listMenu = [
    {
      id:"1",
      name:"Home",
      icon : <Home/>,
      iconActive: <HomeActive/>,
      isActive : true
    },
    {
      id:"2",
      name:"Cart",
      icon : <Cart/>,
      iconActive: <CartActive/>,
      isActive : false
    },
    {
      id:"3",
      name:"Like",
      icon : <Like/>,
      iconActive: <LikeActive/>,
      isActive : false
    },
    {
      id:"4",
      name:"User",
      icon : <User/>,
      iconActive: <UserActive/>,
      isActive : false
    },
  ]

  const [menu, setMenu] = useState(listMenu)

  const handleChangeTab = (item) => {
    const newArr =  menu.map(el => el.id == item.id ? {...el,isActive: true} : {...el,isActive:false})
    setMenu(newArr)
  }

  return (
    <View style={styles.menuContainer}>
      {menu.map((item,index) => {
        return (
          <TouchableOpacity onPress={()=> handleChangeTab(item)} key={index}>
            {item.isActive ?  item.iconActive : item.icon}
          </TouchableOpacity>
        )
      })}
      {/* <Home/>
      <Cart/>
      <Like/>
      <User/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent : "space-around",
    paddingVertical: 20,
    borderTopWidth:1,
    borderTopColor: "rgba(0, 0, 0, 0.05)",
    // marginTop:5
  }
})

export default Menu;