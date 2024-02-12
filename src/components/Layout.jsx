
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'

const Layout =() => {

return (
  
  <div>
    
      <Navbar expand="lg" className="navbar">
        <Container>
            
                <Link to="/about">
                  <img src="/logo.svg" alt="Logo J.Alejandro" />
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                      <Link className="enlaceNav" to="/about">Sobre mí</Link>
                      <Link className="enlaceNav" to="/projects">Proyectos</Link>
                  </Nav>
                  </Navbar.Collapse>
        </Container>
      </Navbar>
    <Outlet/>
  </div>


);

}

export default Layout;