import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (loading) return <h1>Cargando....</h1>;

  return (
    <div className="menu-container">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CIAPASL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#afiliados">Afiliados</Nav.Link>
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
            
            <Form className="d-flex flex-column flex-lg-row align-items-lg-center">
              <FormControl type="search" placeholder="Buscar" className="me-lg-2 mb-2 mb-lg-0" aria-label="Search" />
              <Button variant="outline-light">Buscar</Button>
            </Form>

            <Nav className="ms-lg-2">
              <h6>{user.email}</h6>
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

export default Home;

