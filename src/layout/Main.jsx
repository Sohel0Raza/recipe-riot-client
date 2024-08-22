import React from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      <div className="md:min-h-[calc(100vh-190px)]">
        {noHeaderFooter || <Header />}
        <Outlet />
        {noHeaderFooter || <Footer />}
      </div>
    </div>
  );
};

export default Main;
