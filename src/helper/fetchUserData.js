export const fetchUserData = (email, password, setResData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: email,
      password: password,
      site_key: "no01",
    }),
  };

  fetch("https://iconnect247.net/api/v2/sessions", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setResData(data);
      console.log("Success", data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
