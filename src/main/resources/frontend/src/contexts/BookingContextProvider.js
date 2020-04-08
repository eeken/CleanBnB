import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export default function BookingContextProvider(props) {
  const [bookings, setBookings] = useState(null);
  const [booking, setBooking] = useState(Object);

  const fetchBooking = async id => {
    let res = await fetch("/rest/bookings/" + id);
    res = await res.json();
    setBooking(res);
  };

  const fetchBookings = async () => {
    let res = await fetch('/rest/bookings')
    res = await res.json()
    console.log(res)
    setBookings(res)
  }

  const appendBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  useEffect(() => {
    fetchBookings() //so that bookings has data in it
  }, []) 


  const values = {
    bookings,
    setBookings,
    fetchBookings,
    booking,
    setBooking,
    fetchBooking,
    appendBooking
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
}
