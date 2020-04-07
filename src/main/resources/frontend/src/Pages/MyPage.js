import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'

function MyPage() {
 
  const { fetchUser } = useContext(UserContext)
  let history = useHistory();
    
  

  return (
    
    <Container  className="themed-container text-center" fluid="sm">
      <Row className="white boxes m-2">
        <Col className="p-5 golden ">Welcome, Ola</Col>
      </Row>
      <Row className="golden-bg boxes m-2">
        <Col className="p-3 darkbrowntext">SHOW MY BOOKINGS</Col>
      </Row>
      <Row className="golden-bg boxes m-2">
        <Col className="p-3 darkbrowntext">SHOW MY RESIDENCES</Col>
      </Row>
      <Row className="darkbrown boxes m-2">
        <Col className="p-3 golden">+ ADD A RESIDENCE</Col>
      </Row>
    
      </Container>
  );

}

export default MyPage;
