import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import flower from './image.jpg';

const StylingReactNativeComponent = () =>{
    return (
      <View>
        <Text style={styles.text} >Styling Componnet</Text>
        <View
          style={{
            width:100,
            height:100,
            backgroundColor:'#ff3ddd',
            borderWidth:2,
            marginTop:10,
            marginLeft:10
  
          }}
        >
        </View>
        <View style={{padding:12, backgroundColor:'#f2f2f2', width:212, borderRadius:8}}>
          <Image source={flower} style={{width:188, height:107, borderRadius:8}} ></Image>
          <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}} >Flower Indah</Text>
          <Text style={{fontSize:12, fontWeight:'bold',color:'#ffa000', marginTop:12}} >Rp. 50.000,-</Text>
          <Text style={{fontSize:12, fontWeight:'300', marginTop:12}} >Jakarta Barat</Text>
          <View style={{
            backgroundColor:'#6fcf97',
            paddingVertical:6,
            borderRadius:25,
            marginTop:20
          }}>
            <Text
              style={{
                textAlign:'center',
                color:'#fff',
                fontWeight:'600',
                fontSize:14,
  
              }}
            >Beli</Text>
          </View>
        </View>
  
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    text:{
      fontSize:18,
      color:'#ff3ddd',
      fontWeight:'bold',
      marginTop:10,
      marginLeft:10,
    }
  });

  export default StylingReactNativeComponent;