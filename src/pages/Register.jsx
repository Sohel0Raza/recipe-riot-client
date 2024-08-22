import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handelRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, photoURL);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserData(loggedUser, name, photoURL);
        form.reset();
        setError("");
        setSuccess("User has been created successfully !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });

    const updateUserData = (user, name, photoURL) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          console.log("update data");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-serif">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="image url"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <p className="text-red-600">{error}</p>
              <div className="form-control mt-6">
                <button className="btn-primary">Register</button>
              </div>
              <p className="text-gray-600">
                <small>
                  Already have an account?
                  <Link to="/login" className="text-red-600 btn btn-link">
                    Login
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

export default Register;
