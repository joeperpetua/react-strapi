import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup'

class Admin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            alumnos: [],
            carreras: [],
        }
    }

    componentDidMount () {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        if (token && role === '"admin"') {
          fetch('http://localhost:1337/carreras', {
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
          });
    
    
          fetch('http://localhost:1337/alumnos', {
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
              alumnos: data
            });
            console.log("alumnos: ", this.state.alumnos);
          });
        }else{
          console.log('No tiene permisos');
        }
      }

    render(){
        return(
            <Container>
            <Row>
                <Col>
                <h1>Carreras</h1>
                <ListGroup>
                    {this.state.carreras.map(
                        (carreras,index) =>
                            ( 
                                <ListGroup.Item>{carreras.Nombre}</ListGroup.Item>
                            )
                            )}
                </ListGroup>
                </Col>
            </Row>

          <Row>
            <Col>
            <h1>Alumnos</h1>
              <ListGroup>
                {this.state.alumnos.map(
                    (alumnos,index) =>
                        ( 
                            <ListGroup.Item>{alumnos.Nombre} {alumnos.Apellido}</ListGroup.Item>
                          )
                        )}
              </ListGroup>
            </Col>
          </Row>
          </Container>
        );
    }
}

export default Admin;