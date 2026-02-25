import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { useRouter } from "expo-router";

import { SearchInput } from "../src/components/common/SearchInput";
import { ProductItem } from "../src/components/product/ProductItem";
import { PrimaryButton } from "../src/components/common/PrimaryButton";

import { useProducts } from "../src/hooks/useProducts";

export default function ProductListScreen() {
  const router = useRouter();
  const { isLoading, isError, filteredProducts, search, setSearch } =
    useProducts();

  return (
    <View style={styles.container}>
      <SearchInput value={search} onChange={setSearch} />

      {isLoading && (
        <ActivityIndicator
          style={styles.centerElement}
          size="large"
          color="#F7C933"
        />
      )}

      {isError && (
        <Text style={styles.errorText}>
          Ocurrió un error al cargar los datos vuelve a intentarlo mas tarde.
        </Text>
      )}

      {!isLoading && !isError && (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductItem
                product={item}
                onPress={() =>
                  router.push({ pathname: "/details", params: { id: item.id } })
                }
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  {search
                    ? "No se encontraron coincidencias"
                    : "No hay productos registrados"}
                </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}

      <PrimaryButton title="Agregar" onPress={() => router.push("/add")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  listContainer: { flex: 1 },
  centerElement: {
    flex: 1,
    justifyContent: "center",
  },
  errorText: {
    flex: 1,
    textAlign: "center",
    color: "red",
    marginTop: 20,
  },
  emptyContainer: {
    paddingVertical: 50,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
});
