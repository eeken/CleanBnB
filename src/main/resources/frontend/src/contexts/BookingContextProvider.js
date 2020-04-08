import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext()

export default function BookingContextProvider(props) {

  const [bookings, setBookings] = useState([]);

  const appendBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const fetchBookings = async () => {
    let res = await fetch('/rest/bookings')
    res = await res.json()
    setBookings(res)
  }

  useEffect(() => {
    fetchBookings() //so that bookings has data in it
  }, []) 

  const values = {
    bookings,
    setBookings,
    appendBooking
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
}
