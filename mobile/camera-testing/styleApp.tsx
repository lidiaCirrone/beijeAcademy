import { StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      container: {
         flex: 1,
         alignSelf: 'stretch',
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
      },
      cameraContainer: {
         flex: 3,
         alignSelf: 'stretch'
      },
      touchablesContainer: {
         position: 'absolute',
         bottom: 0,
         flexDirection: 'row',
         flex: 1,
         width: '100%',
         padding: 20,
         justifyContent: 'space-between'
      },
      photosContainer: {
         flex: 1,
         flexDirection: 'row',
         flexWrap: 'wrap',
         // justifyContent: 'space-between',
         margin: 5
      },
      photoImage: {
         flex: 0,
         width: 50,
         height: 50,
         margin: 5
      }
   }
)