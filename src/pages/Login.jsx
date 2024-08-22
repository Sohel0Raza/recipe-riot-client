import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { singIn, signInWithGoogle, singInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handelLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess("login successful !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelLoginGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("login successful !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelLoginGitHub = () => {
    singInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("login successful !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-serif">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="form-control mt-6">
                <button className="btn-primary">Login</button>
              </div>
              <hr className="my-5" />
              <button
                onClick={handelLoginGoogle}
                className="btn-outlined  flex justify-center items-center"
              >
                <FaGoogle className="mr-2" /> Login With Google
              </button>
              <button
                onClick={handelLoginGitHub}
                className="btn-outlined  flex justify-center items-center"
              >
                <FaGithub className="mr-2" /> Login With GitHub
              </button>
              <p className="text-gray-600">
                <small>
                  New to RecipeRiot?
                  <Link to="/register" className="text-red-600 btn btn-link">
                    Create New Account
                  </Link>
                </small>
              </p>
              <p className="text-green-600">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
