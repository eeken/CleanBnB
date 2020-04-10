import React, { useContext, useState } from "react";
import { Container, Row, Col, Collapse, Button } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import AddResidence from "../components/AddResidence";
import ShowResidence from "../components/ShowResidence";

function MyPage() {
  const { user } = useContext(UserContext);
  const [addResidenceisOpen, setaddResidenceIsOpen] = useState(false);
  const toggleAddResidence = () => setaddResidenceIsOpen(!addResidenceisOpen);

  function showInformation() {
    let showResult = false;
  }

  if (user === null) {
    return null;
  }

  // let name = user.firstName
  //fetchUser()
  return (
    <Container className="themed-container text-center" fluid="sm">
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
        <ShowResidence />
      </div>
      <Row className="addResidenceButton  boxes m-2">
        <Button
          color="transparent"
          className="container addResidenceButton boxes m-2 justify-content-center"
          onClick={toggleAddResidence}
        >
          ADD A RESIDENCE
        </Button>
        <Collapse isOpen={addResidenceisOpen}>
          <AddResidence />
        </Collapse>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default MyPage;
