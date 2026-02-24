import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>BANCO</Text>
          </View>
        ),
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#fff" },
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: { flexDirection: "row", alignItems: "center" },
  headerText: { color: "#003366", fontWeight: "bold", fontSize: 18 },
});
