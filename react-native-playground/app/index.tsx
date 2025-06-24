import { Text, View, StyleSheet, Pressable } from "react-native";

const isOnline:boolean = false;
let spacingValue:number = 0.25;

export default function Index() {
  return (
    <View>
      <View style={{ flex: 1, margin: 8 }}>
        { isOnline == true ? (
          <View style={styles.systemStatus}>
            <View style={styles.circleOnline}>
            </View>
            <Text style={{ fontSize: 16 , fontWeight: 500}}> Systems Online </Text>
          </View>
        ) : (
          <View style={styles.systemStatus}>
            <View style={styles.circleOffline}>
            </View>
            <Text style={{letterSpacing: spacingValue, fontSize: 16 , fontWeight: 500}}> Systems Offline </Text>
          </View>
        )}
      </View>

      <Pressable style={styles.systemStatus} onPress={ () => { spacingValue += 1} }>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  systemStatus: {
    alignItems: "center",
    flexDirection: "row",
    width: '50%',
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 0.5,
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