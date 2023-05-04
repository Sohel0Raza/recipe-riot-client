import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handelLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <nav>
     <div className="md:flex items-center justify-between bg-green-50 py-3">
        <div className="px-5 md:px-0 md:ml-20 ">
            <h2 className="font-bold text-3xl font-serif"><span className="text-amber-700">Recipe</span><span className="text-cyan-800">Riot</span></h2>
        </div>
        <div className="font-semibold flex flex-col md:block ml-5 space-y-2 md:space-y-0 md:space-x-10">
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/blogs">Blogs</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/login">Login</NavLink>
        </div>
        <div className="md:mr-20 mt-3 md:mt-0 ml-5 md:ml-0 md:flex justify-center items-center">
          {
            user?<>
            <div className="h-10 w-10 mr-5">
              <button>
              <img  className="h-full w-full rounded-full tooltip" data-tip={user.displayName} src={user.photoURL} alt=""/>
              </button>
            </div>
            <Link to="/login"> <button onClick={handelLogOut} className="btn-primary">Sing Out</button></Link> </> 
            : <Link to="/login"> <button className="btn-primary">Login</button></Link>
          }
      
        </div>
     </div>
    </nav>
  );
};

export default Header;
