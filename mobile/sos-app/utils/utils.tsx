// modules
import * as Contacts from 'expo-contacts';


const trimWhitespaces = (string: string): string => {
   return string.replace(/ /g, '');
}

function getContactPictureData(item: Contacts.Contact) {

   let initials = item.name[0];
   if (item.firstName && item.lastName) initials = `${item.firstName[0]}${item.lastName[0]}`;

   let pictureUri: string | undefined = '';
   if (item.image) pictureUri = item.image.uri;

   return [initials, pictureUri];
}

export {
   trimWhitespaces,
   getContactPictureData
}