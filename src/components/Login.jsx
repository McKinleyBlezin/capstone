import React, { useEffect, useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function login() {
      try {
        //Fetching data from API link
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        // Log the result of data from JSON
      } catch (error) {
        console.log(error);
      }
    }

    // Call the login function when the component mounts
    login();
  }, []);

  return (
    <>
      <form className="login">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password" // Use type="password" for password input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="button" onClick={Login}>
          Login
        </button>
      </form>
    </>
  );
}
