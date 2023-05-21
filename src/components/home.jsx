import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (loading) return <h1>Loading....</h1>;

  return (
    <div className="menu-container">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CIAPASL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Afiliados</Nav.Link>
              <Nav.Link href="#pricing">Facturacion</Nav.Link>
              <NavDropdown title="Acciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Nuevo Afiliado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Modificar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dar Baja</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <h6>
            {user.email}
      </h6>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-info"
                style={{ backgroundColor: "#87CEFA" }}
                >

                Cerrar Sesión
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default home;
