import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ToolBar from "./components/Navbar";
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

  return (
    <>
      <main>
        <CssBaseline />
        <AppBar position="relative">
          <Routes>
            <Toolbar>
              <Typography variant="h1">List Of Products</Typography>
              <Route path="/" element={""} />
              <Route path="/Login" element={<Login />} />
            </Toolbar>
          </Routes>
        </AppBar>
        <Login token={token} />
        <Products />
      </main>
    </>
  );
}

export default App;
