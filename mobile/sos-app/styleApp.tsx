import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create(
   {
      flexOne: {
         flex: 1
      },
      screenContainer: {
         flex: 1,
         // backgroundColor: '#fff',
         alignItems: 'center',
         // justifyContent: 'space-between',
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
         marginBottom: 20,
         marginHorizontal: 15
      },
      map: {
         // width: Dimensions.get('window').width - 40,
         height: 200
      },
      heading: {
         fontWeight: 'bold',
         fontSize: 16,
         marginBottom: 5
      },
      contactsList: {},
      contactListItem: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         marginBottom: 15
      },
      leftSided: {
         flexDirection: 'row',
         alignItems: 'center',
         // justifyContent: 'space-between',
         // marginBottom: 10
      },
      nameCircle: {
         width: 40,
         height: 40,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 20,
         marginRight: 15,
         backgroundColor: '#dedede'
      },
      nameCircleText: {
         color: '#fff',
         fontSize: 18
      },
      modalView: {
         height: Dimensions.get('window').height - 40,
         margin: 20,
         backgroundColor: 'white',
         borderRadius: 10,
         // padding: 35,
         alignItems: 'center',
         // shadowColor: '#000',
         // shadowOffset: {
         //    width: 0,
         //    height: 2
         // },
         // shadowOpacity: 0.25,
         // shadowRadius: 4,
         // elevation: 5
      },
      button: {
         borderRadius: 20,
         // padding: 10,
         // elevation: 2
      },
      buttonOpen: {
         backgroundColor: '#39d02d'
      },
      buttonClose: {
         backgroundColor: '#39bdff',
         padding: 10,
         marginVertical: 20
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