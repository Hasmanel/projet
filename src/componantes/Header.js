import React from 'react'
import { Navbar,Container,Nav,FormControl,Button,Form } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
       <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">KaravanSeray</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="produits"><i className="fas fa-align-justify"></i> PRODUITS</Nav.Link>
        <Nav.Link href="connexion"><i className="fas fa-user"></i>CONNEXION</Nav.Link>
        <Nav.Link href="panier"> <i className="fas fa-shopping-cart"></i>PANIER</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="recherche"
          placeholder="RECHERCHE"
          className="me-2"
          aria-label="RECHERCHE"
        />
        <Button variant="outline-success"> <i className="fas fa-search"></i> RECHERCHE</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    </header>
  )
}

export default Header
