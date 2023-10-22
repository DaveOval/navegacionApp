import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}