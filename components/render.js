import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, ThemeProvider, Card } from "@rneui/themed";

const GitHubUserInfo = ({ data }) => {
  return (
    <Card style={styles.container}>
      <Image source={{ uri: data.avatar_url }} style={styles.avatar} />
      <Text style={styles.title}>{data.login}</Text>
      <Text style={styles.info}>
        {" "}
        <Text style={styles.titleInfo}> ID: </Text> {data.id}
      </Text>
      <Text style={styles.info}>
        {" "}
        <Text style={styles.titleInfo}> URL: </Text> {data.url}
      </Text>

      <Text style={styles.info}>
        {" "}
        <Text style={styles.titleInfo}> Bio: </Text> {data.bio || "N/A"}
      </Text>
      <Text style={styles.info}>
        {" "}
        <Text style={styles.titleInfo}> Location: </Text>{" "}
        {data.location || "N/A"}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    borderRadius: "6px",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    marginBottom: 5,
  },
  titleInfo: {
    fontWeight: "bold",
  },
});

export default GitHubUserInfo;
