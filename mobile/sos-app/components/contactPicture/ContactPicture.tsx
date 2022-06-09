import React, { FunctionComponent } from 'react';

// modules
import * as Contacts from 'expo-contacts';
import { Text, ImageBackground, View, StyleProp, ViewStyle } from 'react-native';

// styles
import styleApp from '../../styleApp';

// utils
import { getContactPictureData } from '../../utils/utils';


interface ContactPictureProps {
   data: Contacts.Contact;
   additionalCss?: StyleProp<ViewStyle>;
}

const ContactPicture: FunctionComponent<ContactPictureProps> = (props: ContactPictureProps) => {
   let [initials, pictureUri] = getContactPictureData(props.data);
   let viewCss = [styleApp.nameCircle, props.additionalCss];
   let imageCss = [styleApp.pictureCircle, props.additionalCss];

   if (pictureUri === '') {
      return (
         <View style={viewCss}>
            <Text style={styleApp.nameCircleText}>
               {initials}
            </Text>
         </View>
      )
   } else {
      return (
         <ImageBackground
            source={{ uri: pictureUri }}
            imageStyle={{ borderRadius: 20 }}
            style={imageCss} />
      )
   }
}

export default ContactPicture;