import React from 'react';

// modules
import * as Contacts from 'expo-contacts';
import { FlatList, GestureResponderEvent, ImageBackground, ListRenderItem, ListRenderItemInfo, Pressable, Text, View } from 'react-native';

// styles
import styleApp from '../styleApp';


const SelectedContacts = (props: { data: Contacts.Contact[], callback: (event: GestureResponderEvent) => void }) => {

   const renderSelectedContacts: ListRenderItem<Contacts.Contact> = ({ item }: ListRenderItemInfo<Contacts.Contact>) => {

      let initials = item.name[0];
      if (item.firstName && item.lastName) initials = `${item.firstName[0]}${item.lastName[0]}`;

      let picture: string | undefined = '';
      if (item.image) picture = item.image.uri;

      return (
         <View style={styleApp.centered} >

            {picture === '' ?
               <View style={styleApp.nameCircle}>
                  <Text style={styleApp.nameCircleText}>
                     {initials}
                  </Text>
               </View>
               :
               <ImageBackground
                  source={{ uri: picture }}
                  imageStyle={{ borderRadius: 20 }}
                  style={styleApp.pictureCircle} />
            }

            <Text>{item.name}</Text>

            {(item.phoneNumbers && item.phoneNumbers.length > 0) &&
               < Text style={{ fontSize: 10 }} > {item.phoneNumbers[0].number?.replace(/ /g, '')}</Text>
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