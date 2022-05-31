import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import styleApp
 from './styleApp';

const App: FunctionComponent = () => {

   return (
      <View style={styleApp.container}>
         <Text style={styleApp.sentence}>Open up App.tsx to start working on your app!</Text>
         <StatusBar style="auto" />
      </View>
   );
}

export default App;