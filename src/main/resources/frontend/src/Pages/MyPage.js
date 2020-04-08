import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import AddResidence from "../components/AddResidence";

function MyPage() {
  const { user, fetchUser } = useContext(UserContext);
  let history = useHistory();
  console.log(user);
  // let name = user.firstName
  if (user === null) {
    return null;
  }
  return (
    <Container className="themed-container text-center" fluid="sm">
      <Row className="white boxes m-2">
        <Col className="p-5 golden ">Welcome, {user.firstName}!</Col>
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
      <Row>
        <Col>
          <AddResidence></AddResidence>
        </Col>
      </Row>
    </Container>
  );
}

export default MyPage;
