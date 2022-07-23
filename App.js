import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { InitComponent } from "./src/components/init/init";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <InitComponent />
      <StatusBar auto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211E3F",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
