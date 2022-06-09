import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      modalView: {
         flex: 1,
         height: Dimensions.get('window').height - 40,
         margin: 20,
         backgroundColor: 'white',
         alignItems: 'center'
      },
      modalText: {
         marginBottom: 15,
         textAlign: 'center',
         fontWeight: 'bold'
      },
      contactListItem: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         marginBottom: 15
      },
      leftSided: {
         flexDirection: 'row',
         alignItems: 'center'
      },
      nameCircleSelected: {
         backgroundColor: '#666'
      }
   }
)