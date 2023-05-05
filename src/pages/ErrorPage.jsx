import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, statusText} = useRouteError();
  return (
      <div className="flex flex-col items-center lg:mt-60"> 
       <img src="../../public/images.png" alt="" />
        <h2 className="text-2xl font-bold">{statusText}</h2>
        <p>Error:{error.message}</p>
        <Link to="/"><button className="btn-primary">Back to Homepage</button></Link>
      </div>
  );
};

export default ErrorPage;
