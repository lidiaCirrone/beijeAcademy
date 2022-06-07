import React, { FunctionComponent, useEffect, useState } from 'react';

// modules
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import { Button, FlatList, ListRenderItem, ListRenderItemInfo, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// styles
import styleApp from '../styleApp';
import { ScrollView } from 'react-native-gesture-handler';


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
   hasLocationPermission: boolean;
   mapCoordinates?: MapViewProps;
   markerCoordinates?: MarkerProps;
   selectedContacts: [];
}

const initialState: State = {
   hasLocationPermission: false,
   selectedContacts: []
}

let allContacts: Contacts.Contact[] = [];

const Home: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);

   const _requestLocationPermission = async (): Promise<void> => {

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let location = await Location.getCurrentPositionAsync({});
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
         mapCoordinates: mapPosition,
         markerCoordinates: markerPosition
      })
   }

   const _requestContactsPermission = async (): Promise<void> => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') return;

      const { data } = await Contacts.getContactsAsync({
         fields: [Contacts.Fields.Name, Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
      });
      let filteredContacts = data.filter(person => person.phoneNumbers && person.phoneNumbers.length > 0 && person.phoneNumbers.some(item => item.label === 'mobile'));
      allContacts = filteredContacts;
   }

   useEffect(() => {
      _requestLocationPermission();
      _requestContactsPermission();
   }, [])

   const renderItem: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {

      return (
         // <View style={styleApp.todoContainer}>
         //    <View style={styleApp.todoHeader}>
         //       <Text style={styleApp.todoDatetime}>{item.datetime}</Text>
         //       <TouchableOpacity onPress={_deleteTodo(item.key)} >
         //          <Image source={require('./assets/bin.png')} style={styleApp.binIcon} />
         //       </TouchableOpacity>
         //    </View>
         //    <View>
         //       <Text>{item.content}</Text>
         //    </View>
         // </View>
         <View>
            <Text>{item.name}</Text>
            {(item.phoneNumbers && item.phoneNumbers.length > 0) &&
               < Text > {item.phoneNumbers[0].number?.replace(/ /g, '')}</Text>
            }
         </View >
      );
   };

   if (state.hasLocationPermission) {

      return (
         <View style={styleApp.screenContainer}>
            {/* <ScrollView> */}

            <View style={styleApp.sectionContainer}>
               <Text style={styleApp.heading}>Your location</Text>
               <MapView
                  style={styleApp.map}
                  region={state.mapCoordinates}
               >
                  <Marker coordinate={state.markerCoordinates} title='You' />
               </MapView>
            </View>

            <View style={styleApp.sectionContainer}>
               <Text style={styleApp.heading}>Your contacts</Text>
               {(allContacts && allContacts.length > 0) &&
                  <FlatList data={allContacts} renderItem={renderItem} style={styleApp.contactsList} />
               }
            </View>


            <View style={styleApp.sectionContainer}>
               <Button title='Ask for help' />
            </View>

            {/* </ScrollView> */}
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