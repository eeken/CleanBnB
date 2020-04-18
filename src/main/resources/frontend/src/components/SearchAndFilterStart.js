import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LandingPage() {
  const [destination, setDestination] = useState();
  const [checkIn, setCheckIn] = useState(0);
  const [checkOut, setCheckOut] = useState(0);
  const [numberofguests, setNumberOfGuests] = useState(0);

  const submitSearch = async (e) => {
    e.preventDefault();
    await history.push(
      "explore/destination=" +
        destination +
        "&guests=" +
        numberofguests +
        "&checkIn=" +
        checkIn.valueOf() / 1000 +
        "&checkOut=" +
        checkOut.valueOf() / 1000
    );
  };

  let history = useHistory();

  return (
    <div className="col-12 col-lg-3 col-md-6">
      <Form
        className="darkbrown golden searchAndFilterForm"
        onSubmit={submitSearch}
      >
        <h2 className="searchAndFilterFormTitle" align="center">
          Book your unique stay around the world!
        </h2>
        <FormGroup align="left">
          <Label for="destination-input" className="mb-1">
            Destination
          </Label>
          <Input
            type="text"
            id="destination-input"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup>
          <div className="row justify-content-between m-0">
            <Label for="destination-input" className="mb-1 ml-1">
              Check-in
            </Label>
            <Label for="destination-input" className="mb-1 mr-1">
              Check-out
            </Label>
          </div>

          <div className="calendar">
            <DatePicker
              className="datepickerstyle"
              selected={checkIn}
              minDate={new Date()}
              onChange={(date) => setCheckIn(date)}
              placeholderText="Select a date"
            />
            <span className="rightArrow">
              <DatePicker
                className="datepickerstyle"
                selected={checkOut}
                minDate={new Date()}
                onChange={(date) => setCheckOut(date)}
                placeholderText="Select a date"
              />
            </span>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="guestSelection" align="left" className="mb-1">
            Guests
          </Label>
          <Input
            type="select"
            name="guestSelection"
            id="guestSelection"
            style={{ textAlignLast: "center" }}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="mb-4"
          >
            <option value={""}>Number of guests</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Input>
        </FormGroup>
        <Button className="searchButton" style={{ backgroundColor: "#B9986D" }}>
          SEARCH
        </Button>
      </Form>
    </div>
  );
}
export default LandingPage;
