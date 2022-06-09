import React from 'react';

// modules
import { Text, ImageBackground, View, StyleProp, ViewStyle } from 'react-native';

// styles
import styleApp from '../styleApp';


interface ContactPictureProps {
   picture: string | undefined;
   text: string;
   additionalCss?: StyleProp<ViewStyle>;
}

const ContactPicture = (props: ContactPictureProps) => {
   let viewCss = [styleApp.nameCircle, props.additionalCss];
   let imageCss = [styleApp.pictureCircle, props.additionalCss];

   if (props.picture === '') {
      return (
         <View style={viewCss}>
            <Text style={styleApp.nameCircleText}>
               {props.text}
            </Text>
         </View>
      )
   } else {
      return (
         <ImageBackground
            source={{ uri: props.picture }}
            imageStyle={{ borderRadius: 20 }}
            style={imageCss} />
      )
   }
}

export default ContactPicture;