import React, { useContext, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { UserContext } from '../contexts/UserContextProvider'
import AddResidence from "../components/AddResidence";
import ShowResidence from "../components/ShowResidence";

function MyPage() {
  const { user } = useContext(UserContext)

  function showInformation() {
    let showResult = false;
  }

  if (user === null) {
    return null;
  }

  // let name = user.firstName
  //fetchUser()
  return (
    
    <Container  className="themed-container text-center" fluid="sm">
      <Row className="white boxes m-2">
        <Col className="p-5 golden ">Welcome, {user.firstName} </Col>
      </Row>
      <Row className="golden-bg boxes m-2">
        <Col className="p-3 darkbrowntext">SHOW MY BOOKINGS</Col>
      </Row>
      <div onClick={showInformation} style={{ cursor: "pointer" }}>
      <Row className="golden-bg boxes m-2">
        <Col className="p-3 darkbrowntext">SHOW MY RESIDENCES</Col>
      </Row>
      <ShowResidence/>
      </div>
      <Row className="darkbrown boxes m-2">
        <Col className="p-3 golden" >+ ADD A RESIDENCE</Col>
        <AddResidence/>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
      </Container>
  );

}

export default MyPage;
