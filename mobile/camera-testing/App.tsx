import React, { FunctionComponent, useEffect, useState } from 'react';

// modules
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';

// styles
import styleApp from './styleApp';


interface State {
   hasPermission: boolean;
   typeOfCamera: CameraType;
   photos: Array<CameraCapturedPicture>;
}

const initialState: State = {
   hasPermission: false,
   typeOfCamera: CameraType.back,
   photos: []
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

   const takePicture = async () => {
      if (!camera) return;
      const photo = await camera.takePictureAsync();
      console.log(photo);
      let updatedPhotos = state.photos;
      updatedPhotos.push(photo);
      setState({
         ...state,
         photos: updatedPhotos
      })
   }

   const renderPhotos = (item: CameraCapturedPicture, key: number) => {
      console.log(item.uri);
      return (
         <Image
            key={key}
            style={styleApp.photoImage}
            source={{ uri: item.uri }}
         />
      )
   }

   return (
      <View style={styleApp.container}>
         {state.hasPermission &&
            <>
               <Camera
                  type={state.typeOfCamera}
                  ref={(r) => { camera = r }}
                  style={styleApp.cameraContainer}>
                  <View style={styleApp.touchablesContainer}>
                     <TouchableOpacity onPress={switchCameraType}>
                        <Text>Flip</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={takePicture}>
                        <Text>Take picture</Text>
                     </TouchableOpacity>
                  </View>
               </Camera>
               <View style={styleApp.photosContainer}>
                  {state.photos.length > 0 &&
                     state.photos.map(renderPhotos)
                  }
               </View>
            </>
         }
      </View>
   );
}

export default App;