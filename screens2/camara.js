import React from 'react';
import {View, Text, Button,Image,ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const fondo = require('../images/camera.jpg');

export default function Home({navigation}){
    return(
      <View>
          <Image style={styles.image} source={fondo}/>
      </View>
        
    );
    
}
const styles = StyleSheet.create({
    image: {
      height:600,
      width:420  
      
    }
  });
