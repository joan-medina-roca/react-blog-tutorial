import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "./topbar.css"

import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { images } from '../../constants'
import { Link } from 'react-router-dom'

const Topbar = () => {
  const user = true;
  return (
    <Container fluid className='font-primary sticky-top bg-white shadow-sm mb-4'>
      <Row className='align-items-center' style={{ minHeight: "80px"}}>
        <Col className="col-3 d-none d-md-block text-center">
          <a href="/" alt="Facebook"><FontAwesomeIcon icon={faFacebook} size="1x" className="mx-1 text-black"/></a>
          <a href="/" alt="Instagram"><FontAwesomeIcon icon={faInstagram} size="1x" className="mx-1 text-black"/></a>
          <a href="/" alt="Twitter"><FontAwesomeIcon icon={faTwitter} size="1x" className="mx-1 text-black"/></a>
          <a href="/" alt="Youtube"><FontAwesomeIcon icon={faYoutube} size="1x" className="mx-1 text-black"/></a>
        </Col>
        
          <Col className='col-12 col-md-6'>
          <Navbar expand="md"  className='d-flex flex-column'>
          <Navbar.Brand href="/" className='d-md-none mx-auto fs-4 mx-auto px-3'>JMR Blog</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-0' style={{ outline: "none", boxShadow: "none"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-md-auto text-center align-items-center">
                <Navbar.Brand href="/" className='d-none d-md-block fs-4 mx-auto px-3'>JMR Blog</Navbar.Brand>
                <Link to="/write" className='text-black text-decoration-none fw-light fs-5 px-1'>Write
                </Link>
                <Link to="/about" className='text-black text-decoration-none fw-light fs-5 px-1'>About
                </Link>
                <Link to="/contact" className='text-black text-decoration-none fw-light fs-5 px-1'>Contact
                </Link>
                <Link to="/" className='text-black text-decoration-none fw-light fs-5 px-1'>
                  {user && "Logout"}
                </Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col className='col-3 d-none d-md-block text-center'>
            {
              user ? (
            <a href="/settings"><img src={images.joanmedina} alt="User Profile" className='topImg mx-2' style={{objectFit: "cover"}}/>
            </a>
              ) : (
                <>
                <Link to="/login" className='text-black text-decoration-none fw-light fs-5 px-1'>Login
                </Link>
                <Link to="/register" className='text-black text-decoration-none fw-light fs-5 px-1'>Register
                </Link>
                </>
              )
            }
            <a href="/"><FontAwesomeIcon icon={faSearch} size="1x" className="mx-1 text-black-50 verticalMiddle"/></a>
          </Col>
        </Row>
    </Container>
  )
}

export default Topbar