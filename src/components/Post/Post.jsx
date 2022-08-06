import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./post.css"

const Post = () => {
  return (
    <Container className='mt-4'>
    <Row>
      <Col>
        <img className='img-fluid rounded shadow' src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A single post" />
      </Col>
    </Row>
    <Row>
      <Col className='d-flex justify-content-center font-secondary'>
        <h6 className="px-1 mt-2 text-warning">Music</h6>
        <h6 className="px-1 mt-2 text-warning">Life</h6>
      </Col>
    </Row>
    <Row>
      <Col className="d-flex flex-column">
        <h2 className='font-primary mb-0 h3'>Lorem ipsum dolor sit amet.</h2>
        <p className='text-black-50 font-secondary'>1 Hour ago</p>
        <p className='font-primary text-black fw-light' style={{ textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam at! Inventore exercitationem maxime quidem odit illo in dolor nobis sapiente odio veritatis voluptate, consectetur commodi ex? Incidunt, deleniti esse...</p>
      </Col>
    </Row>


    </Container>
  )
}

export default Post