import React, { FunctionComponent } from 'react';

// components
import ContactPicture from '../contactPicture/ContactPicture';

// modules
import * as Contacts from 'expo-contacts';
import { FlatList, GestureResponderEvent, ListRenderItem, ListRenderItemInfo, Pressable, Text, View } from 'react-native';

// styles
import styleApp from '../../styleApp';

// utils
import { trimWhitespaces } from '../../utils/utils';


interface SelectedContactsProps {
   data: Contacts.Contact[];
   callback: (event: GestureResponderEvent) => void;
}

const SelectedContacts: FunctionComponent<SelectedContactsProps> = (props: SelectedContactsProps) => {

   const renderSelectedContacts: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {

      return (
         <View style={[styleApp.centered, styleApp.marginRight]} >

            <ContactPicture
               data={item}
            />

            <Text>{item.name}</Text>

            {(item.phoneNumbers && item.phoneNumbers[0].number) &&
               < Text style={styleApp.smaller} > {trimWhitespaces(item.phoneNumbers[0].number)}</Text>
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