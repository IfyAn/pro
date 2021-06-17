import React from "react";
import {  View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import WalletScreen from "./screens/WalletScreen";
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const CustomTabBarButton=({children, onPress})=>(
  <TouchableOpacity style={{  justifyContent: "center",alignItems: "center",}} onPress={onPress}>
    <View style={{width: 70, height:70, backgroundColor:'#ffff', borderRadius:20}}>
      {children}
    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
        		activeTintColor: "#F0F0F0" ,
            inactiveTintColor: "#A09FA2",
            labelStyle: {
              fontSize: 14,
              textTransform: "uppercase",
              paddingTop: 5
            },
            showLabel:false,
            style: {		
              backgroundColor:'#20212A',
              borderTopWidth: 0,
              borderTopWidth: 0,
            }
        }}
      >
        <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconFocused = focused ? "#F0F0F0" : "#a09fa2";
                  return (
                    <Text style={{ color: iconFocused }}>
                    <AntDesign name='home' size={20}  />
                    </Text>
                  );
			        	}
              }}
          />
          <Tab.Screen
              name="Matches"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconFocused = focused ? "#F0F0F0"  : "#a09fa2";
                  return (
                    <Text style={{ color: iconFocused }}>
                    <MaterialIcons name='settings-input-composite' size={20} />
                    </Text>
                  );
                }
              }}
          />
          <Tab.Screen
              name="Love"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={{ color: iconFocused }}>
						<Fontisto name='arrow-v' size={20} />
						</Text>
					);
				},
        tabBarButton:(props)=>(
          <CustomTabBarButton {...props} />
          )
              }}
          />
          <Tab.Screen
              name="Chat"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#F0F0F0"  : "#a09fa2";
					return (
						<Text style={{ color: iconFocused }}>
						<AntDesign name='wallet' size={20}  />
						</Text>
					);
				}
              }}
          />
          <Tab.Screen
              name="Profile"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#F0F0F0"  : "#a09fa2";
					return (
						<Text style={{ color: iconFocused }}>
						<MaterialCommunityIcons name='table-settings' size={20} />
						</Text>
					);
				}
              }}
          />
      </Tab.Navigator>
  )
}

const HomeNavigator = () => {
  return (
    <stack.Navigator mode='modal' screenOptions={{headerShown:false}}>
      <stack.Screen component={Tabs} name='Home' options={{ headerShown: false }} />
      <stack.Screen component={WalletScreen} name='Wallet'/>
    </stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />	
   </NavigationContainer>
  )
}


 export default App;

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from "./navigation/Tabs";


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />	
//    </NavigationContainer>
//   )
// }


// export default App;
