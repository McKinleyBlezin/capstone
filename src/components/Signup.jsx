import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";

export default function Signup() {
  const [signup, setSignup] = useState("");

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
              geolocation: {
                lat: "-37.3159",
                long: "81.1496",
              },
            },
            phone: "1-570-236-7033",
          }),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
      } catch (error) {}
    }
    signup();
  });
  return <h1>Hello World</h1>;
}
