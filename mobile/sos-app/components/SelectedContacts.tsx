import React from 'react';

// modules
import * as Contacts from 'expo-contacts';
import { FlatList, GestureResponderEvent, ListRenderItem, ListRenderItemInfo, Pressable, Text, View } from 'react-native';

// styles
import styleApp from '../styleApp';

// utils
import { trimWhitespaces } from '../utils/utils';
import ContactPicture from './ContactPicture';


const SelectedContacts = (props: { data: Contacts.Contact[], callback: (event: GestureResponderEvent) => void }) => {

   const renderSelectedContacts: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {

      let initials = item.name[0];
      if (item.firstName && item.lastName) initials = `${item.firstName[0]}${item.lastName[0]}`;

      let pictureUri: string | undefined = '';
      if (item.image) pictureUri = item.image.uri;

      return (
         <View style={[styleApp.centered, styleApp.marginRight]} >

            <ContactPicture
               text={initials}
               picture={pictureUri}
            />

            <Text>{item.name}</Text>

            {(item.phoneNumbers && item.phoneNumbers[0].number) &&
               < Text style={{ fontSize: 10 }} > {trimWhitespaces(item.phoneNumbers[0].number)}</Text>
            }
         </View>
      );
   };

   let selectedContactsAmount = props.data?.length;

   return (
      <View style={styleApp.sectionContainer}>
         <View style={styleApp.spaceBetween}>
            <Text style={styleApp.heading}>Your contacts ({selectedContactsAmount})</Text>
            <Pressable style={[styleApp.button, styleApp.openButton]} onPress={props.callback}>
               <Text style={styleApp.textStyle}>Edit</Text>
            </Pressable>
         </View>
         {(props.data && props.data.length > 0)
            ?
            <FlatList
               data={props.data}
               renderItem={renderSelectedContacts}
               keyExtractor={item => `selected${item.id}`}
               style={styleApp.contactsList}
               horizontal={true}
               contentContainerStyle={styleApp.flexDirectionRow}
            />
            :
            <Text>You haven't added any contacts yet.</Text>
         }
      </View>
   )
}

export default SelectedContacts;