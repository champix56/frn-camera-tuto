import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ICar} from '../../interfaces/ICar';

type Props = {
  car: ICar;
};

const CarEditor = (props: Props) => {
  const [car, setCar] = useState(props.car);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.CarEditor}>
        <View style={styles.carLeftContainer}>
          <Text style={styles.inputLabel}>Immatriculation</Text>
          <TextInput
            style={styles.inputs}
            value={car.immat}
            onChangeText={t => setCar({...car, immat: t})}
          />
          <Text style={styles.inputLabel}>Marque</Text>
          <TextInput
            style={styles.inputs}
            value={car.marque}
            onChangeText={t => setCar({...car, marque: t})}
          />
          <Text style={styles.inputLabel}>Model</Text>
          <TextInput
            style={styles.inputs}
            value={car.model}
            onChangeText={t => setCar({...car, model: t})}
          />
        </View>
        <View style={styles.carRightContainer}>
          <TouchableHighlight
            style={styles.carPhotoTouchable}
            onPress={() => {
              ToastAndroid.show('Camera asked', ToastAndroid.LONG);
            }}>
            <Image
              style={styles.carPhoto}
              source={
                undefined !== props.car.blobId
                  ? {data: {uri: props.car.image?.data}}
                  : require('../../../../assets/defaultCar.png')
              }
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.formButtonsContainer}>
        <Button
          color={'tomato'}
          title="cancel"
          onPress={() => {
            setCar(props.car);
          }}
        />
        <Button title="update" />
      </View>
    </ScrollView>
  );
};

export default CarEditor;

const styles = StyleSheet.create({
  scrollView: {paddingTop: 10},
  CarEditor: {flexDirection: 'row'},
  carLeftContainer: {flexGrow: 1, paddingHorizontal: 5},
  carRightContainer: {
    width: 150,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  formButtonsContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    alignContent: 'space-between',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  carPhotoTouchable: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  carPhoto: {height: 128, width: 128},
  //inputs
  inputLabel: {
    fontWeight: '900',
    fontSize: 18,
  },
  inputs: {
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    width: '90%',
  },
  buttons: {flex: 1},
});
