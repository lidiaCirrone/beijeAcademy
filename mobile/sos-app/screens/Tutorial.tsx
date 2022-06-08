import React, { FunctionComponent } from 'react';

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

         <View>
            <Pressable style={[styleApp.tutorialSection]} onPress={goToHome}>
               <Text>All set?</Text>
               <Text style={styleApp.tutorialLink}>Go back to the homepage!</Text>
            </Pressable>
         </View>
         
         {/* ViewPager */}

      </View>
   )
}

export default Tutorial;