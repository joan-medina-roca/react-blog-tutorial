import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

import "./write.css"

const Write = () => {
  return (
    <Container className='mb-3'>

        <img className='rounded shadow mb-3' src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A single post" height="300px" width="100%" style={{ objectFit: "cover"}}/>

        <Form>
          <Row className='mx-2 font-secondary'>
            <label htmlFor="fileUploader" className='text-center btn w-25 mx-auto border rounded-pill mb-3' style={{minWidth: "150px"}}><FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon> Image</label>
            <input type="file" id="fileUploader" className='d-none'/>
            <input type="text" placeholder='Title' autoFocus={true} className="h2 border-0"/>
            <textarea type="text" placeholder='Tell your story...' rows="10" className='h5 border-0 mt-3'></textarea>
              <Button className='btn-dark'>Publish</Button>
          </Row>
        </Form>
    </Container>
  )
}

export default Write