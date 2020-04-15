import React, { useContext, useState } from "react";
import { Container, Row, Col, Collapse, Button } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import AddResidence from "../components/AddResidence";
import ShowResidence from "../components/ShowResidence";
import ShowBooking from "../components/ShowBooking";

function MyPage() {
  const { user } = useContext(UserContext);
  const [showBookingIsOpen, setshowBookingIsOpen] = useState(false);
  const [showResidenceIsOpen, setshowResidenceIsOpen] = useState(false);
  const [addResidenceisOpen, setaddResidenceIsOpen] = useState(false);
  const toggleShowBooking = () => setshowBookingIsOpen(!showBookingIsOpen);
  const toggleShowResidence = () => setshowResidenceIsOpen(!showResidenceIsOpen);
  const toggleAddResidence = () => setaddResidenceIsOpen(!addResidenceisOpen);

  if (user === null) {
    return null;
  }

  // let name = user.firstName
  //fetchUser()
  return (
    <Container className="themed-container text-center" fluid="sm">
      <Row className="white boxes m-2">
        <Col className="p-5 golden ">Welcome, {user.firstName}! </Col>
      </Row>
      {/* <Row className="golden-bg boxes m-2 mb-0">
        <Col className="p-3 darkbrowntext">SHOW MY BOOKINGS</Col>
      </Row>
      <ShowBooking></ShowBooking> */}
      <Row className="showBookingAndResidenceButton boxes m-2">
        <Button
          color="transparent"
          className="container showBookingAndResidenceButton boxes m-2 justify-content-center"
          onClick={toggleShowBooking}
        >
          SHOW MY BOOKINGS
        </Button>
        <Collapse isOpen={showBookingIsOpen}>
          <ShowBooking />
        </Collapse>
      </Row>
      <Row className="showBookingAndResidenceButton boxes m-2">
        <Button
          color="transparent"
          className="container showBookingAndResidenceButton boxes m-2 justify-content-center"
          onClick={toggleShowResidence}
        >
          SHOW MY RESIDENCES
        </Button>
        <Collapse isOpen={showResidenceIsOpen}>
          <ShowResidence />
        </Collapse>
      </Row>
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
