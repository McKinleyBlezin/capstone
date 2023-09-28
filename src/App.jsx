import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import "./index.css";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

function App() {
  const [token, setToken] = useState("here");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h1">#➊ 🅢🅣🅞🅟 & 🅢🅗🅞🅟</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={""} />
          <Route
            path="/Login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/Products" element={<Products updateCart={setCart} />} />
          <Route
            path="/Products/:id"
            element={<SingleProduct updateCart={setCart} />}
          />
          <Route path="/Signup" element={<Signup token={token} />} />
          <Route
            path="/Checkout"
            element={<Checkout cart={cart} updateCart={setCart} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
