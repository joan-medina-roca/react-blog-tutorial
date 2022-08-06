import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./sidebar.css"

const Sidebar = () => {
  return (
    <Container className='text-center font-primary px-0'>
      <Row>
        <Col>
          <h4>About Me</h4>
          <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="This is me" className='rounded px-3 img-fluid'/>
          <p className='mt-3 text-justify px-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste consectetur, alias maxime atque cumque nemo dolorum obcaecati! Cum, placeat!</p>
          <h5>Categories:</h5>
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