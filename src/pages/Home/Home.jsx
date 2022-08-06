import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, Posts, Sidebar } from '../../components'

import "./home.css"

const Home = () => {
  return (
    <div style={{textAlign: "center"}}>
        <Header/>
        <Container fluid>
          <Row>
            <Col className='col-12 col-lg-9'>
                <Posts />
            </Col>
            <Col className='col-3 d-none d-lg-block border-start my-3'>
                <Sidebar/>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Home