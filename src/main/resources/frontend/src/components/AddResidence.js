import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddResidence = () => {
  return (
    <Form className="white container golden">
      <h5 className="mt-4">Have a location for rent?</h5>
      <h5>Add it here!</h5>
      <h5>ABOUT THE RESIDENCE</h5>
      <FormGroup className="container">
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
        <div className="row justify-content-center">
            <span className="col-5 text-left mb-3 mt-3" style={testStylingBox}>
            <Input type="checkbox" /> Balcony
            </span>
            <span className="col-5 text-left mb-3 mt-3" style={testStylingBox}>
            <Input type="checkbox" /> Swimming Pool
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Wifi
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Television
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Bathtub
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Washing Machine
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Freezer
            </span>
            <span className="col-5 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" /> Fridge
            </span>
            <span className="col-10 text-left mb-3" style={testStylingBox}>
            <Input type="checkbox" className="checkBox" /> Dishwasher
            </span>
        </div>
      </FormGroup>

      <FormGroup className="container">
        <h5>RESIDENCE LOCATION</h5>
        <div className=" row dateInputRow justify-content-space-around align-items-center">
          <Input className="col-11" style={testStyling} placeholder="Street" />

          <Input
            className="col-5"
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
  borderBottom: "0.1px #3F392F solid",
  borderRadius: "0",
  fontStyle: "oblique",
};

const checkbox = {
  color: "white"
}

const testStylingBox = {
  fontSize: '0.9em',
  borderRadius: '100%'
}