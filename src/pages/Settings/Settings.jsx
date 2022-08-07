import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import "./settings.css"

import { Sidebar } from '../../components'
import { images } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Settings = () => {
  return (
    <Container fluid>
        <Row className='font-tertiary'>
        <Col className='col-12 col-lg-9 px-4'>
          <div className='d-flex justify-content-between align-items-center flex-column flex-sm-row'>
            <h3 className='font-primary'>Update your account</h3>
            <h6 className='btn btn-danger shadow'>Delete your account</h6>
          </div>
            <Form>
              <label className='my-2 h5'>Profile Picture</label>
              <div>
                <img src={images.joanmedina} alt="My Profile" width="75px" height="75px" className='rounded-pill shadow' style={{objectFit: "cover"}}/>
                <label htmlFor="fileInput" className='btn p-0 ms-3 border-0'><FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon></label>
                <input type="file" id="fileInput" className='d-none' />
              </div>
              <div className='d-flex flex-column my-4'>
                <label className='h5'>Username</label>
                <input type="text" placeholder="Joan" className='border-0 border-bottom' style={{outline: "none"}}/>
                <label className='h5 mt-4'>Email</label>
                <input type="email" placeholder="Joan@joan.com" className='border-0 border-bottom' style={{outline: "none"}}/>
                <label className='h5 mt-4'>Password</label>
                <input type="password" placeholder="Your Password" className='border-0 border-bottom' style={{outline: "none"}}/>
              <Button className='btn-success mt-4 mx-auto px-4 shadow'>Update</Button>
              </div>
            </Form>
        </Col>
        <Col className='col-3 d-none d-lg-block border-start my-4'>
            <Sidebar/>
        </Col>
        </Row>
    </Container>
  )
}

export default Settings