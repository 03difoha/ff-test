const URL_base =
  "https://crsuhfhhz7.execute-api.us-east-1.amazonaws.com/dev/todos";
const fetch = require("node-fetch");

async function get_all_todos() {
  const response = await fetch(URL_base).catch((error) => {
    console.log(error);
  });
  return response.json();
}

function get_todo(id) {
  fetch(URL_base + `/${id}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function create_todo(text) {
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

function update_todo(id, text) {
  fetch(
    `https://crsuhfhhz7.execute-api.us-east-1.amazonaws.com/dev/todos/${id}`,
    {
      body: JSON.stringify({
        text: text,
        checked: true,
      }),
      method: "PUT",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function delete_todo(text, id) {
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

// update_todo("f1cd4a40-bc84-11eb-af8d-e720a8e429da", "foo")
// get_all_todos()
export default {
  get_all_todos,
  get_todo,
  create_todo,
  update_todo,
  delete_todo,
};
