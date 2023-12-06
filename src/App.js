// App.js
import React from "react";
import { BmiApp } from "./components/BmiApp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BmiApp />} />
      </Routes>
    </Router>
  );
};

export default App;
