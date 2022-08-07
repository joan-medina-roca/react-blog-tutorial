import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { images } from '../../constants'

import "./sidebar.css"

const Sidebar = () => {
  return (
    <Container className='text-center font-primary px-0'>
      <Row>
        <Col>
          <h4>About Me</h4>
          <img src={images.joanmedina} alt="This is me" className='rounded img-fluid shadow' style={{ maxHeight: "250px"}}/>
          <p className='mt-3 px-3 fw-light' style={{ textAlign: "justify" }}>Hi! I'm Joan Medina Roca, web designer and front-end developer. I work with different technologies to create the best experiences that work across multiple devices.</p>
          <hr className='mx-5 my-4'/>
          <h5>Post Categories:</h5>
          <ul className='list-unstyled'>
            <li className='w-50 d-inline-block'>Life</li>
            <li className='w-50 d-inline-block'>Music</li>
            <li className='w-50 d-inline-block'>Style</li>
            <li className='w-50 d-inline-block'>Tech</li>
            <li className='w-50 d-inline-block'>Cinema</li>
            <li className='w-50 d-inline-block'>Literature</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar