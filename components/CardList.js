import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";

const CardList = ({avatar, name, icon, number, percent, color,percentStyle, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name={avatar} color={color} size={17} />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.dash}>-</Text>
            <MaterialCommunityIcons name={icon} color={'#ffff'} size={13} style={styles.icon} />
            <Text style={styles.numberText}>{number}</Text>
            <Text style={{...styles.percentage,...percentStyle}}>{percent}</Text>
        </TouchableOpacity>
    )
}

export default CardList

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:15,
    },
    dash:{
        color:'#ffff',
        fontSize:13,
        paddingLeft:8,
        paddingRight:15
    },
    icon:{
        top:2
    },
    nameText:{
        color:'#ffff',
        fontSize:13,
        paddingLeft:5,
        fontWeight:'bold'
    },
    numberText:{
        paddingLeft:8,
        color:'#ffff',
        fontSize:13,
        fontWeight:'900'
    },
    percentage:{
        paddingLeft:120,
        color:'#dc143c',
        fontSize:13,
        fontWeight:'bold'
    
    },
})
