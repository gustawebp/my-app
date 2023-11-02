import AsyncStorage from "@react-native-async-storage/async-storage";

export async function isAuthenticated() {}

export async function login() {
  const apiUrl = "https://172.16.10.244/api/login";

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: "walter",
      passwd: "walter",
      useAd: true,
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    console.log(response.status); // Movido para aqui

    if (response.status === 200) {
      const data = await response.json();

      await AsyncStorage.setItem("token", data.token);

      return data.token;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error making the request to apiUrl:", error);
    return null;
  }
}
