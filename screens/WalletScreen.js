import React, { useState }  from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity,Modal } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Fontisto } from "@expo/vector-icons";
import Header from '../components/Header'
import WalletCard from '../components/WalletCard'
import CardList from '../components/CardList'
import Buttons from '../components/Buttons'

const WalletScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
         <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <View style={styles.contain}>
            <View style={styles.heading}>
              
               <Fontisto name='day-sunny' color={'#ffff'} size={25} style={{fontWeight:'bold'}} />
              <Text style={styles.title}>ADA/USDT</Text>
            <View style={styles.percentage}>
              <Text style={styles.percentageText}>+12.03%</Text>
            </View>
            </View>
            <View style={styles.body}>
                <View style={styles.line} />
                    <View style={styles.number}>
                        
                            <Text style={styles.numberText}>2659</Text>
                        
                        <Text style={styles.currency}>$26,678.84</Text>
                    </View>
            </View>
              <MaterialCommunityIcons name='chart-bell-curve' color={'#ffff'} size={100} onPress={() => setModalVisible(!modalVisible)} style={{marginLeft:15}} />
            <View style={styles.footers}>
              <Text style={styles.footer1}>30m</Text>
              <Text style={styles.footerText}>1H</Text>
              <Text style={styles.footerText}>4H</Text>
              <Text style={styles.footerText}>1D</Text>
              <Text style={styles.footerText}>7D</Text>
            </View>
          </View>
        </Modal>
         <Header onPress={() => navigation.navigate('Home')} />
         <View style={styles.seperator} />
         <WalletCard />
         <Text style={styles.filterText}>Quick Watch</Text>
         <View style={styles.list} opacity={0.5}>
            <CardList avatar='currency-btc' name='BTC' icon='arrow-down' 
            number='46,512.23' percent='-67.90%' color='#DE8C2B' 
            />
            <CardList avatar='ethereum' name='ADA' icon='arrow-up'  onPress={() => setModalVisible(true)}
            number='1.982.23' percent='-67.90%' color='#164671' percentStyle={{color:'#adff2f'}}
            />
            <CardList avatar='currency-ngn' name='BTC' icon='arrow-up' 
            number='1.7512.23' percent='-67.90%' color='#DFAD30' 
            />
         </View>
         <View style={styles.footer}> 
            <Buttons buttonStyle={styles.button1} title='Withdraw' 
                textStyle={{color:'#ffff'}} buttonStyle={{width:230, height:60}}
             />
            <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name='arrow-collapse-down' color={'black'} size={18}  />
            </TouchableOpacity>
         </View>
        </View>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
     contain:{backgroundColor:'#20212B',
        borderRadius:20,
        borderWidth:0.6,
        borderColor:'#2C2B32',
        width: 230,
        height:260,
        marginLeft: 70,
        marginTop:200
  },
    container: {
    flex: 1,
    backgroundColor:'#20212A',
  },
  filterText:{
    color:'#ffff',
    margin:20
  },
  footer:{
    flexDirection:'row',
    margin:30
  },
    body:{
    flexDirection:'row',
    paddingLeft:25
  },
  currency:{
    color:'#a9a9a9'
  },
  footers:{
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
  icon:{
    height:60,
    width:60,
    borderRadius:30,
    left:10,
    backgroundColor:'#FF922A',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:200,
    paddingBottom:190
  },
  line:{
    height:50,
    width:6,
    borderRadius:2,
    backgroundColor:'#8FFF00'
  },
  list:{
    backgroundColor:'#1C1C25',
  },
  number:{
    paddingLeft:10,
  },
  numberText:{
    color:'#8FFF00',
    fontSize:25,
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
    color:'#ffff',
    fontSize:13,
    fontWeight:'bold',
    paddingTop:5,
    paddingLeft:6
  },
  seperator:{
      borderWidth:0.3,
      borderColor:'gray',
      marginTop:20
  },
  title:{
    color:'#ffff',
    fontSize:15,
    fontWeight:'bold',
    top:4
  },
})
