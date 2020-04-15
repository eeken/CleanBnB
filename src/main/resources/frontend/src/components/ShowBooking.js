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
  const convertDate = (checkIn) => {
    return new Date(checkIn*1000).toLocaleDateString()
  };

  if (bookings) {
    const list = () => {
      return user.bookingList.map((booking, i) => {
        //fetchResidenceDetails(booking.residenceId)
        return (
          <div className="white">
            <h6>CURRENT BOOKINGS</h6>
            <div className="row text-left">
              <div className="col-5 col-lg-2 col-md-3">
                <img
                  className="cardImage"
                  // src
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
                  {booking.checkOut}
                </p>
              </div>
            </div>
            <div className="col-12 text-left">
              <p className="residenceDetailsCommonDetails">
                <span className="font-weight-bold">Address: </span>
                {booking.residenceId}{" "}
              </p>
            </div>
            <div className="col-12 text-right">
              <p className="golden ">
                Total price:{" "}
                <span className="font-weight-bold">
                  {" "}
                  {booking.totalPrice} kr
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
      {" "}
      <h1> No matches </h1>{" "}
    </div>
  );
};
export default ShowResidence;
