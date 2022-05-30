import React, {FunctionComponent} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App: FunctionComponent = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.sentence}>Open up App.tsx to start working on your app!</Text>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#39bdff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   sentence: {
      color: '#fff'
   }
});

export default App;