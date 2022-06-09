import React, { FunctionComponent } from 'react';

// components
import Carousel from '../components/carousel/Carousel';

// modules
import { Text, Pressable, View } from 'react-native';

// styles
import styleApp from '../styleApp';


const Tutorial: FunctionComponent = (props) => {

   const goToHome = () => {
      props.navigation.navigate('Home');
   }

   return (
      <View style={styleApp.screenContainer}>
         
         <Carousel />

         <View>
            <Pressable style={styleApp.tutorialSection} onPress={goToHome}>
               <Text>No more doubts?</Text>
               <Text style={styleApp.tutorialLink}>Go back to the homepage!</Text>
            </Pressable>
         </View>

      </View>
   )
}

export default Tutorial;