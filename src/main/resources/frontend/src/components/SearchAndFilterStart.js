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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const submitSearch = async e => {
    e.preventDefault();
      await history.push("explore/destination=" + destination + "&guests=" + numberofguests);
  };

  let history = useHistory();

  Date.prototype.getUnixTime = function() {
    return this.getTime()/1000
  };

  let startDateUnix = new Date(startDate).getUnixTime();
  let endDateUnix = new Date(endDate).getUnixTime();

  let duration = (endDateUnix - startDateUnix) / 86400;
  console.log(duration);

  for(let day = 0; day < duration; day++) {
    let date = new Date(startDate)
    date.setDate(date.getDate() + day)
    console.log(date)
  }

  if(endDate < startDate){
    alert('Cannot do that');
  }

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
            Destination{" "}
          </Label>
          <Input
            type="text"
            id="destination-input"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup>
          <div className="row justify-content-around">
            <Label for="destination-input" className="mb-1">
              Check-in
            </Label>
            <Label for="destination-input" className="mb-1">
              Check-out
            </Label>
          </div>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          onChange={date => setStartDate(date)}
          placeholderText="Select a date"
        />
        <DatePicker
          selected={endDate}
          minDate={new Date()}
          onChange={date => setEndDate(date)}
          placeholderText="Select a date"
        />
        </FormGroup>

        <FormGroup>
          <Label for="guestSelection" align="left" className="mb-1">
            Guests
          </Label>
          <Input
            type="select"
            name="guestSelection"
            id="guestSelection"
            style={{textAlignLast: 'center'}}
            onChange={e => setNumberOfGuests(e.target.value)}
          >
            <option value={''}>Number of guests</option>
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
