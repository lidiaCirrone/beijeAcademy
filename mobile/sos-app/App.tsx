import React, { FunctionComponent } from 'react';

// components
import EntryApp from './EntryApp';

// modules
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

// styles
import styleApp from './styleApp';


const App: FunctionComponent = () => {
   return (
      <SafeAreaView style={styleApp.flexOne}>
         <StatusBar style="auto" />
         <EntryApp />
      </SafeAreaView>
   );
}

export default App;
