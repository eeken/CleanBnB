import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'
import ShowResidence from "../components/ShowResidence";

function MyPage() {
  const { fetchUser } = useContext(UserContext)
  let history = useHistory();
    
  useEffect(() => {
    fetchUser();
  }, []);

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
      <ShowResidence />
      <Row className="darkbrown boxes m-2">
        <Col className="p-3 golden">+ ADD A RESIDENCE</Col>
      </Row>
    
      </Container>
  );

}

export default MyPage;
