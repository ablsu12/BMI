import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BmiPage from "./pages/BmiPage";
import WelcomePage from "./pages/WelcomePage";
import ResultPage from "./pages/ResultPage";

const Context = React.createContext();

export const BmiApp = () => {
  const [username, setUsername] = useState("");
  const [userGender, setUserGender] = useState(null);
  const [userHeight, setUserHeight] = useState(176);
  const [userWeight, setUserWeight] = useState(60);
  const [userAge, setUserAge] = useState(23);
  const [userInfo, setUserInfo] = useState({
    username,
    userGender,
    userHeight,
    userWeight,
    userAge,
  });
  const contextValue = {
    username,
    setUsername,
    userGender,
    setUserGender,
    userHeight,
    setUserHeight,
    userWeight,
    setUserWeight,
    userAge,
    setUserAge,
    userInfo,
    setUserInfo,
  };
  return (
    <Context.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/BmiPage" element={<BmiPage />} />
        <Route path={"/ResultPage"} element={<ResultPage />} />
      </Routes>
    </Context.Provider>
  );
};
export default Context;
