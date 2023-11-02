import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GitHubUserInfoScreen from "./components/getApi";
import { Button, ThemeProvider, Card } from "@rneui/themed";
import Search from "./components/search";

export default function App() {
  const [whatScreen, setWhatScreen] = useState("search");

  const handleBack = () => {
    setWhatScreen("search");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {whatScreen == "search" ? <Search /> : "N/A"}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
