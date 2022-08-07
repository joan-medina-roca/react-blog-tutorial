import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar, SinglePost } from '../../components'

import "./single.css"

const Single = () => {
  return (
    <Container fluid className='justify-content-center'>
      <Row>
        <Col className='col-12 col-lg-9'>
          <SinglePost/>
        </Col>
        <Col className='d-none col-lg-3 d-lg-block border-start'>
          <Sidebar/>
        </Col>
      </Row>
    </Container>
  )
}

export default Single