import React, { useEffect, useState } from "react";

export function Login({ token }) {
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
        //If login is correct provide a token
        //Where would a localStorage take place????
        if (token) {
          response.headers["Authorization"] = `Bearer ${token}`;
        }
        const result = await response.json();
        // Log the result of data from JSON
      } catch (error) {
        console.log(error);
      }
    }

    login();
  }, []);

  return (
    <>
      <form className="login">
        <label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
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
