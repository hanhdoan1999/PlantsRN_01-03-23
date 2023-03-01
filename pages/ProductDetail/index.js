import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import IconBack from '../../assets/icons/iconBack.svg';
import Star from '../../assets/icons/start.svg';
import Like from '../../assets/icons/blackHeart.svg';
import LikeActive from '../../assets/icons/blackHeartActive.svg';
import CateItem from '../../components/CateItem';
import { useNavigation } from '@react-navigation/native';

function ProductDetail({route}) {
  const {des, name, price, start, isFavorite, img} = route.params;
  const navigation = useNavigation();
  const fakeSize = [
    {
      id: '1',
      name: '5 inch',
      isActive: false,
    },
    {
      id: '2',
      name: '10 inch',
      isActive: true,
    },
    {
      id: '3',
      name: '25 inch',
      isActive: false,
    },
    {
      id: '4',
      name: '50 inch',
      isActive: false,
    },
    {
      id: '5',
      name: '65 inch',
      isActive: false,
    },
  ];

  const [size, setSize] = useState(fakeSize);
  const handleSelectItem = id => {
    const newArr = size.map(el =>
      el.id === id ? {...el, isActive: true} : {...el, isActive: false},
    );
    setSize(newArr);
  };

  return (
    <View style={styles.containerDetail}>
      <View style={styles.imageW}>
        <TouchableOpacity style={styles.iconBack} onPress={()=>navigation.navigate("HomesStack")}>
          <IconBack />
        </TouchableOpacity>
        <Image source={img} style={styles.imageDetail} />
      </View>
      <View style={styles.nameW}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.namePrice}>{price}$</Text>
        </View>
        <View style={styles.star}>
          <Text style={styles.starText}>{start}</Text>
          <Star />
        </View>
      </View>
      <View style={styles.sizeW}>
        <Text style={styles.sizeText}>Select size</Text>
        <FlatList
          horizontal={true}
          // style={styles.listCate}
          showsHorizontalScrollIndicator={false}
          data={size}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <CateItem
                cate={item}
                // styleActive={item.isActive && styles.active}
                handleSelect={handleSelectItem}
              />
            );
          }}
        />
      </View>
      <Text style={styles.desTitle}>Description</Text>
      <Text style={styles.des}>
        Prickly pear is a drought-resistant and hardy cactus that blooms with
        yellow-golden flowers in summer.
      </Text>
      <View style={styles.bottomDetail}>
        <View style={styles.heartW}>
          {isFavorite ? <LikeActive/> : <Like style={styles.likeIcon}/>}
        </View>
        <TouchableOpacity style = {styles.btnAddToCart}>
          <Text style = {styles.addToCartText} >Add to cart</Text>
        </TouchableOpacity>
        {/* <Button title="Add to cart" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDetail: {
    padding: 24,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  imageW: {
    position: 'relative',
    height: 361,
    width: '100%',
  },
  iconBack: {
    position: 'absolute',
    zIndex:1
  },
  imageDetail: {
    position: 'absolute',
    width: '100%',
    height: 361,
    bottom: 0,
  },
  nameW: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 28,
    marginBottom: 20,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 30,
    color: '#000000',
  },
  namePrice: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  starText: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: '#FFBB56',
  },
  sizeW: {},
  sizeText: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: '#000000',
    marginBottom: 12,
  },
  desTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: '#000000',
    marginBottom: 12,
    marginTop: 20,
  },
  des: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  bottomDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  heartW: {
    width: 52,
    height: 52,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  likeIcon: {
    width: 20,
  },
  btnAddToCart:{
    width:229,
    height:52,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#D3B398",
    borderRadius:12
  },
  addToCartText:{
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: '#ffffff',
  }
});

export default ProductDetail;
