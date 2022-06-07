import React, { FunctionComponent, useEffect, useState } from 'react';

// modules
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import { Button, FlatList, GestureResponderEvent, ListRenderItem, ListRenderItemInfo, Modal, Pressable, Text, View } from 'react-native';
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
   contactsModalVisible: boolean;
   selectedContacts: Object[];
}

const initialState: State = {
   hasLocationPermission: false,
   contactsModalVisible: false,
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

   const toggleModal = () => {
      setState({
         ...state,
         contactsModalVisible: !state.contactsModalVisible
      });
   }

   const handleCheck = (contactItem: Object) => (event: GestureResponderEvent): void => {
      let updatedSelectedContacts: Object[] = state.selectedContacts;
      if (!updatedSelectedContacts.includes(contactItem)) {
         updatedSelectedContacts.push(contactItem);
      } else {
         updatedSelectedContacts.splice(updatedSelectedContacts.indexOf(contactItem), 1);
      }
      setState({
         ...state,
         selectedContacts: updatedSelectedContacts
      });
   }

   const resetSelection = (): void => {
      setState({
         ...state,
         selectedContacts: []
      });
   }

   const renderItem: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {

      let initials = item.name[0];
      if (item.firstName && item.lastName) initials = `${item.firstName[0]}${item.lastName[0]}`;
      let cssClass: Object | [] = styleApp.nameCircle;
      if (state.selectedContacts.includes(item)) cssClass = [styleApp.nameCircle, styleApp.nameCircleSelected];

      return (
         <Pressable onPress={handleCheck(item)}>
            <View style={styleApp.contactListItem}>
               <View style={styleApp.leftSided}>

                  <View style={cssClass}>
                     <Text style={styleApp.nameCircleText}>
                        {!state.selectedContacts.includes(item) ? initials : '✓'}
                     </Text>
                  </View>

                  <View>
                     <Text>{item.name}</Text>
                  </View >
               </View >
               {(item.phoneNumbers && item.phoneNumbers.length > 0) &&
                  < Text style={{ fontSize: 10 }} > {item.phoneNumbers[0].number?.replace(/ /g, '')}</Text>
               }
            </View>
         </Pressable>
      );
   };

   if (state.hasLocationPermission) {

      return (
         <>
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
                  <Pressable style={[styleApp.button, styleApp.buttonOpen]} onPress={toggleModal}>
                     <Text style={styleApp.textStyle}>Select Contacts</Text>
                  </Pressable>
                  {(state.selectedContacts && state.selectedContacts.length > 0) &&
                     <Text>Selected contacts here</Text>
                     // <FlatList data={allContacts} renderItem={renderItem} style={styleApp.contactsList} />
                  }
               </View>


               <View style={styleApp.sectionContainer}>
                  <Button title='Ask for help' />
               </View>

               {/* </ScrollView> */}
            </View>

            <View style={styleApp.flexOne}>
               <Modal
                  animationType="slide"
                  transparent={true}
                  visible={state.contactsModalVisible}
                  onRequestClose={toggleModal}>
                  <View style={styleApp.flexOne}>
                     <View style={styleApp.modalView}>
                        <Text style={styleApp.modalText}>Choose your emergency contacts</Text>
                        {(allContacts && allContacts.length > 0) &&
                           <FlatList data={allContacts} renderItem={renderItem} style={styleApp.contactsList} />
                        }
                        <Pressable
                           style={[styleApp.button, styleApp.buttonClose]}
                           onPress={resetSelection}>
                           <Text style={styleApp.textStyle}>Reset</Text>
                        </Pressable>
                        <Pressable
                           style={[styleApp.button, styleApp.buttonClose]}
                           onPress={toggleModal}>
                           <Text style={styleApp.textStyle}>Confirm</Text>
                        </Pressable>
                     </View>
                  </View>
               </Modal>
            </View>

         </>
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