import React from "react";
import Header from "../header/index";
import SelectForm from "../select-form/index";
import WeatherReport from "../weather-report";
import { AppProvider } from "../context/app-context";
import "./app.css";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <SelectForm />
      <WeatherReport />
    </AppProvider>
  );
};

export default App;
