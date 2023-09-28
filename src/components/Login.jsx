import React, { useEffect, useState } from "react";

export function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storeToken = localStorage.getItem("token");

    if (!token && storeToken) {
      setToken(storeToken);
    }
  }, [token, setToken]);

  async function loginAPI() {
    try {
      //Fetching data from API link
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        setToken(result.token);

        console.log(response);
      } else {
        // Handle login errors here
        console.log("Login failed:", result.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <button className="login-button" type="button" onClick={loginAPI}>
          Login
        </button>
      </form>
    </>
  );
}
