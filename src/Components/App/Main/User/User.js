import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            carreras: [],
        }
    }

    componentDidMount () {
        const token = localStorage.getItem("token");
        if (token) {
          fetch('http://localhost:1337/carreras/', {
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
              carreras: data
            });
            console.log("carreras: ", this.state.carreras);
          })
          
        }
      }

    render(){
        return(
            <Row>
            <Col>
            <h1>Alumnos</h1>
              <ListGroup>
                {this.state.carreras.map(
                    (carrera,index) =>
                        ( 
                            <ListGroup.Item>{carrera.Nombre}</ListGroup.Item>
                          )
                        )}
              </ListGroup>
            </Col>
          </Row>
        );
    }
}

export default User;