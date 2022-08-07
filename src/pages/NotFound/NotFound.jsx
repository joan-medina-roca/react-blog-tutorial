import React from 'react'
import { Container } from 'react-bootstrap'

import "./notfound.css"

const NotFound = () => {
  return (
    <Container className='text-center mt-5'>
      <h2 className='fw-bold'>404 error</h2>
      <h2>Sorry, content not found...</h2>
      <a href="/" className='text-black'>Click here to return to HOME page</a>
    </Container>
  )
}

export default NotFound