import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

//type Props = {};

const MyCamera = (props: any) => {
  console.log(props);
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    requestPermission();
  }
  const device = useCameraDevice('back');
  if (device === null) {
    props.navigation.goBack();
    return null;
  }
  const camera = useRef<Camera>(null);
  return (
    <View>
      <Text>MyCamera</Text>
      <Camera
        style={{height: '90%'}}
        isActive={true}
        device={device}
        photo={true}
        ref={camera}

      />
      <View style={{flexDirection: 'row'}}>
        <Button
          title="click"
          onPress={async () => {
            const file = await camera.current?.takePhoto();
            console.log(file );
          }}
        />
      </View>
    </View>
  );
};

export default MyCamera;

const styles = StyleSheet.create({});
