import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { Product } from "../../types/product.type";

interface ProductItemProps {
  product: Product;
  onPress: () => void;
}

export const ProductItem = ({ product, onPress }: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.id}>ID: {product.id}</Text>
      </View>
      {/* <Ionicons name="chevron-forward" size={20} color="#ccc" /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  id: {
    fontSize: 12,
    color: "#888",
  },
});
