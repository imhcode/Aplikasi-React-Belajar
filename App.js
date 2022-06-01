import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import { getAutomaticTypeDirectiveNames } from 'typescript';
import flower from './image.jpg';


const App = () => {
  return <StylingReactNativeComponent/>

};


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

const SampleComponent = () =>{
return (
  
  <View>
  <View style={{width:80,height:80, backgroundColor:'#fe2'}} />
  <Text>Fiqi</Text>
  <Home/>

  <Text>Arifianto</Text>
  <Text>Sudjono</Text>
  <Photo/>
  <TextInput style={{borderWidth:1}}></TextInput>
  <BoxGreen/>
  <Profile/>
</View>
)
}

const Home = () =>{
  return (
    <Text>inin adalah rumah fiqi</Text>
  );

}


const Photo = () => {

  return <Image 
  source={{uri: 'https://class.buildwithangga.com/storage/assets/images/avatars/uJRC-10505479_831927746877941_7987134008874437404_n.jpg'}}
  style={{height:80, width:80 }}
  
  ></Image>
}

class BoxGreen extends Component{
  render(){
    return <Text>Ini BOX GREEN</Text>
  }
}

class Profile extends Component{
  render(){
    return(
    <View 
      style={{ padding:10, backgroundColor:'#ddd'}}
    >
      <Image
      source={{uri:'https://placeimg.com/100/100/people'}}
      style={{width: 100, height: 100, borderRadius:50, borderWidth:2}}
      />
      <Text>Ini Profile aku</Text>
    </View>
    ) 
  }
}

export default App;
