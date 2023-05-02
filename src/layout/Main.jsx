import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className='md:min-h-[calc(100vh-190px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
