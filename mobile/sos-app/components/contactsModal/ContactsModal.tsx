// modules
import * as Contacts from 'expo-contacts';
import { View, Text, FlatList, Pressable, GestureResponderEvent, ListRenderItem, ListRenderItemInfo } from 'react-native';

// styles
import styleApp from '../../styleApp';
import ContactPicture from '../ContactPicture';

// utils
import { trimWhitespaces } from '../../utils/utils';



interface ContactsModalProps {
   selectedContacts: Contacts.Contact[];
   allContacts: Contacts.Contact[];
   handleCallback: (contactItem: Contacts.Contact) => (event: GestureResponderEvent) => void;
   resetCallback: (event: GestureResponderEvent) => void;
   modalCallback: (event: GestureResponderEvent) => void;
}

const ContactsModal = (props: ContactsModalProps) => {

   const renderItem: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {
      return (
         <Pressable onPress={props.handleCallback(item)}>
            <View style={styleApp.contactListItem}>
               <View style={styleApp.leftSided}>
                  {props.selectedContacts.includes(item) ?

                     <View style={[styleApp.nameCircle, styleApp.marginRight, styleApp.nameCircleSelected]}>
                        <Text style={styleApp.nameCircleText}>
                           ✓
                        </Text>
                     </View>

                     :

                     <ContactPicture
                        data={item}
                        additionalCss={styleApp.marginRight}
                     />
                  }
                  <View>
                     <Text>{item.name}</Text>
                  </View >
               </View >
               {(item.phoneNumbers && item.phoneNumbers[0].number) &&
                  < Text style={styleApp.smaller} > {trimWhitespaces(item.phoneNumbers[0].number)}</Text>
               }
            </View>
         </Pressable>
      );
   };

   return (
      <View style={[styleApp.flexOne, styleApp.modalView]}>
         <Text style={styleApp.modalText}>Choose your emergency contacts ({props.selectedContacts.length})</Text>
         {(props.allContacts && props.allContacts.length > 0) &&
            <FlatList data={props.allContacts} renderItem={renderItem} style={styleApp.contactsList} />
         }
         <View style={styleApp.spaceBetween}>
            <Pressable
               style={[styleApp.button, styleApp.resetButton]}
               onPress={props.resetCallback}>
               <Text style={styleApp.textStyle}>Reset</Text>
            </Pressable>
            <Pressable
               style={[styleApp.button, styleApp.closeButton]}
               onPress={props.modalCallback}>
               <Text style={styleApp.textStyle}>Save</Text>
            </Pressable>
         </View>
      </View>
   )
}

export default ContactsModal;