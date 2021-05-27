const URL_base =
  "https://25u289345c.execute-api.us-east-1.amazonaws.com/dev/todos";
import { DevSettings } from "react-native";

const fetch = require("node-fetch");
function handleError(error) {
  if (alert(error + "\nCheck your connection and click ok to reload")) {
  } else {
    // referesh app
    // potentially better solution than this
    DevSettings.reload();
  }
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

function updateTodo(id, checked) {
  try {
    fetch(URL_base + `/${id}`, {
      body: JSON.stringify({
        checked: checked,
      }),
      method: "PUT",
    });
  } catch (error) {
    handleError(error);
  }
}

function deleteTodo(id) {
  try {
    fetch(URL_base + `/${id}`, {
      method: "DELETE",
    });
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
