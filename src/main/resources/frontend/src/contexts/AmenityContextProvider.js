import React, { createContext, useState } from "react";

export const AmenityContext = createContext();

export default function AmenityContextProvider(props) {

  const [amenities, setAmenities] = useState(null);
  const [residenceAmenity, setResidenceAmenity] = useState("");

  const fetchAmenities = async () => {
    let res = await fetch("/rest/amenities");
    try {
      res = await res.json();
      setAmenities(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  const fetchResidenceAmenity = async id => {
    let res = await fetch("/rest/amenities/" + id);
    res = await res.json();
    setResidenceAmenity(res);
  };

  const values = {
    amenities,
    fetchAmenities,
    setAmenities,
    fetchResidenceAmenity,
    setResidenceAmenity,
    residenceAmenity,
  };

  return (
    <AmenityContext.Provider value={values}>
      {props.children}
    </AmenityContext.Provider>
  );
}
