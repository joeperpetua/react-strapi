import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Header from './Header/Header'
import './App.css'



class App extends Component {
 

  render() {
    return (
    <Container fluid="true">
      <Header />
      <Main />
      <Footer />
    </Container>
    );
  }
  }
  export default App;

