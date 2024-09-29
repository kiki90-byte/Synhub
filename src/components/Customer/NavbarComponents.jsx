//import components react bootstrap
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

//import fontawesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";


const NavbarComponents = ({isloggedIn}) => {
    return(
        <>
       <Navbar expand="lg" fixed="top" bg="white">
      <Container>
        <Navbar.Brand href="#home"><img src= {logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center">
            {isloggedIn ?(
              <Nav.Link href="/home">Beranda</Nav.Link>
            ):(
              <Nav.Link href="/">Beranda</Nav.Link>
            )}
          
            <NavDropdown title="Ruangan" id="basic-nav-dropdown">
              <NavDropdown.Item href="/meeting">Ruang Meeting</NavDropdown.Item>
              <NavDropdown.Item href="/event">Ruang Acara </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/coworking">Coworking</Nav.Link>
            {isloggedIn ?(
              <>
              <Dropdown>
                <Dropdown.Toggle>
                  <FontAwesomeIcon icon={faCircleUser}/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </>
            ) :(
              <Link to="/login" className="btn btn-teal">Login</Link>
            )
            }   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default NavbarComponents