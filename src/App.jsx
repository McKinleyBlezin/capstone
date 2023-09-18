import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
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
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
