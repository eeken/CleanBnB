import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddResidence = () => {
  return (
    <Form className="white">
      <h5>Have a location for rent?</h5>
      <h5>Add it here!</h5>
      <h5>ABOUT THE RESIDENCE</h5>
      <FormGroup className="container ">
        <div className=" row dateInputRow justify-content-space-around align-items-center">
          <Input
            className="col-11 dateInput "
            style={testStyling}
            id="destination-input"
            placeholder="Residence Title"
          />
          <Input
            className="col-5"
            style={testStyling}
            id="destination-input"
            placeholder="Amount of beds"
          />
          <Input
            className="col-5 dateInput"
            style={testStyling}
            id="destination-input"
            placeholder="Residence size in m^2"
          />
          <Input
            className="col-5"
            style={testStyling}
            id="destination-input"
            placeholder="Amount of Rooms"
          />
          <Input
            className="col-5 dateInput"
            id="destination-input"
            placeholder="Max amount of guests"
            style={testStyling}
          />
          <Input
            className="col-5"
            id="destination-input"
            placeholder="Price per night"
            style={testStyling}
          />
        </div>
      </FormGroup>
      <FormGroup className="container">
        <h5>RESIDENCE AMENITIES</h5>
        <div>
          <div className="text-left">
            <Input className="col-5 " type="checkbox" />
            Balcony
          </div>
          <div className="text-right">
            <Input className="col-5  text-right" type="checkbox" />
            Swimming Pool
          </div>
        </div>
        <div>
          <Input className="col-5" type="checkbox" />
          WiFi
          <Input className="col-5" type="checkbox" />
          TV
        </div>
        <div>
          <Input className="col-5" type="checkbox" />
          Bathtub
          <Input className="col-5" type="checkbox" />
          Washing Machine
        </div>
        <div>
          <Input className="col-5 text-left" type="checkbox" />
          Fridge
          <Input className="col-5 text-right" type="checkbox" />
          Freezer
        </div>
        <Input className="col-5" type="checkbox" />
        Dishwasher
      </FormGroup>

      <FormGroup className="container">
        <h5>RESIDENCE LOCATION</h5>
        <div className=" row dateInputRow justify-content-space-around align-items-center">
          <Input className="col-11" style={testStyling} placeholder="Street" />

          <Input
            className="col-5 "
            placeholder="Street Number"
            style={testStyling}
          />
          <Input
            className="col-5"
            placeholder="Postal Code"
            style={testStyling}
          />

          <Input style={testStyling} className="col-5 " placeholder="City" />
          <Input style={testStyling} className="col-5" placeholder="County" />

          <Input
            className="col-5"
            id="destination-input"
            placeholder="Country"
            style={testStyling}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <h5>DESCRIPTION</h5>
        <Input type="textarea" placeholder="Describe your residence here.." />
      </FormGroup>
      <FormGroup className="mb-4">
        <h5>AVAILABLE DATES</h5>
        <div className="row dateInputRow">
          <Input className="col-5" type="date" id="from" placeholder="From" />
          <Input className="col-5" type="date" placeholder="From" />
        </div>
      </FormGroup>
      <FormGroup className="container mb-4">
        <h5>RESIDENCE IMAGES</h5>
        <div className="row dateInputRow">
          <Button className="col-5">ADD IMAGE</Button>
          <Input className="col-6" placeholder="enter path.." />
        </div>
      </FormGroup>
      <FormGroup>
        <Button>PUBLISH THIS RESIDENCE</Button>
      </FormGroup>
    </Form>
  );
}

export default AddResidence

const testStyling = {
  border: "0",
  borderBottom: "1px #3F392F solid",
  borderRadius: "0",
  fontStyle: "oblique",
};