import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GitHubUserInfo from "./render";

const GitHubUserInfoScreen = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubUserInfo = async () => {
    setIsLoading(true);
    const token = "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"; // Supondo que você já tenha armazenado o token aqui
    if (!token) {
      setError("Token de acesso não está disponível.");
      setIsLoading(false);
      return;
    }

    const apiUrl = `https://api.github.com/users/${username}`;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok)
        throw new Error(`GitHub API returned status code: ${response.status}`);
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      setError(`Erro ao buscar informações do usuário: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchGitHubUserInfo();
    }
  }, [username]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userInfo ? (
        <GitHubUserInfo data={userInfo} />
      ) : (
        <Text style={styles.info}>
          Nenhuma informação de usuário para mostrar.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  info: {
    textAlign: "center",
  },
});

export default GitHubUserInfoScreen;
