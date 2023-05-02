import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status, statusText} = useRouteError();
  console.log(error);
  return (
      <div className="flex flex-col items-center lg:mt-60"> 
        <h2 className="text-9xl font-serif font-medium">{status}</h2>
        <h2 className="text-2xl font-bold">{statusText}</h2>
        <p>Error:{error.message}</p>
        <Link to="/"><button className="btn-primary">Back to Homepage</button></Link>
      </div>
  );
};

export default ErrorPage;
