import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface SearchInputProps {
  value: string;
  onChange: (text: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search.."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#FAFAFA",
  },
});
