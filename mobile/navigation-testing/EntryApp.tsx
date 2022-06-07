import React, { FunctionComponent } from 'react';

// modules
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// components
import Camera from './screens/Camera';
import Home from './screens/Home';



const EntryApp: FunctionComponent = () => {

   const Stack = createStackNavigator();

   return (
      <NavigationContainer>

         <Stack.Navigator
            initialRouteName={'Home'}
         >
            <Stack.Screen
               name="Home"
               component={Home}
               options={
                  {
                     title: 'My home',
                     headerStyle: {
                        backgroundColor: '#999'
                     },
                     headerTintColor: '#fff',
                     headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24
                     }
                  }
               }
            />
            <Stack.Screen
               name="Camera"
               component={Camera}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default EntryApp;