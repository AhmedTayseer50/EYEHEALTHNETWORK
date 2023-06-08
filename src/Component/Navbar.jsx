
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'
import "../App.css"

function OffcanvasExample() {
    return (
        <>
            {['xl'].map((expand) => (

                <Navbar key={expand} bg="light" expand={expand} className="mb-3 navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 ">
                    <Container fluid>
                        {/* you can put your logo her  */}
                        
                            <NavLink to="/" className="navbar-brand">
                                <div className="main_logo">
                                    <img src="img/Logo.1.png" alt="" />
                                    <div className="line_logo">
                                        <h2>EYE HEALTH</h2>
                                        <h4>N E T W O R K</h4>
                                    </div>
                                </div>
                            </NavLink>
                        

                        {/* related to the side button */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                    <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
                                    <NavLink to="/Appointment" className="nav-link">Appointment</NavLink>
                                    <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>

                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;