import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container fluid className='bg-primary text-white'>
        <Row>
          <Col className='text-center py-3 '>
          Tout droits Reservés &copy; KaravanSeray
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
