import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CateItem({cate, handleSelect}) {
  return (
    <TouchableOpacity onPress = {()=> handleSelect(cate.id)}>
      <Text style={[styles.cateText, cate.isActive && styles.cateTextActive]}>{cate.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cateText:{
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    fontSize:13,
    lineHeight:16,
    color: "#505050",
    paddingVertical: 8,
    paddingHorizontal:12,
    borderRadius:10,
    backgroundColor:"#F4F4F4",
    marginRight:12
  },
  cateTextActive:{
    color: '#FFFFFF',
    backgroundColor: '#D3B398',
  }
})

export default CateItem;