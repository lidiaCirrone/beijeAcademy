import React, { FunctionComponent } from 'react';

// components
import EntryApp from './EntryApp';

// modules
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';


const App: FunctionComponent = () => {
   return (
      <SafeAreaView style={styles.appContainer}>
         <StatusBar style="dark" />
         <EntryApp />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1
   },
});

export default App;