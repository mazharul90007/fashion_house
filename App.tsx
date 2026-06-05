import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

export type RootStackParamList = {
  HOME: undefined;
  PRODUCT_DETAILS: {
    product: {
      id: number;
      image: string;
      title: string;
      price: number;
      category: string;
      trending: boolean;
    };
  };
  CART: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#E96E6E',
            tabBarInactiveTintColor: '#b4b4b9e3',
            headerShown: false,
            tabBarStyle: { position: 'absolute', backgroundColor: '#ebf1f7' },
            tabBarLabelVisibilityMode: 'unlabeled',
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-sharp" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={ReorderScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="reorder-four-sharp" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="cart-sharp" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({});
