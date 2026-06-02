import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

// Calculating safe responsive width boundaries for 2-column grid scaling
const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // Screen width minus parent padding divided by 2 columns

interface ProductCardProps {
  item: {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    trending: boolean;
  };
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        {/* Dynamic Image parsing from Cloudinary network string url */}
        <Image
          source={{ uri: item.image }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        <View style={styles.imageIconContainer}>
          <Ionicons name="heart-outline" size={22} color={'#e55b5b'} />
        </View>
      </View>
      <View style={styles.productDescription}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    width: cardWidth, // Adaptive width distribution layout scaling
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 8,
    // Optional crisp background elevation shadow to make cards lift off layout base
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  imageIconContainer: {
    height: 32,
    width: 32,
    backgroundColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    right: 8,
    top: 8,
    elevation: 3,
  },
  coverImage: {
    height: 180,
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#eaeaea',
  },
  productDescription: {
    marginTop: 8,
    paddingHorizontal: 4,
    gap: 1,
  },
  productTitle: {
    fontSize: 15,
    color: '#444444',
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 15,
    color: '#9c9c9c',
    fontWeight: '600',
  },
});
