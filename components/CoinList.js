import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons";


const CoinList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.coin}>
                <MaterialCommunityIcons name='checkbox-blank-circle' size={10} color={'#daa520'} style={styles.icon} />
                <Text style={styles.btcText}>Bitcoin:</Text>
                <Text style={styles.btcStyle}>70%</Text>
            </View>
            <View style={styles.coin2}>
                <MaterialCommunityIcons name='checkbox-blank-circle' size={10} color={'#00ced1'} style={styles.icon} />
                <Text style={styles.btcText}>ETH:</Text>
                <Text style={styles.btcStyle}>25%</Text>
            </View>
            <View style={styles.coin3}>
                <MaterialCommunityIcons name='checkbox-blank-circle' size={10} color={'#ffd700'} style={styles.icon} />
                <Text style={styles.btcText}>BNB:</Text>
                <Text style={styles.btcStyle}>9%</Text>
            </View>
        </View>
    )
}

export default CoinList

const styles = StyleSheet.create({
    btcText:{
        paddingLeft:5,
        color:'#ffff',
        fontSize:11,
        fontWeight:'600',
        
    },
    btcStyle:{
        paddingLeft:3,
        color:'#ffff',
        fontSize:11,
        fontWeight:'600',
        
    },
    coin:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:15,
    },
    coin2:{
        flexDirection:'row',
        paddingLeft:50,
        marginTop:15,
    },
    coin3:{
        flexDirection:'row',
        paddingLeft:65,
        marginTop:15,
    },
    container:{
        flexDirection:'row'
    },
       icon:{
        alignSelf: "center",
        	shadowOpacity: 0.5,
				shadowRadius: 10,
				shadowColor: "#ffd700",
				shadowOffset: { height: -30, width: -30 },
                elevation:50
    }
})
