import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";
import { BookingContext } from "../contexts/BookingContextProvider";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

const ShowResidence = () => {
  const { user } = useContext(UserContext);
  const { bookings } = useContext(BookingContext);
  const { residence, fetchResidenceDetails } = useContext(ResidenceContext);

  let history = useHistory();
  const convertDate = (date) => {
    return new Date(date*1000).toLocaleDateString()
  };

  if (bookings) {
    const list = () => {
      return user.bookingList.map((booking, i) => {
        //fetchResidenceDetails(booking.residenceId)
        return (
          <div className="white pb-1 pt-1">
            <div className="row text-left pt-2">
              <div className="col-5 col-lg-2 col-md-3">
                <img
                  className="cardImage"
                  src={booking.residence.images[0].imagelink}
                  alt="residence-image"
                />
              </div>
              <div className="col-7">
                <p className="golden mb-0 residenceDetailsTitle">
                  {booking.residence.title}
                </p>
                <p className="mb-0 residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Amount of guests: </span>
                  {booking.amountOfGuests}
                </p>
                <p className="mb-0 residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Check in: </span>
                  {convertDate(booking.checkIn)}
                </p>
                <p className="residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Check out: </span>
                  {convertDate(booking.checkOut)}
                </p>
              </div>
            </div>
            <div className="col-12 text-left">
              <p className="residenceDetailsCommonDetails">
                <span className="font-weight-bold">Address: </span>
                {booking.residence.address.street}
                {booking.residence.address.streetNumber},
                {booking.residence.address.city},
                {booking.residence.address.county}
                {booking.residence.address.country},
              </p>
            </div>
            <div className="col-12 text-right">
              <p className="golden">
                Total price:
                <span className="font-weight-bold ml-1">
                  ${booking.totalPrice}
                </span>
              </p>
            </div>
          </div>
        );
      });
    };
    return <>{list()}</>;
  }
  return (
    <div>
      <h1> No matches </h1>
    </div>
  );
};
export default ShowResidence;
