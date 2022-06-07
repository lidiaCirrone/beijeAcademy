import React, { FunctionComponent, useEffect, useState } from 'react';

// modules
import { Button, Text, View } from 'react-native';
import * as Location from 'expo-location';

// styles
import styleApp from '../styleApp';


interface State {
   hasLocationPermission: boolean;
}

const initialState: State = {
   hasLocationPermission: false
}

const Home: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);

   const requestLocationPermission = async (): Promise<void> => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setState({
         ...state,
         hasLocationPermission: status === 'granted'
      })
   }
   useEffect(() => {
      requestLocationPermission()
   }, [])

   if (!state.hasLocationPermission) {

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

   } else {

      return (
         <View style={[styleApp.errorScreen]}>
            <Text>In order for this app to work, you must grant us permission to access Location, Contacts and SMS.</Text>
            {/* open settings App */}
         </View>
      )

   }
}

export default Home;