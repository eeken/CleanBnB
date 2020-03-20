import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function LandingPage() {
  return (
    <main className="row justify-content-center align-middle">
      <Form
        className="col-9 col-lg-4 col-md-4 darkbrown golden"
        style={{
          borderRadius: "5px",
          padding: "30px",
          fontWeight: "bold",
          marginTop: "25%"
        }}
      >
        <p style={{ fontSize: "1.4em" }} align="center">
          Book your unique stay around the world!
        </p>
        <FormGroup align="left">
          <Label for="destination-input">Destination </Label>
          <Input type="text" id="destination-input" className="mb-4"></Input>
        </FormGroup>

        <FormGroup>
          <div className="row justify-content-around">
            <Label for="destination-input">Check-in </Label>
            <Label for="destination-input">Check-out </Label>
          </div>
          <div className="row justify-content-around">
            <Input
              id="destination-input"
              style={{ width: "40%" }}
              type="date"
            />
            <Input
              id="destination-input"
              style={{ width: "40%" }}
              type="date"
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="guestSelection" align="left">
            Guests
          </Label>
          <Input type="select" name="guestSelection" id="guestSelection">
            <option> </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
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
