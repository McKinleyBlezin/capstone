import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import ToolBar from "./components/Navbar";
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
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h1">#1 Stop & Shop</Typography>
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
