import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../../styles/globalStyle';
import Icon from '../../assets/icons/Icon.svg';
import BackIcon from '../../assets/icons/iconBack.svg';
import Menu from '../../components/Menu';
import CateItem from '../../components/CateItem';
import Banner from '../../components/Banner';
import ProductItem from '../../components/ProductItem';
import ArrowDown from "../../assets/icons/ArrowDown.svg";
import {useNavigation} from '@react-navigation/native'
function Home({navigation}) {
  const navigate = useNavigation()
  const fakeCate = [
    {
      id: '1',
      name: 'All',
      isActive: false,
    },
    {
      id: '2',
      name: 'Cacti',
      isActive: true,
    },
    {
      id: '3',
      name: 'In pots',
      isActive: false,
    },
    {
      id: '4',
      name: 'Dried flowers',
      isActive: false,
    },
    {
      id: '5',
      name: 'Flowers',
      isActive: false,
    },
  ];

  const fakeProducts = [
    {
      id:"1",
      name:"Echeveria",
      des:"From 3 inch",
      price: 25,
      start: 5,
      img: require("../../assets/image/image1.png"),
      isFavorite: true
    },
    {
      id:"2",
      name:"Pricky Pear",
      des:"From 5 inch",
      price: 20,
      start: 4.8,
      img: require("../../assets/image/image2.png"),
      isFavorite: true,
    },
    {
      id:"3",
      name:"Sanseria",
      des:"From 8 inch",
      price: 50,
      start: 4.5,
      img: require("../../assets/image/image2.png"),
      isFavorite: false
    },
    {
      id:"4",
      name:"Sanseria",
      des:"From 8 inch",
      price: 47,
      start: 4.5,
      img: require("../../assets/image/image1.png"),
      isFavorite: true
    },
    {
      id:"5",
      name:"Sanseria",
      des:"From 8 inch",
      price: 55,
      start: 4.5,
      img: require("../../assets/image/image3.png"),
      isFavorite: false
    },
    {
      id:"6",
      name:"Sanseria",
      des:"From 8 inch",
      price:56,
      start: 4.5,
      img: require("../../assets/image/image1.png"),
      isFavorite: true
    }
  ]
  const [cate, setCate] = useState(fakeCate);
  const [products, setProducts] = useState(fakeProducts);
  const [sort, setSort] = useState(false) // === des 

  const handleSelectItem = id => {
    const newArr = cate.map(el =>
      el.id === id ? {...el, isActive: true} : {...el, isActive: false},
    );
    setCate(newArr);
  };

  const addToFavorite = (item) => {
    const newArr = products.map(el =>
      el.id === item.id ? {...el, isFavorite: !item.isFavorite} : el,
    );
    setProducts(newArr);
  }

  const handleSort = () => {
    setSort((pre) => !pre)
    if(sort) {
      const newArr = products.sort((a,b)=> b.price - a.price);
      setProducts(newArr);
    } else {
      const newArr = products.sort((a,b)=> a.price - b.price);
      setProducts(newArr);
    }
  }

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.homeInner}>
        <View style={styles.mainSection}>
          <View style={styles.herder}>
            <View style={styles.herderLeft}>
              <BackIcon />
              <Text style={[styles.title, styles.herderLeftText]}>
                All plants
              </Text>
            </View>
            <Icon />
          </View>
          <View>
            <Text style={styles.title}>Plant</Text>
            <Text style={styles.title}>is for room</Text>
          </View>
          <View style={styles.banner}>
            <Banner />
          </View>
          <FlatList
            horizontal={true}
            // style={styles.listCate}
            showsHorizontalScrollIndicator={false}
            data={cate}
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
          <TouchableOpacity style={styles.sort} onPress={()=>handleSort()}>
            <Text style={styles.sortText}>Price</Text>
            <ArrowDown/>
          </TouchableOpacity>
          <View style={styles.listProduct}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  handleAddToFavorite={addToFavorite}
                  navigation={navigation}
                />
              );
            }}
          />
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.menuSection}>
        <Menu />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    // justifyContent: "flex-end"
  },
  mainSection: {
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  herder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  herderLeft: {
    flexDirection: 'row',
    gap: 16,
  },
  herderLeftText: {
    fontSize: 15,
    lineHeight: 20,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 34,
    color: '#000000',
  },
  banner: {
    marginTop: 40,
    marginBottom: 30,
  },
  listCate: {
    marginTop: 28,
    marginBottom: 24,
  },
  sort :{
    flexDirection: "row",
    alignItems:"center",
    gap:5,
    marginTop:20
  },
  listProduct:{
    marginVertical:10
  }
});

export default Home;
