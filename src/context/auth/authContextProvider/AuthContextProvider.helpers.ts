import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

interface KeyValuePair {
  key: string;
  value: string;
}

export const getStorageItems = async (keys: string[]) => {
  const promises = keys.map((key) => SecureStore.getItemAsync(key));
  return Promise.all(promises);
};

export const setStorageItems = async (items: KeyValuePair[]) => {
  const promises = items.map((item) => {
    return SecureStore.setItemAsync(item.key, item.value);
  });
  await Promise.all(promises);
};

export const deleteStorageItems = async (keys: string[]) => {
  const promises = keys.map((key) => SecureStore.deleteItemAsync(key));
  await Promise.all(promises);
};

export const isTokenValid = async () => {
  const [token] = await getStorageItems(["accessToken"]);
  if (token) {
    const decodedToken = jwtDecode(token);
    const currentDate = new Date();
    if (decodedToken?.exp && decodedToken.exp * 1000 < currentDate.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  return false;
};
