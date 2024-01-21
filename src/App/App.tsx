/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Home from './pages/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CarEditor from './components/CarEditor/CarEditor';
import {DUMMY_CAR} from './interfaces/ICar';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {p => <Home {...p} />}
        </Stack.Screen>
        <Stack.Screen
          name="nouveau vehicule"
          options={{headerShown: true, title: 'Nouveau vehicule'}}>
          {p => <CarEditor {...p} car={DUMMY_CAR} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
