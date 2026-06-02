import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Ionicons from '@react-native-vector-icons/ionicons';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );
  const [isLiked, setIsLiked] = useState(false);

  // Dynamic filter calculation engine
  const getFilteredProducts = () => {
    if (selectedCategory === 'All' || selectedCategory === 'New') {
      return data.products;
    }
    if (selectedCategory === 'Trending Now') {
      return data.products.filter(p => p.trending === true);
    }
    if (selectedCategory === 'Men') {
      return data.products.filter(p => p.category === 'men');
    }
    if (selectedCategory === 'Women') {
      return data.products.filter(p => p.category === 'women');
    }
    return data.products;
  };

  // Bundling top elements into a single safe layout track
  const renderHeader = () => (
    <View>
      <Header />

      {/* Search input section */}
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={26} color={'#cccccc'} />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      {/* Category section */}
      <View style={styles.categoryListWrapper}>
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
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#fce4e9', '#fceef2', '#ffffff']}
      style={styles.container}
    >
      <FlatList
        data={getFilteredProducts()}
        renderItem={({ item }) => (
          <ProductCard item={item} isLiked={isLiked} setIsLiked={setIsLiked} />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        numColumns={2} // ✨ Renders 2 items per row
        columnWrapperStyle={styles.columnWrapper} // ✨ Distributes space evenly between columns
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between', // ✨ Pushes columns perfectly to opposite screen edges
    marginBottom: 16, // Adds uniform vertical spacing between grid rows
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
  categoryListWrapper: {
    height: 60,
    marginTop: 10,
    marginBottom: 10,
  },
});
