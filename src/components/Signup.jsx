import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";

export default function Signup() {
  const [signup, setSignup] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function signup() {
      try {
        const response = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          body: JSON.stringify({
            email: "John@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
              firstname: "John",
              lastname: "Doe",
            },
            address: {
              city: "kilcoole",
              street: "7835 new road",
              number: 3,
              zipcode: "12926-3874",
            },
            phone: "1-570-236-7033",
          }),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
      } catch (error) {}
    }
    signup();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(handleSubmit);
  };

  return (
    <>
      <h2>
        ▼▼Welcome to 1 Stop & Shop! Down below once you SIGNUP you'll have
        exclusive access to our online products!▼▼
      </h2>
      <form className="signup">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Must Contain A #"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
        <br />
        <label htmlFor="streetAddress">Street Address:</label>
        <input type="text" id="streetAddress" name="streetAddress" required />
        <br />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />
        <br />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="2 Letters"
          required
        />
        <br />

        <label htmlFor="zipCode">Zip Code:</label>
        <input type="number" id="zipCode" name="zipCode" required />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="(555) 555-5555"
        />
        <br />
      </form>
      <button type="submit" value="Register" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
