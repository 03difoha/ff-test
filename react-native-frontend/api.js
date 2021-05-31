const URL_base =
  "https://25u289345c.execute-api.us-east-1.amazonaws.com/dev/todos";
import { Alert } from "react-native";
import { Restart } from "fiction-expo-restart";

const fetch = require("node-fetch");

function handleError(error) {
  Alert.alert(
    `Error: ${error.message}`,
    "Please check your connection and reload",
    [
      {
        text: "Reload",
        onPress: () => Restart(),
      },
    ],
    { cancelable: false }
  );
}

async function getAllTodos() {
  try {
    const response = await fetch(URL_base);
    return response.json();
  } catch (error) {
    handleError(error);
  }
}

async function createTodo(text) {
  try {
    const respose = await fetch(URL_base, {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return respose.json();
  } catch (error) {
    handleError(error);
  }
}

async function updateTodo(id, checked) {
  try {
    const response = await fetch(URL_base + `/${id}`, {
      body: JSON.stringify({
        checked: checked,
      }),
      method: "PUT",
    });
    return response.json();
  } catch (error) {
    handleError(error);
  }
}

async function deleteTodo(id) {
  try {
    const response = await fetch(URL_base + `/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    handleError(error);
  }
}

export default {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
