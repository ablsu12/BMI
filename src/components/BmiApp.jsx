import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BmiPage from "./pages/BmiPage";
import WelcomePage from "./pages/WelcomePage";

export const Context = React.createContext();

export const BmiApp = () => {
  const [username, setUsername] = useState("");
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 548);
  const [isScreenTall, setIsScreenTall] = useState(window.innerHeight < 815);
  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        isScreenWide,
        setIsScreenWide,
        isScreenTall,
        setIsScreenTall,
      }}
    >
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/BmiPage" element={<BmiPage />} />
      </Routes>
    </Context.Provider>
  );
};
