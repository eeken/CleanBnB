import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddResidence = () => {
  return (
    <Form className="white ">
      <h5>Have a location for rent?</h5>
      <h5>Add it here!</h5>
      <h5>ABOUT THE RESIDENCE</h5>
      <FormGroup>
        <div className="row">
          <Input
            className="col-5 residence-input"
            id="destination-input"
            placeholder="Residence Title"
          />
          <Input
            className="col-5 residence-input"
            id="destination-input"
            placeholder="Amount of beds"
          />
          <Input
            className="col-5 dateInput"
            id="destination-input"
            placeholder="Residence size in m^2"
          />
          <Input
            className="col-5"
            id="destination-input"
            placeholder="Amount of Rooms"
          />
        </div>
        <div className="row dateInputRow">
          <Input
            className="col-5 dateInput"
            id="destination-input"
            placeholder="Max amount of guests"
          />
          <Input
            className="col-5"
            id="destination-input"
            placeholder="Price per night"
          />
        </div>
      </FormGroup>
      <FormGroup>
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

      <FormGroup>
        <h5>RESIDENCE LOCATION</h5>
        <Input placeholder="Street" />
        <div className="row dateInputRow">
          <Input className="col-5 " placeholder="Street Number" />
          <Input className="col-5" placeholder="Postal Code" />
        </div>
        <div className="row dateInputRow">
          <Input className="col-5 " placeholder="City" />
          <Input className="col-5" placeholder="County" />
        </div>
        <Input placeholder="Country " />
      </FormGroup>
      <FormGroup>
        <h5>DESCRIPTION</h5>
        <Input type="textarea" placeholder="Describe your residence here.." />
      </FormGroup>
      <FormGroup>
        <h5>AVAILABLE DATES</h5>
        <div className="row dateInputRow">
          <Input className="col-5" type="date" placeholder="From" />
          <Input className="col-5" type="date" placeholder="From" />
        </div>
      </FormGroup>
      <FormGroup>
        <h5>RESIDENCE IMAGES</h5>
        <div className="row dateInputRow">
          <Button className="col-4">ADD IMAGE</Button>
          <Input className="col-7" placeholder="enter path.." />
        </div>
      </FormGroup>
      <FormGroup>
        <Button>PUBLISH THIS RESIDENCE</Button>
      </FormGroup>
    </Form>
  );
};

export default AddResidence;
