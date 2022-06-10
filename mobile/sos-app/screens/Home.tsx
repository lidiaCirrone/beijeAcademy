import React, { FunctionComponent, useEffect, useState } from 'react';

// components
import SelectedContacts from '../components/selectedContacts/SelectedContacts';
import ContactsModal from '../components/contactsModal/ContactsModal';

// modules
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import * as Linking from 'expo-linking';
import { Modal, Pressable, Text, View } from 'react-native';
import MapView, { Marker, LatLng, AnimatedRegion } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

// styles
import styleApp from '../styleApp';

// utils
import { _requestLocationPermission, _requestContactsPermission } from '../utils/permissions';
import { trimWhitespaces } from '../utils/utils';

interface HomeProps {
   navigation: StackNavigationProp<ParamListBase>;
}

interface MapViewProps {
   latitude: number;
   longitude: number;
   latitudeDelta: number;
   longitudeDelta: number;
}

interface State {
   hasLocationPermission: boolean;
   hasContactsPermission: boolean;
   contactsModalVisible: boolean;
   selectedContacts: Contacts.Contact[];
   mapCoordinates?: MapViewProps;
   markerCoordinates?: LatLng | AnimatedRegion;
}

const initialState: State = {
   hasLocationPermission: false,
   hasContactsPermission: false,
   contactsModalVisible: false,
   selectedContacts: []
}

let allContacts: Contacts.Contact[] = [];

const Home: FunctionComponent<HomeProps> = (props: HomeProps) => {

   const [state, setState] = useState<State>(initialState);

   const _setLocation = async (): Promise<State> => {
      let locationPermission = await _requestLocationPermission();
      let updatedState = Object.assign({});
      updatedState.hasLocationPermission = locationPermission;
      if (locationPermission) {
         let location = await Location.getCurrentPositionAsync({});
         let coordinates = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
         }
         let mapPosition = {
            ...coordinates,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
         }
         updatedState.mapCoordinates = mapPosition;
         updatedState.markerCoordinates = coordinates;
      }
      return updatedState;
   }

   const _setContacts = async (): Promise<State> => {
      let contactsPermission = await _requestContactsPermission();
      let newState = Object.assign({});
      newState.hasContactsPermission = contactsPermission;
      if (contactsPermission) {
         const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
         });
         let filteredContacts = data.filter(person => person.phoneNumbers && person.phoneNumbers.length > 0 && person.phoneNumbers.some(item => item.label === 'mobile'));
         let storageSelectedContacts = [];
         let results = await AsyncStorage.getItem('selectedContacts');
         if (results !== null && results.length > 0) storageSelectedContacts = JSON.parse(results);
         allContacts = filteredContacts;
         newState.selectedContacts = storageSelectedContacts;
      }
      return newState;
   }

   const _setPermissions = async (): Promise<void> => {
      let newStateLocation = await _setLocation();
      let newStateContacts = await _setContacts();
      setState(Object.assign({}, state, newStateLocation, newStateContacts));
   }

   useEffect(() => {
      _setPermissions();
   }, [])

   const toggleModal = () => {
      setState({
         ...state,
         contactsModalVisible: !state.contactsModalVisible
      });
   }

   const _handleCheck = (contactItem: Contacts.Contact) => async (): Promise<void> => {
      let updatedSelectedContacts: Contacts.Contact[] = state.selectedContacts;
      updatedSelectedContacts.find(item => item.id == contactItem.id)
         ? updatedSelectedContacts = updatedSelectedContacts.filter(item => item.id !== contactItem.id)
         : updatedSelectedContacts = [...updatedSelectedContacts, contactItem];
      await AsyncStorage.setItem('selectedContacts', JSON.stringify(updatedSelectedContacts));
      setState({
         ...state,
         selectedContacts: updatedSelectedContacts
      });
   }

   const _resetSelection = async (): Promise<void> => {
      await AsyncStorage.clear();
      setState({
         ...state,
         selectedContacts: []
      });
   }

   const _askForHelp = async (): Promise<void> => {
      const smsAvailable = await SMS.isAvailableAsync();
      if (!smsAvailable) return;
      let phoneNumbersArray: Array<string> = [];
      state?.selectedContacts.forEach(person => {
         if (person.phoneNumbers && person.phoneNumbers[0].number) {
            phoneNumbersArray.push(trimWhitespaces(person.phoneNumbers[0].number));
         }
      });
      let googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${state?.markerCoordinates?.latitude},${state?.markerCoordinates?.longitude}`;
      let googleMapsAddress = await Location.reverseGeocodeAsync({ latitude: state?.markerCoordinates?.latitude, longitude: state?.markerCoordinates?.longitude });
      let addressString = `${googleMapsAddress[0]?.street} ${googleMapsAddress[0]?.streetNumber}, ${googleMapsAddress[0]?.postalCode} - ${googleMapsAddress[0]?.city} (${googleMapsAddress[0]?.country})`;
      let message = `Hi, I don't feel safe and this is where I am:\n${addressString}\n\nPlease, help me!\n\n${googleMapsURL}`;
      await SMS.sendSMSAsync(phoneNumbersArray, message);
   }

   const goToTutorial = () => {
      props.navigation.navigate('Tutorial');
   }

   const openSettings = () => {
      Linking.openSettings();
   }

   if (state.hasLocationPermission && state.hasContactsPermission) {

      return (
         <>
            <View style={styleApp.screenContainer}>

               <View>
                  <Pressable style={[styleApp.sectionContainer, styleApp.centered, styleApp.marginTop]} onPress={goToTutorial}>
                     <Text>Not sure what to do?</Text>
                     <Text style={styleApp.tutorialLink}>Have a look at the tutorial!</Text>
                  </Pressable>
               </View>

               <View style={styleApp.sectionContainer}>
                  <Text style={styleApp.heading}>Your location</Text>
                  <MapView
                     style={styleApp.map}
                     region={state.mapCoordinates}
                  >
                     {state.markerCoordinates &&
                        <Marker coordinate={state.markerCoordinates} title='You' />
                     }
                  </MapView>
               </View>

               <SelectedContacts
                  data={state.selectedContacts}
                  callback={toggleModal}
               />

               {(state.selectedContacts && state.selectedContacts.length > 0) ?
                  <View>
                     <Pressable style={[styleApp.askButton]} onPress={_askForHelp}>
                        <Text style={styleApp.textStyle}>Ask for help!</Text>
                     </Pressable>
                  </View>
                  :
                  <View style={styleApp.marginTop100}>
                     <Text>Add at least 1 contact to get started!</Text>
                  </View>
               }

            </View>

            <View style={styleApp.flexOne}>
               <Modal
                  animationType='slide'
                  visible={state.contactsModalVisible}
                  onRequestClose={toggleModal}>
                  <ContactsModal
                     selectedContacts={state.selectedContacts}
                     allContacts={allContacts}
                     handleCallback={_handleCheck}
                     resetCallback={_resetSelection}
                     modalCallback={toggleModal}
                  />
               </Modal>
            </View>

         </>
      )

   } else {

      return (
         <View style={[styleApp.errorScreen]}>
            <View>
               <Pressable style={[styleApp.sectionContainer, styleApp.centered]} onPress={openSettings}>
                  <Text>In order for this app to work, you must grant us permission to access Location and Contacts.</Text>
                  <Text style={styleApp.tutorialLink}>Please, tap here and check your settings</Text>
               </Pressable>
            </View>
         </View>
      )

   }
}

export default Home;