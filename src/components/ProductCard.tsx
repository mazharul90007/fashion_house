import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
}

const ProductCard = ({ item }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PRODUCT_DETAILS', { product: item })}
      style={styles.productContainer}
    >
      <View style={styles.imageContainer}>
        {/* Dynamic Image parsing from Cloudinary network string url */}
        <Image
          source={{ uri: item.image }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.imageIconContainer}
          onPress={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <Ionicons name="heart-sharp" size={22} color={'#e55b5b'} />
          ) : (
            <Ionicons name="heart-outline" size={22} color={'#e55b5b'} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.productDescription}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    width: cardWidth, // Adaptive width distribution layout scaling
    borderRadius: 16,
    padding: 2,
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
    height: 220,
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
