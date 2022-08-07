import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

import "./login.css"

const Login = () => {
  return (
    <Container fluid style={{background: "url(https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", height: "100vh", backgroundSize: "cover", marginTop: "-100px"}}>
    <Row className='font-tertiary d-flex justify-content-around align-items-center mx-2' style={{height: "100vh"}}>
    <Form className='d-flex flex-column border rounded bg-white p-4 shadow text-center' style={{maxWidth: "400px"}}>
    <h3 className='text-center font-primary'>Login to write an article</h3>
        <label className='h5'>Email</label>
        <input type="email" placeholder='Enter your email...' className='border-0 border-bottom' style={{outline: "none"}}/>
        <label className='h5 mt-3'>Password</label>
        <input type="password" placeholder='Enter your password...' className='border-0 border-bottom' style={{outline: "none"}}/>
        <Button className='mt-4 mb-2 btn-outline-dark mx-auto px-4 shadow bg-white text-black'>Login</Button>
        <a href="/register" className='text-primary font-primary border-top mt-3 pt-3'>Not a member? Click here to REGISTER</a>
    </Form>
    </Row>
  </Container>
  )
}

export default Login