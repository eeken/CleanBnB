import React, { createContext, useState, useEffect } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residencesSearchResults, setResidencesSearchResults] = useState(null);
  const [residence, setResidence] = useState(Object);
  const [address, setAddress] = useState(Object);
  const [residenceImages, setResidenceImages] = useState("");

  const fetchResidence = async () => {
    let res = await fetch("/rest/residences");
    try {
      res = await res.json();
      setResidences(res);
      console.log(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  const fetchResidenceDetails = async (id) => {
    let res = await fetch("/rest/residences/" + id);
    res = await res.json();
    setAddress(res.address);
    setResidence(res)
  };

  const fetchResidenceImages = async (id) => {
    let res = await fetch("/rest/images/" + id);
    res = await res.json();
    setResidenceImages(res)
  };

    const fetchResidenceSearchResults = async (country, maxguests) => {
    let res = await fetch("/rest/search/residences/" + country + '/' + maxguests)
    res = await res.json();
      setResidences(res)
      console.log(res);
      
  }

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residence,
    setResidence,
    fetchResidence,
    fetchResidenceImages,
    residenceImages,
    residencesSearchResults,
    fetchResidenceSearchResults,
    fetchResidenceDetails,
    address,
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
