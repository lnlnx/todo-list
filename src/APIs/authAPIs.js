const baseURL = "http://localhost:3000/user";


export const authUserAPI = (user) => {
  return fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
}
