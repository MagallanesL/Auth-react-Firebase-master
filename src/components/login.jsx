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
     <div class="login-form-container">
  <form class="login-form" onSubmit={handleSubmit}>
    <h1 class="h3 mb-3 fw-normal">Sign In</h1>
    <div class="form-floating mb-3">
      <input
        type="email"
        name="email"
        class="form-control form-input"
        id="email"
        placeholder="youremail@company.com"
        onChange={handleChange}
      />
      <label for="email">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        name="password"
        class="form-control form-input"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <label for="password">Password</label>
    </div>
    <div class="text-center"> 
      <button class="btn btn-primary" type="submit">
        Login
      </button>
    </div>
  </form>
</div>
      {/* Fin Formulario de Registro */}
    </div>
  );
}

export default Login;
