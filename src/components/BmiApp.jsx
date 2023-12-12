import React, { lazy, Suspense, useMemo, useState } from "react";
import { CustomContext } from "./context/customContext";
import { Routes, Route } from "react-router-dom";
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const BmiPage = lazy(() => import("./pages/BmiPage"));
const ResultPage = lazy(() => import("./pages/ResultPage"));

const BmiApp = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userGender: null,
    userHeight: 177,
    userWeight: 60,
    userAge: 22,
  });
  const contextValue = useMemo(() => {
    return {
      userInfo,
      setUserInfo,
    };
  }, [userInfo]);

  return (
    <CustomContext value={contextValue}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/BmiPage" element={<BmiPage />} />
          <Route path={"/ResultPage"} element={<ResultPage />} />
        </Routes>
      </Suspense>
    </CustomContext>
  );
};

export default BmiApp;
