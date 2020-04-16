//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";

//CONTEXTPROVIDERS
import UserContextProvider, {
  UserContext,
} from "../contexts/UserContextProvider";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

//COMPONENTS
import SearchBar from "../components/SearchBar";
import Calender from "../components/Calender";
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

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [amountOfNights, setAmountOfNights] = useState("-");
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const { residence, fetchResidenceDetails } = useContext(ResidenceContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [fetchedBookedDays, setFetchedBookedDays] = useState([]);
  const [featchedAvailableDays, setFeatchedAvailableDays] = useState([]);
  const [fetchedBookedDaysLoaded, setFetchedBookedDaysLoaded] = useState(false);
  const [checkDays, setCheckDays] = useState(false);

  Date.prototype.getUnixTime = function () {
    return this.getTime() / 1000;
  };

  let totalPrice = "-";

  const bookResidence = async (e) => {
    e.preventDefault();
    await history.push(
      "residence_id=" +
        residence.id +
        "/newbookingOf" +
        residence.title +
        "&location=" +
        residence.address.city +
        "&" +
        residence.address.country +
        "&numberOfGuests=" +
        numberOfGuests +
        "&checkin=" +
        checkIn +
        "&checkout=" +
        checkOut +
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

  //watcher
  useEffect(() => {
    //skicka med vilken variabel den ska lyssna på
  }, [amountOfNights]);

  if (residence === null) {
    return null;
  }

  if (!fetchedBookedDaysLoaded) {
    let arr = [];
    for (let i = 0; i < residence.bookedDays.length; i++) {
      let duration =
        (residence.bookedDays[i].checkOut - residence.bookedDays[i].checkIn) /
        86400;
      for (let day = 0; day <= duration; day++) {
        let date = new Date(residence.bookedDays[i].checkIn * 1000);
        date.setDate(date.getDate() + day);
        arr.push(date.toString());
      }
    }
    setFetchedBookedDays(arr);
    setFetchedBookedDaysLoaded(true);
    setCheckDays(true);
  }

  if (checkDays) {
    let arr = [];
    for (let i = 0; i < residence.availableDays.length; i++) {
      let duration =
        (residence.availableDays[i].endDate -
          residence.availableDays[i].startDate) /
        86400;
      for (let day = 0; day <= duration; day++) {
        let date = new Date(residence.availableDays[i].startDate * 1000);
        date.setDate(date.getDate() + day);
        if (!fetchedBookedDays.includes(date.toString())) {
          arr.push(date);
        }
      }
    }
    setFeatchedAvailableDays(arr);
    setCheckDays(false);
  }
  //creating dropdown array for maxguests
  let maxAmountOfGuests = [];
  for (let i = 1; i <= residence.maxguests; i++) {
    maxAmountOfGuests.push(i);
  }

  console.log("Booked" + fetchedBookedDays);
  console.log("Not booked" + featchedAvailableDays);
  console.log(residence);

  let price = <b></b>;

  if (amountOfNights > 0 && amountOfNights > 0) {
    price = (
      <b>
        Total price: {residence.pricepernight} x {amountOfNights} = $
        {(totalPrice = residence.pricepernight * amountOfNights)}{" "}
      </b>
    );
  }

  const login = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    history.push("/details/residence_id=" + residence.id + "/login");
  };

  console.log(residence);

  return (
    <div className="white">
      <Form>
        <div className="col-12 justify-content-center pt-1">
          <div className="residenceDetailsPageTitle golden text-center">
            {residence.title}
          </div>
          {/* <div className=" sliderContainer container col-12 col-lg-6">  </div> */}
        </div>
        <CarouselComponent></CarouselComponent>
        <div className="row m-4">
          <div className="residenceDetailsPageAddress golden pl-3 mr-5 mb-2">
            {residence.address.city}, {residence.address.country}
          </div>
          <h4 className="golden priceTag">
            ${residence.pricepernight}
            <span className="perNight"> per night</span>
          </h4>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 darkbrowntext mr-5">
            <div>
              <span className="font-weight-bold golden">Living area: </span>
              {residence.size} m²
            </div>
            <div>
              <span className="font-weight-bold golden">
                Maximum amount of Guests:{" "}
              </span>
              {residence.maxguests}
            </div>
            <div>
              <span className="font-weight-bold golden">Amount of Rooms: </span>
              {residence.rooms}
            </div>
            <div>
              <span className="font-weight-bold golden">Amount of Beds: </span>
              {residence.numberofbeds}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div
            className="darkbrowntext font-italic m-3"
            id="residence_description"
          >
            {residence.description}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residenceDetailsPageAddress golden mr-5">
            Amenities
          </div>
          <div className="darkbrowntext row mt-3 ml-1">
            {residence.amenity.balcony && (
              <p className="col-6">
                <MdStreetview className="golden" /> Balcony
              </p>
            )}
            {residence.amenity.swimmingpool && (
              <p className="col-6">
                <FaSwimmingPool className="golden" /> Swimming Pool
              </p>
            )}
            {residence.amenity.wifi && (
              <p className="col-6">
                <FaWifi className="golden" /> WiFi
              </p>
            )}
            {residence.amenity.tv && (
              <p className="col-6">
                <FaTv className="golden" /> Television
              </p>
            )}
            {residence.amenity.washingmachine && (
              <p className="col-6">
                <MdLocalLaundryService className="golden" /> Washing Machine
              </p>
            )}
            {residence.amenity.fridge && (
              <p className="col-6">
                <FaTemperatureLow className="golden" /> Fridge
              </p>
            )}
            {residence.amenity.freezer && (
              <p className="col-6">
                <FaSnowflake className="golden" /> Freezer
              </p>
            )}
            {residence.amenity.dishwasher && (
              <p className="col-6">
                <MdLocalDrink className="golden" /> Dishwasher
              </p>
            )}
            {residence.amenity.bathtub && (
              <p className="col-6">
                <FaBath className="golden" /> Bathtub
              </p>
            )}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residenceDetailsPageAddress golden mr-5">
            Availability
          </div>
          <DatePicker
            selected={startDate}
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
            includeDates={featchedAvailableDays}
            placeholderText="Select a date"
          />
          <DatePicker
            selected={endDate}
            minDate={new Date()}
            onChange={(date) => setEndDate(date)}
            includeDates={featchedAvailableDays}
            placeholderText="Select a date"
          />
        </div>
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
          <div className="row m-4">
            <div className="col-12 residenceDetailsPageAddress golden mb-2">
              Availability
            </div>
            <div className="ml-3 mr-3">
              <Calender
                setCheckIn={setCheckIn}
                setCheckOut={setCheckOut}
                setAmountOfNights={setAmountOfNights}
              ></Calender>
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
            <div className="col-10 golden m-3">{price}</div>
            <Button
              style={{ cursor: "pointer" }}
              className="bookingButton mb-5 p-2"
            >
              BOOK THIS RESIDENCE
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default ResidenceDetailsPage;
