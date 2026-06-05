import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Header = ({ isCart }: { isCart: boolean }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          if (isCart) {
            navigation.navigate('HOME_STACK');
          } else {
            navigation.navigate('HOME');
          }
        }}
        style={styles.appIconContainer}
      >
        {isCart ? (
          <Ionicons name="chevron-back" size={24} color={'#e96e6e'} />
        ) : (
          <Image
            source={require('../assets/fashion_logo.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>

      {isCart && <Text style={styles.cartHeaderTitle}>My Cart</Text>}
      <Image source={require('../assets/user.jpg')} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: (StatusBar.currentHeight || 0) + 4,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appIconContainer: {
    height: 44,
    width: 44,
    backgroundColor: '#ffffff',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  cartHeaderTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
