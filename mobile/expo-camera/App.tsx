import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';


interface State {
   hasPermission: boolean;
   typeOfCamera: string;
}

const initialState: State = {
   hasPermission: false,
   typeOfCamera: CameraType.back
}

const App: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);
   let camera: Camera;

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
         <Text>Camera Testing</Text>
         {state.hasPermission &&
            <>
               <View
                  style={{
                     position: 'absolute',
                     bottom: 0,
                     flexDirection: 'row',
                     flex: 1,
                     width: '100%',
                     padding: 20,
                     justifyContent: 'space-between'
                  }}
               >
                  <View
                     style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center'
                     }}
                  >
                     <TouchableOpacity
                        onPress={__takePicture}
                        style={{
                           width: 70,
                           height: 70,
                           bottom: 0,
                           borderRadius: 50,
                           backgroundColor: '#fff'
                        }}
                     />
                  </View>
               </View>
               <Camera type={state.typeOfCamera} ref={(r) => {
                  camera = r
               }}>
                  <View>
                     <TouchableOpacity
                        onPress={switchCameraType}>
                        <Text>Flip</Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default App;