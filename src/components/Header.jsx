import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
     <div className="flex items-center justify-between bg-green-50 py-3">
        <div className="md:ml-20">
            <h2 className="font-bold text-3xl font-serif"><span className="text-amber-700">Recipe</span><span className="text-cyan-800">Riot</span></h2>
        </div>
        <div className="font-semibold space-x-10">
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/blogs">Blogs</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/login">Login</NavLink>
        </div>
        <div className="md:mr-20">
        <button className="btn-primary">Login</button>
        </div>
     </div>
    </nav>
  );
};

export default Header;
