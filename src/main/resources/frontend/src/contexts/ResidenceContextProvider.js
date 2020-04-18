import React, { createContext, useState } from "react";

export const ResidenceContext = createContext();
export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residenceDetails, setResidenceDetail] = useState(null);
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

    let bookedDaysTempArray = [];
    let availableDaysTempArray = [];
    let bookedDaysAreLoaded = false;

    // ALL THE BOOKED DAYS ARE LOOPED OUT AND ADDED TO THE TEMP bookedDaysTempArray
    if (res.bookedDays != null) {
      for (let i = 0; i < res.bookedDays.length; i++) {
        let duration =
          (res.bookedDays[i].checkOut - res.bookedDays[i].checkIn) / 86400;
        for (let day = 0; day <= duration; day++) {
          let date = new Date(res.bookedDays[i].checkIn * 1000);
          date.setDate(date.getDate() + day);
          bookedDaysTempArray.push(date.toString().slice(0, 15));
        }
        bookedDaysAreLoaded = true;
      }
      // LOOP THE AVAILABLE DAYS FROM THE DATABASE AND IF THE DAY DOES NOT EXIST IN THE bookedDaysTempArray
      // PUSH THE DAY TO availableDaysTempArray, AND ON COMPLETION REPLACE res.availableDays WITH availableDaysTempArray
      if (bookedDaysAreLoaded || res.bookedDays != null) {
        for (let i = 0; i < res.availableDays.length; i++) {
          let duration =
            (res.availableDays[i].endDate - res.availableDays[i].startDate) /
            86400;
          for (let day = 0; day <= duration; day++) {
            let date = new Date(res.availableDays[i].startDate * 1000);
            date.setDate(date.getDate() + day);
            if (!bookedDaysTempArray.includes(date.toString().slice(0, 15))) {
              availableDaysTempArray.push(date);
            }
          }
        }
        res.availableDays = availableDaysTempArray;
      }
    }
    setResidenceImages(res.images);
    setResidenceDetail(res);
  };

  const values = {
    residences,
    setResidences,
    fetchResidence,
    residenceDetails,
    setResidenceDetail,
    fetchResidenceDetails,
    residenceImages,
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
