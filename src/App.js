import React from "react";
import { Button } from "@material-ui/core";
import Header from "./components/fagments/Header";
import Menu from "./components/fagments/Menu";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

export default function App() {
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };

  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };

  const [openDrawer, setopenDrawer] = React.useState(false);

  return (
    <BrowserRouter>
      <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate replace to="/login" />} /> //*
        Redirect V6 */
      </Routes>
    </BrowserRouter>
  );
}
