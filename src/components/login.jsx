import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  


  {error && <p>{error}</p>}


  
  {/* Inicio Formulario de Login */}

  return (
    <div >
     <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Sign In</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control form-input"
            id="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            className="form-control form-input"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
      {/* Fin Formulario de Registro */}
    </div>
  );
}

export default Login;
