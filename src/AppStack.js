import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/HomeScreen';
import ProjectOne from '../src/ProjectOne';
import ProjectTwo from '../src/ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';
import ProjectSix from './ProjectSix';
import ProjectSeven from './ProjectSeven';
import ProjectEight from './ProjectEight';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="1" component={ProjectOne} />
      <Stack.Screen name="2" component={ProjectTwo} />
      <Stack.Screen name="3" component={ProjectThree} />
      <Stack.Screen name="4" component={ProjectFour} />
      <Stack.Screen name="5" component={ProjectFive} />
      <Stack.Screen name="6" component={ProjectSix} />
      <Stack.Screen name="7" component={ProjectSeven} />
      <Stack.Screen name="8" component={ProjectEight} />
    </Stack.Navigator>
  );
}
