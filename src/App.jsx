import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import OrderPlaced from "./components/OrderPlaced";
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
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    }

    //Calling the products to show
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar cart={cart} />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h1">#➊ 🅢🅣🅞🅟 & 🅢🅗🅞🅟</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={""} />
          <Route
            path="/OrderPlaced"
            element={
              "Your Order has been Placed! A confirmation email has been sent. Please allow to 2-3 bussiness days for shipping!"
            }
          />
          <Route
            path="/Login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/Products"
            element={
              <Products
                cart={cart}
                updateCart={setCart}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/Products/:id"
            element={<SingleProduct cart={cart} updateCart={setCart} />}
          />
          <Route path="/Signup" element={<Signup token={token} />} />
          <Route
            path="/Checkout"
            element={
              <Checkout cart={cart} updateCart={setCart} products={products} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
