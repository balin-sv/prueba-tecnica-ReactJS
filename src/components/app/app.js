import React from "react";
import Header from "../header/index";
import { AppProvider } from "../context/app-context";
import "./app.css";
import MainPage from "../main-page/main-page";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <MainPage />
    </AppProvider>
  );
};

export default App;
