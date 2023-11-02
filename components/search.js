import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card, Input } from "@rneui/themed"; // Altere a importação se estiver usando um pacote diferente
import GitHubUserInfoScreen from "./getApi";

const Search = () => {
  const [username, setUsername] = useState("gustawebp");

  return (
    <View style={styles.body}>
      <Card containerStyle={styles.container}>
        <Text style={styles.title}>Search here your GitHub Username</Text>
        
        <Input
          placeholder="Search Here Your Username"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </Card>

      {username.length > 0 && (
        <View style={styles.body}>
          <GitHubUserInfoScreen username={username} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "80%",
  },
  container: {
    width: "100%",
  },

  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Search;
