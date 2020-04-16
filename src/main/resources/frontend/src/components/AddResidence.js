import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { UserContext } from '../contexts/UserContextProvider'

const AddResidence = () => {
  // RESIDENCE DETAILS
  //****    ENTITY: RESIDENCE   ****
  const [title, setTitle] = useState(null);
  const [numberOfBeds, setNumberOfBeds] = useState(null);
  const [residenceSize, setResidenceSize] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [maxNumberOfGuests, setMaxNumberOfGuests] = useState(null);
  const [pricePerNight, setPricePerNight] = useState(null);
  const [description, setDescription] = useState("");

  //RESIDENCE LOCATION
  //****    ENTITY: ADDRESS   ****
  const [streetName, setStreetName] = useState(null);
  const [streetNumber, setStreetNumber] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [city, setCity] = useState(null);
  const [county, setCounty] = useState(null);
  const [country, setCountry] = useState(null);

  //RESIDENCE AMENITIES
  //****    ENTITY: AMENITY   ****
  const [hasBalcony, setHasBalcony] = useState(false);
  const [hasSwimmingPool, setHasSwimmingPool] = useState(false);
  const [hasWifi, setHasWifi] = useState(false);
  const [hasTelevision, setHasTelevision] = useState(false);
  const [hasBathtub, setHasBathtub] = useState(false);
  const [hasFreezer, setHasFreezer] = useState(false);
  const [hasFridge, setHasFridge] = useState(false);
  const [hasDishWasher, setHasDishwasher] = useState(false);
  const [hasWashingMachine, setHasWashingMachine] = useState(false);

  //RESIDENCE AVAILABLE PERIOD
  //****    ENTITY: AVAILABLEPERIOD   ****
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //RESIDENCE AVAILABLE PERIOD
  //****    ENTITY: AVAILABLEPERIOD   ****
  const [image, /*setImage*/] = useState(null);

    //RESIDENCE USER/OWNER
  //****    ENTITY: USER   ****
  const { user } = useContext(UserContext);

  const registerResidence = async (e) => {
    e.preventDefault();
    let newResidence = {
      size: residenceSize,
      rooms: numberOfRooms,
      maxguests: maxNumberOfGuests,
      pricepernight: pricePerNight,
      numberofbeds: numberOfBeds,
      title: title,
        address: {
          county: county,
          city: city,
          country: country,
          street: streetName,
          streetnumber: streetNumber
        },
        amenity:{
          balcony: hasBalcony,
          swimmingpool: hasSwimmingPool,
          wifi: hasWifi,
          tv: hasTelevision,
          bathtub: hasBathtub,
          freezer: hasFreezer,
          fridge: hasFridge,
          washingmachine: hasWashingMachine,
          dishwasher: hasDishWasher
        },
        images:[
          {imagelink: "test1"},
          {imagelink: "test2"},
          {imagelink: "test3"},
        ],
        user:{
          id: user.id
        }
    }
    console.log(newResidence);

    let response = await fetch("/rest/residences/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResidence)
    });


  };

  return (
    <Form className="white container golden" onSubmit={registerResidence}>
      <h5>Have a location for rent?</h5>
      <h5>Add it here!</h5>
      <h5>ABOUT THE RESIDENCE</h5>
      <FormGroup className="container mb-4">
        <div className=" row dateInputRow justify-content-space-around align-items-center">
          <Input
            required
            className="col-11 dateInput addResidenceInputField"
            id="title"
            placeholder="Residence Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            type="number"
            required
            className="col-5 addResidenceInputField"
            id="numberOfBeds"
            placeholder="Amount of beds"
            onChange={(e) => {
              setNumberOfBeds(e.target.value);
            }}
          />
          <Input
            required
            type="number"
            className="col-5 dateInput addResidenceInputField"
            id="residenceSize"
            placeholder="Residence size in m^2"
            onChange={(e) => {
              setResidenceSize(e.target.value);
            }}
          />
          <Input
            required
            type="number"
            className="col-5 addResidenceInputField"
            id="numberOfRooms"
            placeholder="Amount of Rooms"
            onChange={(e) => {
              setNumberOfRooms(e.target.value);
            }}
          />
          <Input
            required
            type="number"
            className="col-5 dateInput addResidenceInputField"
            id="maxNumberOfGuests"
            placeholder="Max amount of guests"
            onChange={(e) => {
              setMaxNumberOfGuests(e.target.value);
            }}
          />
          <Input
            required
            type="number"
            className="col-5 addResidenceInputField"
            id="pricePerNight"
            placeholder="Price per night"
            onChange={(e) => {
              setPricePerNight(e.target.value);
            }}
          />
          {/* { Filler div, to make the design symmetric} */}
          <div className="col-5"></div>
        </div>
      </FormGroup>
      <FormGroup className="container">
        <h5>RESIDENCE AMENITIES</h5>
        <div className="row justify-content-center">
          <span className="col-5 text-left mb-3 mt-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasBalcony(!hasBalcony);
              }}
            />
            Balcony
          </span>
          <span className="col-5 text-left mb-3 mt-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasSwimmingPool(!hasSwimmingPool);
              }}
            />
            Swimming Pool
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasWifi(!hasWifi);
              }}
            />
            Wifi
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasTelevision(!hasTelevision);
              }}
            />
            Television
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasBathtub(!hasBathtub);
              }}
            />
            Bathtub
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasFreezer(!hasFreezer);
              }}
            />{" "}
            Freezer
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasFridge(!hasFridge);
              }}
            />
            Fridge
          </span>
          <span className="col-5 text-left mb-3">
            <Input
              type="checkbox"
              className="checkBox"
              onChange={() => {
                setHasDishwasher(!hasDishWasher);
              }}
            />
            Dishwasher
          </span>
          <span className="col-10 text-left mb-3">
            <Input
              type="checkbox"
              onChange={() => {
                setHasWashingMachine(!hasWashingMachine);
              }}
            />
            Washing Machine
          </span>
        </div>
      </FormGroup>

      <FormGroup className="container">
        <h5>RESIDENCE LOCATION</h5>
        <div className=" row dateInputRow justify-content-space-around align-items-center">
          <Input
            required
            className="col-11 addResidenceInputField"
            placeholder="Street"
            onChange={(e) => {
              setStreetName(e.target.value);
            }}
          />

          <Input
            required
            type="number"
            className="col-5 addResidenceInputField"
            placeholder="Street Number"
            onChange={(e) => {
              setStreetNumber(e.target.value);
            }}
          />
          <Input
            required
            type="number"
            className="col-5 addResidenceInputField"
            placeholder="Postal Code"
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />

          <Input
            required
            className="col-5 addResidenceInputField"
            placeholder="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            className="col-5 addResidenceInputField"
            placeholder="County"
            onChange={(e) => {
              setCounty(e.target.value);
            }}
          />

          <Input
            required
            className="col-5 addResidenceInputField"
            placeholder="Country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          {/* { Filler div, to make the design symmetric} */}
          <div className="col-5"></div>
        </div>
      </FormGroup>
      <FormGroup>
        <h5>DESCRIPTION</h5>
        <Input
          type="textarea"
          rows="10"
          placeholder="Describe your residence here.."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="mb-4">
        <h5>AVAILABLE DATES</h5>
       
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
};

export default AddResidence;