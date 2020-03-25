import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function LandingPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");

  const submitSearch = e => {
    e.preventDefault();
    console.log("Destination chosen  :  " + destination);
    console.log("Check-in date chosen  :  " + checkIn);
    console.log("Check-out date chosen  :  " + checkOut);
    console.log("Number of guests chosen  :  " + numberOfGuests);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Form
        className="col-12 col-lg-4 col-md-6 darkbrown golden"
        style={{
          borderRadius: "5px",
          padding: "30px",
          fontWeight: "bold"
        }}
        onSubmit={submitSearch}
      >
        <h2 style={{ fontSize: "1.4rem" }} align="center">
          Book your unique stay around the world!
        </h2>
        <FormGroup align="left" style={{fontSize: "0.8em"}}>
          <Label for="destination-input" className="mb-1">Destination </Label>
          <Input
            type="text"
            id="destination-input"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup style={{fontSize: "0.8em"}}>
          <div className="row justify-content-around">
            <Label for="destination-input" className="mb-1"> Check-in </Label>
            <Label for="destination-input" className="mb-1"> Check-out </Label>
          </div>
          <div className="row" style={{ justifyContent: "space-around" }}>
            <Input
              className="col-5"
              id="destination-input"
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
            />
            <Input
              className="col-5"
              id="destination-input"
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup style={{fontSize: "0.8em"}}>
          <Label for="guestSelection" align="left" className="mb-1">
            Guests
          </Label>
          <Input
            type="select"
            name="guestSelection"
            id="guestSelection"
            onChange={e => setNumberOfGuests(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Input>
        </FormGroup>

        <Button
          style={{
            width: "100%",
            backgroundColor: "#B9986D",
            fontWeight: "Bold"
          }}
        >
          SEARCH
        </Button>
      </Form>
    </div>
  );
}
export default LandingPage;
