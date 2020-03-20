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
    <main className="row justify-content-center align-middle">
      <Form
        className="col-9 col-lg-4 col-md-6 darkbrown golden"
        style={{
          borderRadius: "5px",
          padding: "30px",
          fontWeight: "bold",
          marginTop: "25%"
        }}
        onSubmit={submitSearch}
      >
        <p style={{ fontSize: "1.4em" }} align="center">
          Book your unique stay around the world!
        </p>
        <FormGroup align="left">
          <Label for="destination-input">Destination </Label>
          <Input
            type="text"
            id="destination-input"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup>
          <div className="row justify-content-around">
            <Label for="destination-input"> Check-in </Label>
            <Label for="destination-input"> Check-out </Label>
          </div>
          <div className="row justify-content-around">
            <Input
              id="destination-input"
              style={{ width: "40%" }}
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
            />
            <Input
              id="destination-input"
              style={{ width: "40%" }}
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="guestSelection" align="left">
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
    </main>
  );
}
export default LandingPage;
