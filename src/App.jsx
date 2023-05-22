import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Afiliados from "./components/afiliados";
import Register from "./components/register";
import { AuthProvider } from "./context/authContext";


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/afiliados" element={<Afiliados />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
