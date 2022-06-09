// modules
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';

const _requestLocationPermission = async (): Promise<boolean> => {
   const { status } = await Location.requestForegroundPermissionsAsync();
   return status === 'granted';
}

const _requestContactsPermission = async (): Promise<boolean> => {
   const { status } = await Contacts.requestPermissionsAsync();
   return status === 'granted';
}

export {
   _requestLocationPermission,
   _requestContactsPermission
}