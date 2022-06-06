import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';


interface State {
   hasPermission: boolean;
   cameraType: CameraType;
}

const initialState: State = {
   hasPermission: false,
   cameraType: CameraType.back
}

const App: FunctionComponent = () => {

   const [state, setState] = useState<State>(initialState);

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

   const switchCameraType = () => {
      setState({
         ...state,
         cameraType: state.cameraType === CameraType.back ? CameraType.front : CameraType.back
      });
   }

   return (
      <View style={styles.container}>
         <Text>Camera Testing</Text>
         {state.hasPermission &&
            <Camera type={state.cameraType}>
               <View>
                  <TouchableOpacity
                     onPress={switchCameraType}>
                     <Text>Flip</Text>
                  </TouchableOpacity>
               </View>
            </Camera>
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