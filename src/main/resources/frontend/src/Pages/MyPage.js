import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { UserContext } from '../contexts/UserContextProvider'
import AddResidence from "../components/AddResidence";

function MyPage() {
 
  const { user } = useContext(UserContext)

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
      <Row className="golden-bg boxes m-2">
        <Col className="p-3 darkbrowntext">SHOW MY RESIDENCES</Col>
      </Row>
      <Row className="darkbrown boxes m-2">
        <Col className="p-3 golden" >+ ADD A RESIDENCE</Col>
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
