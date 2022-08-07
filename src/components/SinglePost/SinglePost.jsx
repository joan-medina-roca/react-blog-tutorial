import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./singlePost.css"

const SinglePost = () => {
  return (
    <Container className='text-center'>
      <img className='rounded shadow' src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A single post" height="400px" width="100%" style={{ objectFit: "cover"}}/>
    <Row className='mt-3 font-secondary'>
      <Col className='col-3'></Col>
      <Col className='col-6'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      </Col>
      <Col className='d-flex col-3 justify-content-end'>
        <a href="/" alt="Facebook"><FontAwesomeIcon icon={faPenToSquare} size="xl" className="mx-1 text-success"/></a>
        <a href="/" alt="Facebook"><FontAwesomeIcon icon={faTrashCan} size="xl" className="mx-1 text-danger"/></a>
      </Col>
    </Row>
    <Row className='mx-1 text-black-50'>
      <Col className='d-flex justify-content-start'>
        <p>Author: Joan Medina Roca</p>
      </Col>
      <Col className='d-flex justify-content-end'>
        <p>1 hour ago</p>
      </Col>
    </Row>
    <p className='font-tertiary h5' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni neque commodi aspernatur ad est sequi aliquam? Vero laborum impedit beatae, incidunt distinctio earum quis iste iusto dolorum labore deleniti, sapiente architecto eum veritatis tempore voluptate ullam? Sed architecto necessitatibus, rerum dicta consequuntur qui est exercitationem ut cupiditate, magni laborum in illo incidunt quibusdam provident nesciunt ipsam dolorem sit rem asperiores. Non explicabo officiis nulla odio voluptatem enim earum tempore eius voluptate quae. Numquam repellendus tempore cumque id quis iusto labore laudantium magnam optio voluptatum, ut modi ipsa impedit dolor voluptatem enim nostrum praesentium deserunt consequatur, molestiae et? Quas, facere ex. Dolore eligendi magnam nobis, nesciunt voluptates voluptatem praesentium, labore sed obcaecati ad atque distinctio veritatis facilis qui esse incidunt a temporibus hic modi? Quisquam necessitatibus nisi quod quam voluptate sed, cumque ullam error dicta temporibus aperiam rerum dolores laboriosam, illo eum animi debitis, iusto assumenda velit fugiat? Est ex repellendus nostrum similique voluptates eligendi corporis, maxime laborum illo temporibus itaque debitis a vitae eveniet? Consequatur cum nisi quasi fugit eaque quo a dolorum tempore atque reprehenderit explicabo provident esse libero perferendis, voluptates aperiam nihil eum, excepturi fugiat eveniet magni rerum officia possimus! Debitis distinctio architecto ullam exercitationem esse quam?</p>

    </Container>
  )
}

export default SinglePost