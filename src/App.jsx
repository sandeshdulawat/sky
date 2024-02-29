import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoPage from "./Pages/NoPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 700,
      easing: "ease-in",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
