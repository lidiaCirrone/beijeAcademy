import React, { FunctionComponent, useState, useEffect } from 'react';

// modules
import { Text, View, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

// styles
import styleApp from '../styleApp.js';


interface State {
   text?: string | number;
   textButton?: string;
   obj?: object;
   hasPermission: boolean;
   typeCamera: CameraType;
   zoom: number;
   modalVisible: boolean;
}

const initialState: State = {
   text: 'Rosebud',
   textButton: 'USA',
   hasPermission: false,
   typeCamera: CameraType.back,
   zoom: 0,
   modalVisible: false
};

let camera: Camera | null;

const Home: FunctionComponent = (props) => {

   const [state, setState] = useState<State>(initialState)

   const requestPermCamere = async (): Promise<void> => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setState({
         ...state,
         hasPermission: status === 'granted'
      })
   }

   useEffect(() => {
      requestPermCamere()
   }, []);

   const switchCameraType = (): void => {
      setState({
         ...state,
         typeCamera: state.typeCamera === CameraType.back ? CameraType.front : CameraType.back
      });
   }

   const zoomCameraIn = (): void => {
      setState({
         ...state,
         zoom: state.zoom + 0.1
      })
   }

   const _takePicture = async (): Promise<void> => {
      let option: object = {
         quality: 0.5,
         base64: true
      }
      const photo: object = await camera.takePictureAsync(option);
      // console.log(photo);
   }

   const navigateToCamera = () => {
      console.log('props', props)
      props.navigation.navigate('Camera')
   }

   return (
      <View style={styleApp.homeContainer} >

         {state.hasPermission &&
            <Camera
               style={styleApp.camera}
               type={state.typeCamera}
               zoom={state.zoom}
               ref={(r) => {
                  camera = r
               }}
            >
               <View style={styleApp.buttonContainer}>
                  <TouchableOpacity
                     style={styleApp.button}
                     onPress={switchCameraType}>
                     <Text style={styleApp.text}> Flip </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={styleApp.button}
                     onPress={zoomCameraIn}>
                     <Text style={styleApp.text}> Zoom In </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={styleApp.button}
                     onPress={_takePicture}>
                     <Text style={styleApp.text}> Take Pic </Text>
                  </TouchableOpacity>


               </View>
            </Camera>
         }

         <Pressable style={[styleApp.button, styleApp.buttonOpen]} onPress={() => {
            setState({
               ...state,
               modalVisible: true
            });
         }}>
            <Text>Show Modal</Text>
         </Pressable>

         <Pressable style={[styleApp.button, styleApp.buttonOpen]} onPress={navigateToCamera}>
            <Text>Go to Camera</Text>
         </Pressable>

         <Modal
            animationType="slide"
            transparent={true}
            visible={state.modalVisible}
            onRequestClose={() => {
               Alert.alert('Modal has been closed.');
               setState({
                  ...state,
                  modalVisible: !state.modalVisible
               });
            }}>
            <View style={styleApp.centeredView}>
               <View style={styleApp.modalView}>
                  <Text style={styleApp.modalText}>Hello World!</Text>
                  <Pressable
                     style={[styleApp.button, styleApp.buttonClose]}
                     onPress={() => {
                        setState({
                           ...state,
                           modalVisible: !state.modalVisible
                        });
                     }}>
                     <Text style={styleApp.textStyle}>Hide Modal</Text>
                  </Pressable>
               </View>
            </View>
         </Modal>

      </View>
   );
}

export default Home;