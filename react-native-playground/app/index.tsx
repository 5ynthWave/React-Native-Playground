import { Text, View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function Index() {
  /*----------------------------- Default Value
  * --------- Updater Function                |
  * ---- Variable            V                V */ 
  const [isOnline, setIsOnline] = useState(true);

  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16 }}>
      <View style={styles.systemStatus}>
        <View style={isOnline ? styles.circleOnline : styles.circleOffline} />
        <Text style={{ fontSize: 20, letterSpacing: 0.25 }}>
          System Status: {isOnline ? "Online" : "Offline"}
        </Text>
      </View>
      <Pressable style={styles.statusUpdater} onPress={() => setIsOnline(!isOnline)}>
        <Text style={{ fontSize: 20, letterSpacing: 0.25 }}>
          Set Status {isOnline ? "Offline" : "Online"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  systemStatus: {
    alignItems: "center",
    flexDirection: "row",
    width: '75%',
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
  },
  statusUpdater: {
    padding: 8,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    width: '75%'
  },
  circleOnline: {
    width: 16,
    height: 16,
    backgroundColor: "lightgreen",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  circleOffline: {
    width: 16,
    height: 16,
    backgroundColor: "red",
    borderRadius: 8,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
});