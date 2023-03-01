import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Start from '../../assets/icons/start.svg';
import Like from '../../assets/icons/Like.svg';
import LikeFull from '../../assets/icons/LikeFull.svg';
import {useNavigation} from '@react-navigation/native'
function ProductItem({item, handleAddToFavorite, navigation}) {

  const randomBG = ["#FCF0F0","#EBF4EE","#F2F7FF","#D3B398"]
  const navigate = useNavigation()
  return (
    <View style={styles.itemW}>
      <View style={[styles.imageBg,{backgroundColor:randomBG[Math.floor(Math.random()*randomBG.length)]}]}>
      {/* <View style={styles.imageBg}> */}
        <View style={styles.iconHeart}>
          <TouchableOpacity onPress={()=>handleAddToFavorite(item)}>
            {item.isFavorite ? <LikeFull/> : <Like/>}
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={item.img} />
      </View>
      <TouchableOpacity style={styles.content} onPress = {()=> navigate.navigate("ProductDetail", item)}>
        <View style={styles.productTop}>
          <Text style={styles.productName}>{item.name}</Text>
          <View style={styles.productStart}>
            <Text style={styles.productStartNum}>{item.start}</Text>
            <Start />
          </View>
        </View>
        <Text style={styles.productDes}>{item.des}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemW: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  imageBg: {
    flex: 3,
    height: 72,
    backgroundColor: '#F2F7FF',
    borderRadius: 10,
    position: 'relative',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    height: 88,
    position: 'absolute',
    bottom:0
  },
  iconHeart: {
    width:25,
    height:25,
    backgroundColor: "#ffffff",
    position: 'absolute',
    zIndex:1,
    bottom:8,
    right:8,
    borderRadius:6,
    alignItems: "center",
    justifyContent:"center"
  },
  content: {
    flex: 5,
  },
  productName: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
  },
  productTop: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  productStartNum: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    color: '#FFBB56',
  },
  productStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  productDes: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
    opacity: 0.5,
    marginTop: 4,
  },
  productPrice: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
    color: '#000000',
    marginTop: 8,
  },
});

export default ProductItem;
