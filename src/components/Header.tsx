import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.appIconContainer}>
            <Image source={require("../assets/fashion_logo.png")} style={styles.appIcon}/>
        </View>
      <Image source={require('../assets/user.jpg')} style={styles.dp}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
        paddingTop: (StatusBar.currentHeight || 0) + 12, 
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appIconContainer: {
      height: 44,
      width: 44,
      backgroundColor: '#ffffff',
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center'
    },
    appIcon: {
        height: 28,
        width: 28
    },
    dp:{
      height: 44,
      width: 44,
      borderRadius: 22
    }
})