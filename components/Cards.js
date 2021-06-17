import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";

const Cards = () => {
    return (
          <View style={styles.container}>
            <View style={styles.heading}>
               <MaterialCommunityIcons name='ethereum' color={'#ffff'} size={25} style={{fontWeight:'bold'}} />
              <Text style={styles.title}>ETH/USDT</Text>
            <View style={styles.percentage}>
              <Text style={styles.percentageText}>+12.03%</Text>
            </View>
            </View>
            <View style={styles.body}>
                <View style={styles.line} />
                    <View style={styles.number}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.numberText}>2659</Text>
                            <Text style={styles.textNumber}>.78</Text>
                        </View>
                        <Text style={styles.currency}>$26,678.84</Text>
                    </View>
            </View>
              <MaterialCommunityIcons name='chart-bell-curve' color={'#ffff'} size={100} style={{marginLeft:15}} />
            <View style={styles.footer}>
              <Text style={styles.footer1}>30m</Text>
              <Text style={styles.footerText}>1H</Text>
              <Text style={styles.footerText}>4H</Text>
              <Text style={styles.footerText}>1D</Text>
              <Text style={styles.footerText}>7D</Text>
            </View>
          </View>
    )
}

export default Cards

const styles = StyleSheet.create({
  body:{
    flexDirection:'row',
    paddingLeft:25
  },
    container: {
        flex: 1,
        borderRadius:20,
        borderWidth:0.6,
        borderColor:'gray',
        width: 230,
        height:260,
        marginTop: 20,
        
  },
  currency:{
    color:'#a9a9a9'
  },
  footer:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:5,
    alignItems:'center'
  },
  footer1:{
    borderRadius:7,
    height:20,
    width:45,
    backgroundColor:'#2C2B32',
    color:'#fff',
    fontSize:12,
    fontWeight:'800',
    textAlign:'center',
  },
  footerText:{
    color:'#ffff',
    paddingLeft:18,
    fontSize:12,
  },
  heading:{
    flexDirection:'row',
     padding:20
  },
  image:{
    width:200,
    paddingBottom:190
  },
  line:{
    height:50,
    width:6,
    borderRadius:2,
    backgroundColor:'#00ced1'
  },
  number:{
    paddingLeft:10,
  },
  numberText:{
    color:'#00ced1',
    fontSize:25,
    fontWeight:'bold',
  },
  textNumber:{ 
    color:'#00ced1',
    top:11,
    fontWeight:'bold',
    },
  percentage:{
    paddingLeft:20,
  },
    percentageText:{
    borderRadius:20,
    height:30,
    width:60,
    backgroundColor:'#2C2B32',
    color:'#7fff00',
    fontSize:13,
    fontWeight:'bold',
    paddingTop:5,
    paddingLeft:6
  },
  title:{
    color:'#ffff',
    fontSize:15,
    fontWeight:'bold',
    top:4
  },
})