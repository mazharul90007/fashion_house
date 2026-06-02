import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Ionicons from '@react-native-vector-icons/ionicons';
import Category from '../components/Category';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );
  return (
    <LinearGradient
      colors={['#fce4e9', '#fceef2', '#ffffff']}
      style={styles.container}
    >
      <Header />

      {/* Search input section */}
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={26} color={'#cccccc'} />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      {/* Category section */}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  matchText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 8,
    marginVertical: 8,
  },
  textInput: {
    flex: 1,
  },
});
