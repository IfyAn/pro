import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Buttons = ({title, buttonStyle, textStyle, onPress}) => {
    return (
        <View>
            <TouchableOpacity style={{...styles.container, ...buttonStyle}} onPress={onPress}>
             <Text style={{...styles.text, ...textStyle}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
      container:{
        height:50,
        width:160,
        borderRadius:40,
        backgroundColor:'#2C2B32',
        alignItems:'center',
        justifyContent:'center'
        
    },
    text:{
        color:'black',
        fontWeight:'800'
    },
})
