import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddResidence = () => {
  return (
    <Form className="white">
      <h5>Have a location for rent?</h5>
      <h5>Add it here!</h5>
      <h5>ABOUT THE RESIDENCE</h5>
      <FormGroup>
          
        <div className="row dateInputRow">
          <Input
              className="col-5 dateInput"
            id="destination-input"
            placeholder="Residence Title"
            />
            <Input
              className="col-5"
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
        <div className="row">
        <Input className="col-5"
          type="checkbox"
        />Balcony
        <Input className="col-5"
          type="checkbox"
          />Swimming Pool
          </div>
            <div className="row">
        <Input className="col-5"
          type="checkbox"
        />WiFi
         <Input className="col-5"
          type="checkbox"
        />TV
        </div>
         </FormGroup>
      </Form>
  )
}

export default AddResidence
