import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  


  {error && <p>{error}</p>}

  {/* Inicio Formulario de Registro */}
  return (
    <div className="Register-container">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">New User</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
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
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
      {/* Fin Formulario de Registro */}
    </div>
  );
}

export default Register;
