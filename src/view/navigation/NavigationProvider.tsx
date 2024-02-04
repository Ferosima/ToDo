import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import TaskScreen from '../screen/TaskScreen/TaskScreen';
import {SCREENS} from '@constants/screens';
import {RootStackParamList} from './types';

const RootStack = createStackNavigator<RootStackParamList>();

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Group>
          <RootStack.Screen name={SCREENS.HOME} component={HomeScreen} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name={SCREENS.TASK} component={TaskScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
