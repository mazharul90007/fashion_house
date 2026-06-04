import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

interface ProductData {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  trending: boolean;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const ProductDetailsScreen = ({
  route,
}: {
  route: { params?: { product: ProductData } };
}) => {
  const { product } = route.params || {};
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <LinearGradient
      colors={['#fce4e9', '#fceef2', '#ffffff']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product?.image }}
          style={styles.coverImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.title}>${product?.price}</Text>
      </View>

      {/* Size Section */}
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedSize(size)}
              key={size}
              style={[
                styles.sizeValueContainer,
                {
                  backgroundColor:
                    selectedSize === size ? '#eb9c9c' : '#ffffffff',
                },
              ]}
            >
              <Text style={styles.sizeValue}>{size}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Color Section */}
      <Text style={[styles.title, styles.colorsText]}>Colors</Text>
      <View style={styles.colorsContainer}>
        {colors.map(color => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedColor(color)}
              key={color}
              style={[
                styles.colorValueContainer,
                {
                  borderColor: selectedColor === color ? color : 'transparent',
                },
              ]}
            >
              <View
                style={[styles.colorValue, { backgroundColor: `${color}` }]}
              >
                {}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    width: '100%',
  },
  imageContainer: {
    height: 430,
    width: '100%',
    marginTop: 10,
    borderRadius: 16,
    overflow: 'hidden',
  },
  coverImage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eaeaea',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  sizeText: {
    marginVertical: 20,
  },
  sizeValueContainer: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 4,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorsText: {
    marginTop: 20,
  },
  colorsContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  colorValueContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginRight: 6,
    borderRadius: 20,
  },
  colorValue: {
    height: 28,
    width: 28,
    borderRadius: 20,
  },
});
