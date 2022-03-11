import { useState, useEffect, createContext } from "react";
import React from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [weatherResponse, setWeatherResponse] = useState("");
  const [communeName, setCommuneName] = useState("");

  useEffect(() => {}, []);

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
