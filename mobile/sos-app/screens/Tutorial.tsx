import React, { ReactNode } from 'react';

// components
import Carousel from '../components/carousel/Carousel';

// modules
import { Text, Pressable, View } from 'react-native';
import { StackNavigationProp} from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

// styles
import styleApp from '../styleApp';


const Tutorial: ReactNode = (props: {navigation: StackNavigationProp<ParamListBase>}) => {

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