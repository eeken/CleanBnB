//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";

//CONTEXTPROVIDERS
import { UserContext } from "../contexts/UserContextProvider";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

//COMPONENTS
import CarouselComponent from "../components/CarouselComponent";

//REACT ICONS
import {
  FaSwimmingPool,
  FaSnowflake,
  FaBath,
  FaTv,
  FaWifi,
  FaTemperatureLow,
} from "react-icons/fa";
import {
  MdLocalLaundryService,
  MdLocalDrink,
  MdStreetview,
} from "react-icons/md";

function ResidenceDetailsPage() {
  let { id } = useParams();
  let history = useHistory();

  // Used to check if residence_id= is not a number
  //If false, redirect to 404 PageNotFound
  if (id / id !== 1) {
    history.push("/404");
  }

  const { user } = useContext(UserContext);

  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const { residenceDetails, fetchResidenceDetails } = useContext(
    ResidenceContext
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  Date.prototype.getUnixTime = function () {
    return this.getTime() / 1000;
  };

  let totalPrice = "-";
  let amountOfNights = null;

  const bookResidence = async (e) => {
    if (startDate > endDate) {
      let temp = startDate;
      setStartDate(endDate);
      setEndDate(temp);
    }

    e.preventDefault();
    await history.push(
      "residenceDetails=" +
        residenceDetails.id +
        "/newbookingOf" +
        residenceDetails.title +
        "&location=" +
        residenceDetails.address.city +
        "&" +
        residenceDetails.address.country +
        "&numberOfGuests=" +
        numberOfGuests +
        "&checkin=" +
        startDateUnix +
        "&checkout=" +
        endDateUnix +
        "&amountOfNights=" +
        amountOfNights +
        "&totalPrice=" +
        totalPrice
    );
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchResidenceDetails(id);
  }, []);

  useEffect(() => {}, [amountOfNights]);

  if (residenceDetails === null) {
    return null;
  }

  //creating dropdown array for maxguests
  let maxAmountOfGuests = [];
  for (let i = 1; i <= residenceDetails.maxguests; i++) {
    maxAmountOfGuests.push(i);
  }

  let price = <b></b>;

  let startDateUnix = new Date(startDate).getUnixTime();
  let endDateUnix = new Date(endDate).getUnixTime();
  amountOfNights = (endDateUnix - startDateUnix) / 86400;

  if (amountOfNights > 0 && amountOfNights !== 0) {
    price = (
      <b>
        Total price: {residenceDetails.pricepernight} x {amountOfNights} = $
        {(totalPrice = residenceDetails.pricepernight * amountOfNights)}
      </b>
    );
  }

  const login = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    history.push("/details/residence_id=" + residenceDetails.id + "/login");
  };

  let button = (
    <Button
      disabled
      style={{ cursor: "pointer" }}
      className="bookingButton mb-5 p-2"
    >
      BOOK THIS RESIDENCE
    </Button>
  );

  if (totalPrice > 0) {
    button = (
      <Button style={{ cursor: "pointer" }} className="bookingButton mb-5 p-2">
        BOOK THIS RESIDENCE
      </Button>
    );
  }

  return (
    <div className="white">
      <Form>
        <div className="col-12 justify-content-center pt-1">
          <div className="residenceDetailsPageTitle golden text-center">
            {residenceDetails.title}
          </div>
        </div>
        <CarouselComponent></CarouselComponent>
        <div className="row m-4">
          <div className="residenceDetailsPageAddress golden pl-3 mr-5 mb-2">
            {residenceDetails.address.city}, {residenceDetails.address.country}
          </div>
          <h4 className="golden priceTag">
            ${residenceDetails.pricepernight}
            <span className="perNight"> per night</span>
          </h4>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 darkbrowntext mr-5">
            <div>
              <span className="font-weight-bold golden">Living area: </span>
              {residenceDetails.size} m²
            </div>
            <div>
              <span className="font-weight-bold golden">
                Maximum amount of Guests:{" "}
              </span>
              {residenceDetails.maxguests}
            </div>
            <div>
              <span className="font-weight-bold golden">Amount of Rooms: </span>
              {residenceDetails.rooms}
            </div>
            <div>
              <span className="font-weight-bold golden">Amount of Beds: </span>
              {residenceDetails.numberofbeds}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div
            className="darkbrowntext font-italic m-3"
            id="residence_description"
          >
            {residenceDetails.description}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residenceDetailsPageAddress golden mr-5">
            Amenities
          </div>
          <div className="darkbrowntext row mt-3 ml-1">
            {residenceDetails.amenity.balcony && (
              <p className="col-6">
                <MdStreetview className="golden" /> Balcony
              </p>
            )}
            {residenceDetails.amenity.swimmingpool && (
              <p className="col-6">
                <FaSwimmingPool className="golden" /> Swimming Pool
              </p>
            )}
            {residenceDetails.amenity.wifi && (
              <p className="col-6">
                <FaWifi className="golden" /> WiFi
              </p>
            )}
            {residenceDetails.amenity.tv && (
              <p className="col-6">
                <FaTv className="golden" /> Television
              </p>
            )}
            {residenceDetails.amenity.washingmachine && (
              <p className="col-6">
                <MdLocalLaundryService className="golden" /> Washing Machine
              </p>
            )}
            {residenceDetails.amenity.fridge && (
              <p className="col-6">
                <FaTemperatureLow className="golden" /> Fridge
              </p>
            )}
            {residenceDetails.amenity.freezer && (
              <p className="col-6">
                <FaSnowflake className="golden" /> Freezer
              </p>
            )}
            {residenceDetails.amenity.dishwasher && (
              <p className="col-6">
                <MdLocalDrink className="golden" /> Dishwasher
              </p>
            )}
            {residenceDetails.amenity.bathtub && (
              <p className="col-6">
                <FaBath className="golden" /> Bathtub
              </p>
            )}
          </div>
        </div>
        <hr></hr>
      </Form>

      {!user ? (
        <div className="row ml-4 mr-4">
          <Button
            style={{ cursor: "pointer" }}
            className="bookingButton mb-5 p-2"
            onClick={login}
          >
            LOG IN TO BOOK THIS RESIDENCE
          </Button>
        </div>
      ) : (
        <Form onSubmit={bookResidence}>
          <div className="row m-4 justify-content-center">
            <div className="col-12 residenceDetailsPageAddress golden mr-5 ml-5">
              Availability
            </div>
            <div className="col-9 golden m-3">
              Choose your Start Date and End Date:
            </div>
            <div className="detailDate">
              <DatePicker
                selected={startDate}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
                includeDates={residenceDetails.availableDays}
                placeholderText="Select a date"
                className="datepickerstyle detailDate"
              />
              <span className="rightArrow">
                <DatePicker
                  selected={endDate}
                  minDate={new Date()}
                  onChange={(date) => setEndDate(date)}
                  includeDates={residenceDetails.availableDays}
                  placeholderText="Select a date"
                  className="datepickerstyle detailDate"
                />
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="row ml-4 mr-4 justify-content-center">
            <div className="col-12 residenceDetailsPageAddress golden ml-1.5 mt-3">
              Guests
            </div>
            <div className="col-9 golden mt-3 mr-3">
              Amount of guests (including children):
              <FormGroup>
                <Input
                  type="select"
                  name="guestSelection"
                  id="guestSelection"
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                >
                  {maxAmountOfGuests.map((guest) => (
                    <option
                      key={guest.value + "uniquekey" + guest}
                      value={guest.value}
                    >
                      {guest}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </div>
            <div className="col-8 golden m-3">{price}</div>
            {button}
          </div>
        </Form>
      )}
    </div>
  );
}
export default ResidenceDetailsPage;
