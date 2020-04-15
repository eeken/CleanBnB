import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext()

export default function BookingContextProvider(props) {

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    let res = await fetch('/rest/bookings')
    res = await res.json()
    setBookings(res)
  }

  useEffect(() => {
    fetchBookings() 
  }, []) 

  const values = {
    bookings,
    setBookings,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
}
