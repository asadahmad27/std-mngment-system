import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../utils/mockAPI";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    //mock API and mock function
    const userData = fetchUser(fields.email, fields.password);

    if (userData?.status) {
      setError("");
      navigate(`/details/${userData.id}`);
    } else {
      setError("Email or password is incorrect");
    }
    // ;
  };
  return (
    <div className="login-root d-flex align-items-center justify-content-center">
      <div className=" login-form p-5">
        <h4 style={{ color: "white" }} className="text-center">
          Enter your registered mail and password:
        </h4>
        <form onSubmit={onSubmit}>
          <div className="mt-5">
            <input
              type="text"
              name="email"
              className="w-full w-100"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mt-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full w-100"
              id="pass-key"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <span
              className={`position-absolute fa fa-lock${
                showPassword ? "-open" : ""
              }`}
              style={{ top: "15px", right: "15px" }}
              onClick={(show) => setShowPassword(!showPassword)}
            ></span>
          </div>
          {error && <p className="mt-3 text-danger">{error}</p>}

          <input type="submit" className="submit-btn mt-4" value="Sign in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
