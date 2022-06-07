import React, { FunctionComponent } from 'react';

// modules
import { Button, Text, View } from 'react-native';

// styles
import styleApp from '../styleApp';


const Home: FunctionComponent = () => {
   return (
      <View style={styleApp.screenContainer}>

         <View style={styleApp.sectionContainer}>
            <Text>Your location</Text>
            {/* MapView */}
         </View>

         <View style={styleApp.sectionContainer}>
            <Text>Your contacts</Text>
            {/* Contacts */}
         </View>


         <View style={styleApp.sectionContainer}>
            <Button title='Ask for help' />
         </View>

      </View>
   )
}

export default Home;