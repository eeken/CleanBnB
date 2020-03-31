import React, { createContext, useState } from "react";

export const ResidenceContext = createContext();
export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residence, setResidence] = useState(Object);
  const [address, setAddress] = useState(Object);
  const [residenceImages, setResidenceImages] = useState("");

  const fetchResidence = async params => {
    console.log(params);
    
    try {
      let res = await fetch(
        "/rest/residences/explore?destination=" + params.destination + "&numberofguests=" + params.numberofguests );
      res = await res.json();
      setResidences(res);

    } catch {
      console.log("Not authenticated");
    }
  };

  const fetchResidenceDetails = async id => {
    console.log(id + "context");
    let res = await fetch("/rest/residences/details?id=" + id);
    res = await res.json();
    setResidence(res);
    setAddress(res.address);
  };

  const fetchResidenceImages = async id => {
    let res = await fetch("/rest/images/" + id);
    res = await res.json();
    setResidenceImages(res);
  };

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residence,
    setResidence,
    fetchResidenceImages,
    residenceImages,
    fetchResidenceDetails,
    address
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
