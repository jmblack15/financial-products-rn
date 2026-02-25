import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, Text, StyleSheet } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: { flexDirection: "row", alignItems: "center" },
  headerText: { color: "#003366", fontWeight: "bold", fontSize: 18 },
});
