import React from "react";
import { Button, Container } from "@material-ui/core";
import Header from "./components/fagments/Header";
import Menu from "./components/fagments/Menu";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import {
  makeStyles,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20),
  },
}));

export default function App() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  return (
    <BrowserRouter>
      <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Container className={classes.content}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate replace to="/login" />} /> //*
          Redirect V6 */
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
