import React, { FunctionComponent, useEffect, useState } from 'react';

// modules
import { Button, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

// styles
import styleApp from '../styleApp';


interface MarkerProps {
   latitude: number;
   longitude: number;
}

interface MapViewProps {
   latitude: number;
   longitude: number;
   latitudeDelta: number;
   longitudeDelta: number;
}

interface State {
   hasLocationPermission: boolean,
   location?: Location.LocationObject,
   mapCoordinates?: MapViewProps,
   markerCoordinates?: MarkerProps
}

const initialState: State = {
   hasLocationPermission: false
}

const Home: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);

   const requestLocationPermission = async (): Promise<void> => {

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);
      let mapPosition = {
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
      };
      let markerPosition = {
         latitude: location.coords.latitude,
         longitude: location.coords.longitude
      }
      setState({
         ...state,
         hasLocationPermission: status === 'granted',
         location: location,
         mapCoordinates: mapPosition,
         markerCoordinates: markerPosition
      })
   }
   useEffect(() => {
      requestLocationPermission()
   }, [])

   if (state.hasLocationPermission) {

      return (
         <View style={styleApp.screenContainer}>

            <View style={styleApp.sectionContainer}>
               <Text style={styleApp.heading}>Your location</Text>
               {/* <View style={styles.container}> */}
               <MapView
                  style={styleApp.map}
                  region={state.mapCoordinates}
               >
                  <Marker coordinate={state.markerCoordinates} title='You' />
               </MapView>
               {/* </View> */}
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