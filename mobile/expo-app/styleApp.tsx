import { StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      container: {
         flex: 1,
         alignSelf: 'stretch',
         backgroundColor: '#7fbede',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: 30
      },
      title: {
         color: '#fff',
         fontWeight: 'bold',
         fontSize: 24,
         marginBottom: 30
      },
      toDoList: {
         alignSelf: 'stretch'
      },
      todoContainer: {
         backgroundColor: '#fff',
         borderRadius: 5,
         marginBottom: 30,
         padding: 20
      },
      todoHeader: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginBottom: 14
      },
      todoDatetime: {
         fontStyle: 'italic'
      },
      binIcon: {
         width: 20,
         height: 20,
         opacity: 0.3
      },
      rowContainer: {
         alignSelf: 'stretch',
         flexDirection: 'row'
      },
      input: {
         flex: 1,
         backgroundColor: '#fff',
         borderRadius: 5,
         padding: 10,
         marginRight: 10
      }
   }
)