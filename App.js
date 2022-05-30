import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width:80,height:80, backgroundColor:'#fe2'}} />
      <Text>Fiqi</Text>
      <Home/>

      <Text>Arifianto</Text>
      <Text>Sudjono</Text>
      <Photo/>
      <TextInput style={{borderWidth:1}}></TextInput>
    </View>
    );
};

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

export default App;
