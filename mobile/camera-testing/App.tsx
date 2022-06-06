import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';


interface State {
   hasPermission: boolean;
   typeOfCamera: CameraType;
}

const initialState: State = {
   hasPermission: false,
   typeOfCamera: CameraType.back
}

const App: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);
   
   let camera: Camera | null;

   const requestCameraPerm = async (): Promise<void> => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setState({
         ...state,
         hasPermission: status === 'granted'
      })
   }
   useEffect(() => {
      requestCameraPerm()
   }, [])

   const switchCameraType = (): void => {
      setState({
         ...state,
         typeOfCamera: state.typeOfCamera === CameraType.back ? CameraType.front : CameraType.back
      });
   }

   const __takePicture = async () => {
      if (!camera) return;
      const photo = await camera.takePictureAsync();
      console.log(photo);
   }

   return (
      <View style={styles.container}>
         {state.hasPermission &&
            <>
               <Camera
                  type={state.typeOfCamera}
                  ref={(r) => { camera = r }}
                  style={styles.cameraContainer}>
                  <View style={styles.touchablesContainer}>
                     <TouchableOpacity onPress={switchCameraType}>
                        <Text>Flip</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={__takePicture}>
                        <Text>Take picture</Text>
                     </TouchableOpacity>
                  </View>
               </Camera>
            </>
         }
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   cameraContainer: {
      flex: 1,
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
   }
});

export default App;