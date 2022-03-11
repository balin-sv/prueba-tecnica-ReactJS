import React, { useContext } from "react";
import SelectForm from "../select-form";
import WeatherReport from "../weather-report";
import { AppContext } from "../context/app-context";

const MainPage = () => {
  const value = useContext(AppContext);
  return (
    <>
      <SelectForm />
      {value.weatherResponse ? <WeatherReport /> : null}
    </>
  );
};

export default MainPage;
