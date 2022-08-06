import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Post from "../Post/Post"

import "./posts.css"

const Posts = () => {
  return (
    <Container>
      <h5 className='font-secondary h3 mt-4'>Latest Posts...</h5>
      <Row>
        <Col className='col-12 col-lg-6'>
          <Post/>
        </Col>
        <Col className='col-12 col-lg-6'>
          <Post/>
        </Col>
      </Row>
    </Container>
  )
}

export default Posts