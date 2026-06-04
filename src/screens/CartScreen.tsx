import { StyleSheet, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const CartScreen = () => {
  return (
    <LinearGradient
      colors={['#fce4e9', '#fceef2', '#ffffff']}
      style={styles.container}
    >
      <Header isCart={true} />
      <Text>Cart Screen</Text>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
