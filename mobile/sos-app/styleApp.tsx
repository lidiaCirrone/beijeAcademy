import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      flexOne: {
         flex: 1
      },
      screenContainer: {
         flex: 1,
         alignItems: 'center',
         marginVertical: 20
      },
      errorScreen: {
         flex: 1,
         justifyContent: 'space-between',
         marginVertical: 20,
         marginHorizontal: 15
      },
      sectionContainer: {
         alignSelf: 'stretch',
         marginBottom: 40,
         marginHorizontal: 15
      },
      map: {
         height: 200
      },
      heading: {
         fontWeight: 'bold',
         fontSize: 16,
         marginBottom: 5
      },
      flexDirectionRow: {
         flexDirection: 'row'
      },
      contactsList: {
         marginTop: 15
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
      centered: {
         alignItems: 'center',
         marginRight: 10
      },
      nameCircle: {
         width: 40,
         height: 40,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 20,
         backgroundColor: '#dedede'
      },
      marginRight: {
         marginRight: 15
      },
      nameCircleSelected: {
         backgroundColor: '#666'
      },
      nameCircleText: {
         color: '#fff',
         fontSize: 18
      },
      pictureCircle: {
         width: 40,
         height: 40
      },
      spaceBetween: {
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      modalView: {
         height: Dimensions.get('window').height - 40,
         margin: 20,
         backgroundColor: 'white',
         borderRadius: 10,
         alignItems: 'center'
      },
      button: {
         borderRadius: 20
      },
      buttonOpen: {
         backgroundColor: '#39bdff',
         paddingHorizontal: 10,
         justifyContent: 'center'
      },
      buttonClose: {
         backgroundColor: '#39bdff',
         padding: 10,
         margin: 20
      },
      askButton: {
         borderRadius: 20,
         backgroundColor: '#ff8339',
         paddingVertical: 10,
         paddingHorizontal: 20,
         justifyContent: 'center',
         marginTop: 100
      },
      textStyle: {
         color: 'white',
         fontWeight: 'bold',
         textAlign: 'center'
      },
      modalText: {
         marginBottom: 15,
         textAlign: 'center',
         fontWeight: 'bold'
      }
   }
)