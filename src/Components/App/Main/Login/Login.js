import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      username: null,
      password: null,
    };
  }

  componentDidMount () {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === '"admin"') {
      window.location.replace("/admin");
    }

    if (token && role === '"alumno"') {
      window.location.replace("/user");
    }
  }



  login (event) {
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      body: JSON.stringify(
        {
          identifier: '' || this.state.username,
          password: '' || this.state.password,
        }
      ),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })

    .then(response => response.json())
    .then(data => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("role", JSON.stringify(data.user.role.name));
          localStorage.setItem("carrera", JSON.stringify(data.user.carrera));
        }
    });

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === '"admin"') {
      window.location.replace("/admin");
    }

    if (token && role === '"alumno"') {
      window.location.replace("/user");
    }
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
  }
  
  render (){
    return(
        
        <Container>
          <Row>
            <Col />
            <Col md={3}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control name="username" type="username" placeholder="Username" onChange={this.handleInputChange.bind(this)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInputChange.bind(this)}/>
                </Form.Group>
                
                <Button variant="primary" onClick={this.login.bind(this)}> Login </Button> 
                
              </Form> 
            </Col>
            <Col />
          </Row>

          
        </Container>
    );
    }
}

export default Login;





