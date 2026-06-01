import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: '#E96E6E',
          tabBarInactiveTintColor: '#b4b4b9e3',
          headerShown: false,
          tabBarStyle: {position: 'absolute', backgroundColor: '#ebf1f7'},
          tabBarLabelVisibilityMode: 'unlabeled'
        }}>
          <Tab.Screen name="HOME" component={HomeScreen} options={{
            tabBarIcon: ({color, size})=>(
              <Ionicons name='home-sharp' size={size} color={color}/>
            )
          }}/>
          <Tab.Screen name="REORDER" component={ReorderScreen} options={{
            tabBarIcon: ({color, size})=>(
              <Ionicons name='reorder-four-sharp' size={size} color={color}/>
            )
          }
          }/>
          <Tab.Screen name="CART" component={CartScreen} options={{
            tabBarIcon: ({size, color})=>(
              <Ionicons name='cart-sharp' size={size} color={color}/>
  )
          }}/>
          <Tab.Screen name="ACCOUNT" component={AccountScreen} options={{
           tabBarIcon: ({size, color})=>(
            <Ionicons name='person' size={size} color={color}/>
           )
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
