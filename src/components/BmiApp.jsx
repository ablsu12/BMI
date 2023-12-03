import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import BmiPage from "./pages/BmiPage";

export const MyContext = React.createContext();

export const BmiApp = () => {
  const [username, setUsername] = useState("");
  return (
    <MyContext.Provider value={ username }>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomePage username={username} setUsername={setUsername} />
          }
        />
        <Route path="/BmiPage" element={<BmiPage />} />
      </Routes>
    </MyContext.Provider>
  );
};
