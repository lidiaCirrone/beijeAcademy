import React, {FunctionComponent} from 'react';

// modules
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';

// styles
import styleApp from './styleApp';


const App: FunctionComponent = () => {
  return (
    <SafeAreaView style={styleApp.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </SafeAreaView>
  );
}

export default App;
