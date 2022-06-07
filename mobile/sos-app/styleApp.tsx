import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create(
   {
      flexOne: {
         flex: 1
      },
      screenContainer: {
         flex: 1,
         // backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'space-between',
         marginVertical: 20
      },
      errorScreen: {
         flex: 1,
         justifyContent: 'space-between',
         marginVertical: 20,
         marginHorizontal: 15
      },
      sectionContainer: {
         marginBottom: 20
      },
      map: {
         width: Dimensions.get('window').width - 40,
         height: 200
      },
      heading: {
         fontWeight: 'bold',
         fontSize: 16,
         marginBottom: 5
      }
   }
)