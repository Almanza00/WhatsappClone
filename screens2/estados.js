import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import data from '../estados.json';
const icono2 = require('../images/contacto.png');

export default function Estados(){
    const[data, setData] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('telefono')
        .then((value) => {
            let d = new FormData();
            d.append('idusuarios', JSON.parse(value).idusuarios);
            fetch('http://192.168.1.78/react/loginapp/estados.php',
            {
                method : 'POST',
                body : d
            })
            .then((response) => response.json())
            .then((datos) => {
                console.log(datos);
                if(datos.estado == 1){

                    setData(datos.datos);
                }else{
                    console.log("El usuario no existe");
                }
            })
            .catch((error) => console.log(error));
        })
    },[]);
        const renderItem = ({item}) => (
            <View style={styles.renglon}>
                <View style={styles.contenedorIcono}>
                <Image style={styles.icono} source={{uri:item.foto}}/>
                </View>
                <View>
                    <Text style={styles.nombre}>{item.nombre}</Text>
                    <Text style={styles.numero}>{item.hora}</Text>
                </View>
               
            </View>
        );

        return(
            <View style={styles.contenedor}>
                <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>   
            </View>
        );
        

    }


const styles = StyleSheet.create({
    icono: {
        height: 33,
        width: 33,
    },
    renglon:{
        borderColor: '#f1f1f1',
        borderBottomWidth: 5,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        paddingBottom: 15
    },
    contenedorIcono:{
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        width: 50
    },
    nombre:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    numero:{
        fontSize: 14,
    },
    titulo:{
        backgroundColor: '#0f1b29',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 40,
        padding: 10,
        textAlign: 'center'
    },
    contenedor: {
        flex:1
    },
    button:{
        
       position:'relative'
        
    }


});