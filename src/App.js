import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './componantes/Footer';
import Header from './componantes/Header';
import Home from './page/Home';
const App = () => {
  return (
    <>
    <Header/>
    <main>    
       <Container>

      <h1> Home2 </h1>
      <Home />
      </Container>
      </main>

      <Footer/>
    </>
  )
}

export default App
