import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { identifier } from '@babel/types';

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            carrera: {},
            id:'',
            endPoint: '',
        }
    }

    componentDidMount () {
        const token = localStorage.getItem("token");
        id = localStorage.getItem("role");
        endPoint = 'http://localhost:1337/carreras/' + id;
        if (token) {

          fetch('http://localhost:1337/carreras/1', {
            method: 'get',
            body: null,
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {
            this.setState({
              carrera: data
            });
            console.log("carreras: ", this.state.carrera.Nombre);
          })
          
        }
      }

    render(){
        return(
            <Row>
            <Col>
            <h1>Tu carrera es:</h1>
              <ListGroup>
                <ListGroup.Item>{this.state.carrera.Nombre}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        );
    }
}

export default User;