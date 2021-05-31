const URL_base =
  "https://25u289345c.execute-api.us-east-1.amazonaws.com/dev/todos";

const fetch = require("node-fetch");

function handleError(response) {
  if (!response.ok) {
    if (alert(response + "\nCheck your connection and click ok to reload")) {
    } else window.location.reload();
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

async function createTodos(text) {
  try {
    const response = await fetch(URL_base, {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  } catch (error) {
    handleError(error);
  }
}

async function updateTodos(id, checked) {
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

async function deleteTodos(id) {
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
  createTodos,
  updateTodos,
  deleteTodos,
};
