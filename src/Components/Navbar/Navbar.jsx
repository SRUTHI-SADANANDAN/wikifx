import { React, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Navbar.css'
import Currency from '../Currency-section/currency';
import logoImg from '../Navbar/companylogo.png'

// import logoImg from "./logo fx reviw/logofxreviw-1.png"
export const NavbarSection = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation(); // Get the current location using useLocation


  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <div hidden={props.isHide}>
      <Currency />
      <Navbar className='bg-light' expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Link to="/"  > <Navbar.Brand style={{ color: "whitesmoke" }} href="/"> <img
    src={logoImg}
    alt="Wiki-fx"
    style={{ height: '70px', marginRight: '10px', width:150}} // Adjust the height and margin as needed
  /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isNavCollapsed ? 'collapse' : ''}`}>
            <Nav className="ms-5 me-auto">
              {/* Use Link component instead of Nav.Link */}
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
              <Link to="/brokers-list" className={`nav-link ${location.pathname === '/brokers-list' ? 'active-link' : ''}`}>Brokers</Link>
              <Link to="/ranking-list" className={`nav-link ${location.pathname === '/ranking-list' ? 'active-link' : ''}`}>Ranking List</Link>
              {/* <Link to="/education-Educate-yourself" className={`nav-link ${location.pathname === '/education-Educate-yourself' ? 'active-link' : ''}`}>Education</Link> */}
              <Nav.Link href="/education-Educate-yourself" className={`nav-link ${location.pathname === '/education-Educate-yourself' ? 'active-link' : ''}`}>Education</Nav.Link>
              <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active-link' : ''}`}>News</Link>
              <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active-link' : ''}`}>About Us</Link>
              <Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active-link' : ''}`}>Contact Us</Link>
            </Nav>
            <Nav className="flex-row" style={{marginLeft:20}}>
              <div className="col-">
              <Nav.Link href="#youtube">
                <i className="fab fa-youtube"></i>
              </Nav.Link>
              </div>
              <div className="col-">
              <Nav.Link href="#facebook">
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              </div>
              <div className="col-">
              <Nav.Link href="#instagram">
                <i className="fab fa-instagram"></i>
              </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

