import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Collapse, Button } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import AddResidence from "../components/AddResidence";
import ShowResidence from "../components/ShowResidence";
import ShowBooking from "../components/ShowBooking";
import { FaPlus } from "react-icons/fa";

function MyPage() {
  const { user, fetchUser } = useContext(UserContext);
  const [showBookingIsOpen, setshowBookingIsOpen] = useState(false);
  const [showResidenceIsOpen, setshowResidenceIsOpen] = useState(false);
  const [addResidenceisOpen, setaddResidenceIsOpen] = useState(false);
  const toggleShowBooking = () => setshowBookingIsOpen(!showBookingIsOpen);
  const toggleShowResidence = () =>
    setshowResidenceIsOpen(!showResidenceIsOpen);
  const toggleAddResidence = () => setaddResidenceIsOpen(!addResidenceisOpen);

  useEffect(() => {
    fetchUser();
  }, []);

  if (user === null) {
    return null;
  }

  function showUserItems(item) {
    if (item === "residences" && user !== null) {
      if (user.residenceList === null) {
        return null;
      }
      return user.residenceList.length;
    } else if ((item === "bookings") & (user !== null)) {
      if (user.bookingList === null) {
        return null;
      }
      return user.bookingList.length;
    }
  }

  return (
    <Container className="themed-container text-center" fluid="sm">
      <Row className="white boxes m-2 mb-4 mt-4">
        <Col className="p-5 golden font-weight-bold">
          <h3>Welcome, {user.firstName}!</h3>
        </Col>
      </Row>
      <Row className="showBookingAndResidenceButton boxes m-2 mb-3">
        <Button
          color="transparent"
          className="container showBookingAndResidenceButton boxes m-2 justify-content-center font-weight-bold"
          onClick={toggleShowBooking}
        >
          SHOW MY BOOKINGS ({showUserItems("bookings")})
        </Button>
        <Collapse isOpen={showBookingIsOpen}>
          <ShowBooking />
        </Collapse>
      </Row>

      <Row className="showBookingAndResidenceButton boxes m-2 mb-3">
        <Button
          color="transparent"
          className="container showBookingAndResidenceButton boxes m-2 justify-content-center font-weight-bold"
          onClick={toggleShowResidence}
        >
          SHOW MY RESIDENCES ({showUserItems("residences")})
        </Button>
        <Collapse isOpen={showResidenceIsOpen}>
          <ShowResidence />
        </Collapse>
      </Row>

      <Row className="addResidenceButton boxes m-2 mb-5">
        <Button
          color="transparent"
          className="container addResidenceButton boxes m-2 justify-content-center font-weight-bold"
          onClick={toggleAddResidence}
        >
          <FaPlus className="golden mb-1 mr-2" />
          ADD A RESIDENCE
        </Button>
        <Collapse isOpen={addResidenceisOpen}>
          <AddResidence />
        </Collapse>
      </Row>
    </Container>
  );
}

export default MyPage;
