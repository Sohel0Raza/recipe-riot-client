import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log('headeruser',user)
  const handelLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error=>{
      console.log(error)
    })
  }

  const handleDisplayName = ()=>{
    return <title>{user.displayName}</title>
  }
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
        <div className="md:mr-20 flex justify-center items-center">
          {
            user?<>
            <div className="h-10 w-10 mr-5">
             <img  onMouseMove={handleDisplayName} className="h-full w-full rounded-full" src={user.photoURL} alt=""/>
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
