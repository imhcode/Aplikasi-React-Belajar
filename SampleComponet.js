import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';



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

    export default SampleComponent;