import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = ({menuStyle}) => {
    return (
        <TouchableOpacity style={{...styles.container, ...menuStyle}}>
            <MaterialCommunityIcons name='menu' size={20} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'#2C2B32'
    },
    icon:{
        color:'#F0F0F0',
        paddingTop:14,
        alignSelf: "center",
    }
})
