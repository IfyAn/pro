import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";

const WalletCard = () => {
    return (
          <View style={styles.container}>
            <View style={styles.heading}>
               <MaterialCommunityIcons name='currency-btc' color={'#daa520'} size={30} style={styles.icon} />
              <Text style={styles.title}>BTC /USDT</Text>
            <View style={styles.percentage}>
              <Text style={styles.percentageText}>+2.09%</Text>
            </View>
            </View>
            <View style={styles.body}>
                <View style={styles.line} />
                    <View style={styles.number}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.numberText}>46527</Text>
                            <Text style={styles.textNumber}>.25</Text>
                        </View>
                        <Text style={styles.currency}>$46,798.84</Text>
                    </View>
            </View>
              <MaterialCommunityIcons name='chart-bell-curve' color={'#ffff'} size={100} style={{marginLeft:15}} />
            <View style={styles.middleText}>
                <View>
                  <Text style={styles.middleStyle}>Vol</Text>
                  <Text style={styles.middleTextStyle}>2,567,985,097.02</Text>
                </View>
                <View style={styles.central} />
                <View>
                  <Text style={styles.middleStyle}>High</Text>
                  <Text style={styles.middleTextStyle}>52,345.09</Text>
                </View>
                <View style={styles.central}/>
                <View>
                  <Text style={styles.middleStyle}>Low</Text>
                  <Text style={styles.middleTextStyle}>40,096.54</Text>
                </View>
            </View>
            <View style={styles.dash} />
            <View style={styles.footer}>
              <Text style={styles.footer1}>30m</Text>
              <Text style={styles.footerText}>1H</Text>
              <Text style={styles.footerText}>4H</Text>
              <Text style={styles.footerText}>1D</Text>
              <Text style={styles.footerText}>7D</Text>
            </View>
            <View style={styles.dash1} />
          </View>
    )
}

export default WalletCard

const styles = StyleSheet.create({
  body:{
    flexDirection:'row',
    paddingLeft:25
  },
  central:{
      height:15,
      width:2,
      backgroundColor:'gray',
      marginTop:12,
      marginLeft:12,
      marginRight:12,
  },
//     container: {
//         flex: 1,
//   },
  currency:{
    color:'#a9a9a9',
    fontSize:15,
  },
  dash:{
      height: 1, 
      width: '100%', 
      borderRadius: 1, 
      borderWidth: 0.8, 
      borderColor: '#2A2B32', 
      borderStyle: 'dotted',
      marginTop:10
    },
  dash1:{
     width:'60%', 
    height:1, 
    borderTopWidth:0.7, 
    alignSelf:'center', 
    marginTop:20, borderColor:'#2A2B32'
    },
  footer:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:9,
    alignItems:'center'
  },
  footer1:{
    borderRadius:7,
    height:20,
    width:45,
    backgroundColor:'#2A2B32',
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
    backgroundColor:'#daa520'
  },
  middleText:{
      flexDirection:'row',
      marginTop:20,
      marginLeft:20
  },
  middleStyle:{
      fontSize:11,
      color:'#ffff',
      fontWeight:'800'
  },
  middleTextStyle:{
     fontWeight:'800',
    color:'#ffff'
  },
  number:{
    paddingLeft:10,
  },
  numberText:{
    color:'#ffff',
    fontSize:25,
    fontWeight:'bold',
  },
  textNumber:{ 
    color:'#ffff',
    top:11,
    fontWeight:'bold',
    },
  percentage:{
    paddingLeft:120,
  },
    percentageText:{
    borderRadius:20,
    height:30,
    width:70,
    backgroundColor:'#2A2B32',
    color:'#7fff00',
    fontSize:11,
    fontWeight:'bold',
    paddingTop:5,
    textAlign:'center'
  },
  title:{
    color:'#ffff',
    fontSize:15,
    fontWeight:'bold',
    top:4
  },
})