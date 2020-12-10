import React from 'react';
import {Text, View, StyleSheet, Image, FlatList,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { FloatingAction } from "react-native-floating-action";
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens2/main.js';
import Contactos from './screens2/contactos.js';
import Conversacion from './screens2/conversacion.js';
import LoginScreen from './screens2/loginscreen.js';
import { Header } from 'react-native/Libraries/NewAppScreen';
//const icono2 = require('./images/icono2.png');


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#008b8b'},title:"WhatsApp",headerTintColor:'white'}}>
        <Tab.Screen name="LoginScreen" component={LoginScreen}></Tab.Screen>
        <Stack.Screen name="Main" component={Main}
        
        />
        <Stack.Screen name="Conversacion" component={Conversacion}options={
          {title: 'Conversacion'}
        } />
        
        <Stack.Screen name="Contactos" component={Contactos}
        options={
          {title: 'Contactos'}
        }/>
     </Stack.Navigator> 
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    titulo:{
        backgroundColor: '#008b8b',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        padding: 10,
        borderColor:'#008b8b'
        
    }


});