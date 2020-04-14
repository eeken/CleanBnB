import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";
import { BookingContext } from "../contexts/BookingContextProvider";


const ShowResidence = () => {
  const { user } = useContext(UserContext);
  const { bookings } = useContext(BookingContext);

  let history = useHistory();
  const convertDate = (checkIn) => {
    checkIn = new Date(checkIn * 1000)
    return checkIn
  }

 if (bookings) {
   const list = () => {
     return user.bookingList.map((booking, i) => {
       return (
         <div>
           <h1>{booking.id}</h1>
           <p>Amount of guests: {booking.amountOfGuests}</p>
           <p>Check in: {booking.checkIn}</p>
           <p>Check out: {booking.checkOut * 1000}</p>
           <p>Address: {booking.residenceId} </p>
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
}
export default ShowResidence;
