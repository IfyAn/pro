import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons";

const Header = ({onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftStlyle}>
                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons name='keyboard-arrow-left' color={'#ffff'} size={25} />
                </TouchableOpacity>
                    <Text style={styles.text}>Wallet</Text>
            </View>
            <View style={styles.rightStlyle}>
                 <TouchableOpacity >
                    <MaterialIcons name='flip-camera-android' color={'#ffff'} size={25} />
                </TouchableOpacity>
                 <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name='timer' color={'#ffff'} size={25} />
                </TouchableOpacity>
                 <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name='location-searching' color={'#ffff'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:15,
        flexDirection:'row',
       // backgroundColor:'#1A1B24',
    },
    icon:{
        paddingLeft:10
    },
    leftStlyle:{
        flexDirection:'row',
    },
    rightStlyle:{
        flexDirection:'row',
        paddingLeft:150,
        justifyContent:'space-between',
    },
   text:{
       color:'#ffff',
       top:2,
       fontSize:14,
       fontWeight:"800"
   },
})
