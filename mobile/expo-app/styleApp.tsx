import { StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      container: {
         flex: 1,
         backgroundColor: '#39bdff',
         alignItems: 'center',
         justifyContent: 'space-between',
         paddingTop: 30,
         paddingBottom: 30
      },
      title: {
         color: '#fff',
         fontWeight: 'bold',
         fontSize: 20,
         marginBottom: 30
      },
      rowContainer: {
         flexDirection: 'row',
         marginTop: 20
      },
      input: {
         backgroundColor: '#fff',
         borderRadius: 5,
         padding: 10,
         marginRight: 10
      }
   }
)