import { StyleSheet } from "react-native";

export default StyleSheet.create(
   {
      container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center'
      },
      homeContainer: {
         flex: 1,
         alignSelf: 'stretch',
         backgroundColor: '#39bdff',
         alignItems: 'center',
         justifyContent: 'center'
      },
      textContainer: {
         width: 300,
         height: 300,
         backgroundColor: 'white'
      },
      input: {
         height: 40,
         width: 300,
         margin: 12,
         borderWidth: 1,
         padding: 10,
      },
      camera: {
         width: 400,
         height: 300
      },
      buttonContainer: {
         flex: 1,
         backgroundColor: 'transparent',
         flexDirection: 'row',
         margin: 20
      },
      text: {
         fontSize: 18,
         color: 'white'
      },
      centeredView: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 22
      },
      modalView: {
         margin: 20,
         backgroundColor: 'white',
         borderRadius: 20,
         padding: 35,
         alignItems: 'center',
         shadowColor: '#000',
         shadowOffset: {
            width: 0,
            height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 4,
         elevation: 5
      },
      button: {
         borderRadius: 20,
         padding: 10
      },
      buttonOpen: {
         backgroundColor: '#fff',
         marginTop: 30
      },
      buttonClose: {
         backgroundColor: '#777'
      },
      textStyle: {
         color: 'white',
         fontWeight: 'bold',
         textAlign: 'center'
      },
      modalText: {
         marginBottom: 15,
         textAlign: 'center'
      }
   }
)
