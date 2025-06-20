import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, margin: 8 }}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <View style={styles.circleOuter}>
          <View style={styles.circleInner}>
          </View>
        </View>
        <Text style={{ fontSize: 16 }}> Systems Online </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleOuter: {
    width: 32,
    height: 32,
    backgroundColor: "lightgreen",
    borderRadius: 16,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  circleInner: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 12,
    opacity: 0.5,
  },
});