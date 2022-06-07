import React, { FunctionComponent } from 'react';

// modules
import { Text, View } from 'react-native';

// styles
import styleApp from '../styleApp';


const Home: FunctionComponent = () => {
   return (
      <View style={styleApp.screenContainer}>
         <Text>
            Screen Home
         </Text>
      </View>
   )
}

export default Home;