import React from 'react';
import {Text, View, StyleSheet, Image, FlatList,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { FloatingAction } from "react-native-floating-action";
import { createStackNavigator } from '@react-navigation/stack';

import Camara from '../screens2/camara';
import Chats from '../screens2/chats';
import Estados from '../screens2/estados';
import Llamadas from '../screens2/llamadas';



const Tab = createMaterialTopTabNavigator();

export default function App({navigation}) {
  
  return (

        <Tab.Navigator tabBarOptions={{showIcon:true,style: { backgroundColor: '#008b8b',borderColor:'#006400' },labelStyle:{color:'white'},activeTintColor: 'white'}}>
        <Tab.Screen name="Camara" component={Camara}
        options={{tabBarLabel:()=>null,
          tabBarIcon : ({color, size})=>
          <Icon name="camera-outline" color={color} size={22}/>}} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Estados" component={Estados} />
        <Tab.Screen name="Llamadas" component={Llamadas} />
      </Tab.Navigator>

    
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
