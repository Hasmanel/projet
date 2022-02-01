import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../products';

const Home = () => {
  return(

   <Container>
       <h1> Nouvelle Arrivage </h1> 
       <Row>
          
          {products.map((p) => (
           <Col>  
           <h2>{p.name}</h2> 
           <img src={p.image}/>
           </Col>
           
          ))}
      </Row>
     
  </Container>

     
    );
  
};

export default Home;
