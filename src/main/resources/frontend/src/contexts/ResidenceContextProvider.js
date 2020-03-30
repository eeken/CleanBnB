import React, { createContext, useState } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residence, setResidence] = useState(Object);
  const [address, setAddress] = useState(Object);
  const [residenceImages, setResidenceImages] = useState("");

  const fetchResidence = async values => {
    if (values.destination == undefined) {
      try {
        let res = await fetch("/rest/residences/");
        res = await res.json();
        setResidences(res);
      } catch {
        console.log("Not authenticated");
      }
    } else {
      let res = await fetch("/rest/residences/" + values.destination + "/" + values.numberofguests);
      res = await res.json();
      setResidences(res);
    }
  };

  const fetchResidenceDetails = async id => {
    let res = await fetch("/rest/residence/" + id);
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
    fetchResidence,
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
