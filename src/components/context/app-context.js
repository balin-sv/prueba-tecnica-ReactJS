import { useState, createContext } from "react";
import React from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [weatherResponse, setWeatherResponse] = useState("");
  const [communeName, setCommuneName] = useState("");

  return (
    <AppContext.Provider
      value={{
        setWeatherResponse,
        weatherResponse,
        setCommuneName,
        communeName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
