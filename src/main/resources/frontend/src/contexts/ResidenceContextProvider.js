import React, { createContext, useState } from "react";

export const ResidenceContext = createContext();
export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residence, setResidence] = useState(null);
  const [residenceImages, setResidenceImages] = useState(null);

  const fetchResidence = async params => {
    console.log(params.checkIn);
    console.log(params.checkOut);
    
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

  const fetchResidenceDetails = async id => {
    let res = await fetch("/rest/residences/details?id=" + id);
    res = await res.json();
    setResidence(res);
    setResidenceImages(res.images)
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
