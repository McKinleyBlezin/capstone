import Products from "./components/Products";
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
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h1">List Of Products</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* <Login /> */}
        <Products />
      </main>
    </>
  );
}

export default App;
