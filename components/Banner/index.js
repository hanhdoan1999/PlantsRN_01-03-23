import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function Banner(props) {
  return (
    <ImageBackground source = {require('../../assets/image/banner.png')} style={styles.bannerW}>
      {/* <Text>hanh</Text> */}
      <View style={styles.bannerContent}>
        <Text style={styles.bannerHeader}>
        Free shipping
        </Text>
        <View style={styles.bannerDes}>
          <Text style={styles.bannerDesL}>
          When ordering
          </Text>
          <Text style={styles.bannerDesR}>
          from 40$
          </Text>
        </View>
      </View>
      <Image style={styles.bannerItem} source = {require('../../assets/image/Saly.png')}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bannerW:{
    height: 92,
    position:"relative",
    // alignItems:"center",
    justifyContent:"center"
  },
  bannerItem:{
    position:"absolute",
    right:0,
    bottom:0 
  },
  bannerHeader: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
    fontSize:14,
    lineHeight:20, 
    color: "#000000"
  },
  bannerContent:{
    paddingLeft: 24
    // position:"absolute",
    // top:"50%",
    // transform: "translateY(-50%)"
  },
  bannerDes:{
    flexDirection:"row",
    gap:4
  },
  bannerDesL:{
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    fontSize:12,
    lineHeight:20, 
    color: "#808080"
  },
  bannerDesR:{
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    fontSize:12,
    lineHeight:20, 
    color: "#ffffff",
    backgroundColor:"#FFBB56",
    borderRadius: 4,
    width:"auto",
    paddingHorizontal:4
  }
})

export default Banner;