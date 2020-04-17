import React, { createContext, useState } from "react";

export const ResidenceContext = createContext();
export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residence, setResidence] = useState(null);
  const [residenceImages, setResidenceImages] = useState(null);

  const fetchResidence = async (params) => {
    try {
      let res = await fetch(
        "/rest/residences/explore?destination=" +
          params.destination +
          "&numberofguests=" +
          params.numberofguests +
          "&checkIn=" +
          params.checkIn +
          "&checkOut=" +
          params.checkOut
      );
      res = await res.json();

      setResidences(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  const fetchResidenceDetails = async (id) => {
    let res = await fetch("/rest/residences/details?id=" + id);
    res = await res.json();

    let bookedTempArr = [];
    let bookedDaysLoaded = false;
    let arr = [];

    // ALL THE BOOKED DAYS ARE LOOPED OUT AND ADDED TO THE TEMP bookedTempArr
    if (res.bookedDays != null) {
      for (let i = 0; i < res.bookedDays.length; i++) {
        let duration =
          (res.bookedDays[i].checkOut - res.bookedDays[i].checkIn) / 86400;
        for (let day = 0; day <= duration; day++) {
          let date = new Date(res.bookedDays[i].checkIn * 1000);
          date.setDate(date.getDate() + day);
          bookedTempArr.push(date.toString().slice(0,-46));
          console.log("is " + date.toString().slice(0,-46));
        }
        bookedDaysLoaded = true;
      }
      
      if (bookedDaysLoaded || res.bookedDays != null ) {
        for (let i = 0; i < res.availableDays.length; i++) {
          let duration =
            (res.availableDays[i].endDate - res.availableDays[i].startDate) /
            86400;
          for (let day = 0; day <= duration; day++) {
            let date = new Date(res.availableDays[i].startDate * 1000);
            date.setDate(date.getDate() + day);
            if (!bookedTempArr.includes(date.toString().slice(0,-46))) {
              arr.push(date);
              console.log("not : " + date.toString().slice(0,-46));
            }
          }
        }
        res.availableDays = arr;
      }
    }

    setResidence(res);
    setResidenceImages(res.images);
  };

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residence,
    setResidence,
    fetchResidenceDetails,
    residenceImages,
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
