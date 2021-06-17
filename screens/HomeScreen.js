import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, ScrollView} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Menu from '../components/Menu'
import CoinList from '../components/CoinList'
import Buttons from '../components/Buttons'
import Card from '../components/Card'
import Cards from '../components/Cards'

const HomeScreen = ({navigation}) => {
  
    return (
        <SafeAreaView style={styles.container}>
          <Menu menuStyle={styles.menu} />
          <Text style={styles.text}>Current Balance</Text>
          <View style={styles.titleStyle}>
            <View style={styles.btcStyle}>
              <Text style={styles.number}>9.029411</Text>
              <Text style={styles.btc}>BTC</Text>
            </View>
            <View style={styles.percentage}>
              <Text style={styles.percentageText}>+10.23%</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>$418,623.25</Text>
          <CoinList />
          <View style={styles.line} />
          <View style={styles.buttonBox}>
            <Buttons buttonStyle={styles.button} title='Deposit' onPress={() => navigation.navigate('Wallet')} />
            <Buttons buttonStyle={styles.button1} title='Withdraw' textStyle={{color:'#ffff'}} />
          </View>
       <View style={styles.titleStyle}>
            <View style={styles.btcStyle}>
              <Text style={styles.subTitle}>Top Coins</Text>
            </View>
            <View style={styles.filterBox}>
              <Text style={styles.filterText}>Filter</Text>
              <Entypo name='select-arrows' size={13} style={styles.icon} />
            </View>
          </View>
          <ScrollView horizontal={true}  style={{marginLeft:20, marginRight:20, flexDirection:'row'}}>
             <Card />
             <View style={{margin: 10}}/>
             <Cards />
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cont: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  btc:{
    fontWeight:'bold',
    fontSize:17,
    color:'#ffff',
    left:5,
    top:7
  },
  btcStyle:{
    flexDirection:'row'
  },
  button:{
   backgroundColor:'#FF922F',
  },
  button1:{
   left:5,
  },
  buttonBox:{
    flexDirection:'row',
     marginTop:20,
     marginLeft:20
  },
  container: {
    flex: 1,
    backgroundColor:'#20212A',
  },
  filterBox:{
    paddingLeft:190,
    flexDirection:'row'
  },
  filterText:{
    color:'#ffff'
  },
  icon:{
    color:'#ffff',
    left:3,
    top:3
  },
  line:{
    width:'40%', 
    height:1, 
    borderTopWidth:0.7, 
    alignSelf:'center', 
    marginTop:20, borderColor:'#FB9435'
    },
  menu:{
    marginTop:40,
    marginLeft:280
  }, 
  number:{
    fontSize:25,
    fontWeight:'bold',
    color:'#ffff'
  },
  percentage:{
    paddingLeft:100,
  },
  percentageText:{
    borderRadius:20,
    height:30,
    width:70,
    backgroundColor:'#2C2B32',
    color:'#7fff00',
    fontSize:13,
    fontWeight:'bold',
    paddingTop:5,
    textAlign:'center'
    //paddingLeft:6
  },
  subTitle:{
    fontWeight:'bold',
    fontSize:17,
    color:'#ffff',
  },
  text:{
    fontSize:12,
    fontWeight:"700",
    marginLeft:20,
    color:'#a09fa2',
    marginTop:5
  }, 
  textStyle:{
    fontSize:15,
    fontWeight:"700",
    marginLeft:20,
    color:'#a09fa2',
    marginTop:5
  }, 
  titleStyle:{
    marginTop:19,
    marginLeft:22,
    flexDirection:'row',
    //justifyContent: 'space-evenly'
  },
});


export default HomeScreen
