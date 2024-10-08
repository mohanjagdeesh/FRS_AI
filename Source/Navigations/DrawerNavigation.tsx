import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerContent from '../Utils/DrawerContent';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>} screenOptions={{
        headerShown:false,
    }}>
        <Drawer.Screen name='Home' component={StackNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})