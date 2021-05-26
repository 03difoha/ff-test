const URL_base =
  "https://crsuhfhhz7.execute-api.us-east-1.amazonaws.com/dev/todos";
const fetch = require("node-fetch");

async function getAllTodos() {
  const response = await fetch(URL_base).catch((error) => {
    console.log(error);
  });
  return response.json();
}

async function createTodos(text) {
  const respose = await fetch(URL_base, {
    method: "POST",
    body: JSON.stringify({
      text: text,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).catch((error) => {
    console.log(error);
  });
  return respose.json();
}

function updateTodos(id, checked) {
  fetch(URL_base + `/${id}`, {
    body: JSON.stringify({
      checked: checked,
    }),
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteTodos(id) {
  fetch(URL_base + `/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default {
  getAllTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};
