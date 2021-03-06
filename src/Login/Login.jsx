import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API_AUTH from "../Config";
import "./Login.css";

const Login = () => {
  const [inpEmail, setEmail] = useState("");
  const [inpPassword, setPassword] = useState("");

  const navigate = useNavigate();
  const notify = (error) => {
    toast.error(Object.values(error).toString().replace(/,/gi, ""), {
      icon: false,
      // theme: "dark",
    });
  };

  const registerUser = async (newUser) => {
    console.log(newUser, "login data");
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      const res = await axios.post(`${API_AUTH}login/`, newUser, config);
      const { access, refresh } = res.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      navigate("/");
    } catch (error) {
      notify(error.response.data);
    }
  };

  function handleClick() {
    const form_data = new FormData();
    if (!inpEmail) notify("Enter email");
    else if (!inpPassword) notify("Enter password");
    else {
      form_data.append("email", inpEmail);
      form_data.append("password", inpPassword);
      registerUser(form_data);
    }
    console.log(inpEmail, inpPassword);
  }

  return (
    <div className="container-login">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card" style={{ width: "50vw" }}>
          <div className="card-body">
            <h2>Login</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                size={"200px"}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                key="email"
                placeholder="*Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                key="password"
                placeholder="*Password"
              />
            </div>
            <NavLink to="/">
              <button
                onClick={handleClick}
                className="btn btn-light"
                style={{ width: "100%" }}
              >
                Login
              </button>
              <ToastContainer />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
