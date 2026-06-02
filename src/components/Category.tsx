import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type categoryProps = {
  item: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const Category = ({
  item,
  selectedCategory,
  setSelectedCategory,
}: categoryProps) => {
  const isSelected = selectedCategory === item;
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedCategory(item);
      }}
      style={[
        styles.categoryContainer,
        isSelected ? styles.activeContainer : styles.inactiveContainer,
      ]}
    >
      <Text
        style={[
          styles.categoryText,
          isSelected ? styles.activeText : styles.inactiveText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 4,
    marginVertical: 10,
    height: 40,
  },
  activeContainer: {
    backgroundColor: '#e96e6e',
  },
  inactiveContainer: {
    backgroundColor: '#dfdcdc',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeText: {
    color: '#ffffff',
  },
  inactiveText: {
    color: '#938f8f',
  },
});
