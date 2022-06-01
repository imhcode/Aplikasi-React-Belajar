import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponet';
import StylingReactNativeComponent from './StylingReactNativeComponent';


const App = () => {
  return (
  <View>
    <ScrollView>
      <SampleComponent/>  
      <StylingReactNativeComponent/>
    </ScrollView>
  </View>
  )

};

export default App;
