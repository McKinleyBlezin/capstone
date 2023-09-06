import React, { useEffect, useState } from "react";
import App from "./App";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    try {
      async function Login() {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_",
          }),
        });
        const result = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <p>Hello World</p>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button className="Login" type="button" onClick={handleDelete(Login)}>
        Login
      </button>
    </>
  );
}
