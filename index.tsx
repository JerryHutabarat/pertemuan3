import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 👉 DATA PRODUK
  const products = [
    {
      name: "Headset Pro",
      price: 99,
      discount: 20,
      emoji: "🎧",
    },
    {
      name: "Keyboard RGB",
      price: 149,
      emoji: "⌨️",
    },
    {
      name: "Gaming Mouse",
      price: 29,
      emoji: "🖱️",
    },
    {
      name: "Speaker Bluetooth",
      price: 199,
      emoji: "🔊",
    },
  ];

  // 👉 JIKA CARD DIKLIK → MASUK HALAMAN DETAIL
  if (selectedProduct) {
    const discountedPrice =
      selectedProduct.price -
      (selectedProduct.price * (selectedProduct.discount || 0)) / 100;

    return (
      <View style={styles.detailContainer}>
        <Text style={styles.detailEmoji}>{selectedProduct.emoji}</Text>
        <Text style={styles.detailTitle}>{selectedProduct.name}</Text>

        {selectedProduct.discount ? (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={styles.oldPrice}>${selectedProduct.price}</Text>
            <Text style={styles.price}>${discountedPrice}</Text>
          </View>
        ) : (
          <Text style={styles.price}>${selectedProduct.price}</Text>
        )}

        <Pressable
          style={styles.backButton}
          onPress={() => setSelectedProduct(null)}
        >
          <Text style={{ color: "#fff" }}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>TechGears Store</Text>
        <Text style={styles.subtitle}>Best Tech Deals Today</Text>
      </View>

      {/* ROW 1 */}
      <View style={styles.row}>
        {products.slice(0, 2).map((item, index) => {
          const discountedPrice =
            item.price - (item.price * (item.discount || 0)) / 100;

          return (
            <Pressable
              key={index}
              onPress={() => setSelectedProduct(item)}
              android_ripple={{ color: "#ffffff20" }}
              style={({ pressed }) => [
                styles.card,
                index === 0 && styles.glowCard,
                pressed && styles.cardPressed,
              ]}
            >
              {/* BADGE */}
              {item.discount && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>🏷️ OFF 20%</Text>
                </View>
              )}

              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.productName}>{item.name}</Text>

              {/* HARGA */}
              {item.discount ? (
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text style={styles.oldPrice}>${item.price}</Text>
                  <Text style={styles.price}>${discountedPrice}</Text>
                </View>
              ) : (
                <Text style={styles.price}>${item.price}</Text>
              )}
            </Pressable>
          );
        })}
      </View>

      {/* ROW 2 */}
      <View style={styles.row}>
        {products.slice(2, 4).map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedProduct(item)}
            android_ripple={{ color: "#ffffff20" }}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#0f172a",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,

    position: "relative",
  },

  glowCard: {
    shadowColor: "#38bdf8",
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },

  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 6,
    textAlign: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22c55e",
  },

  oldPrice: {
    fontSize: 14,
    color: "#94a3b8",
    textDecorationLine: "line-through",
  },

  badge: {
    position: "absolute",
    top: -12,
    right: -12,
    backgroundColor: "#ef4444",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,

    shadowColor: "#ef4444",
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },

  // 🔥 HALAMAN DETAIL
  detailContainer: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },

  detailEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },

  detailTitle: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
  },

  backButton: {
    marginTop: 30,
    backgroundColor: "#334155",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
