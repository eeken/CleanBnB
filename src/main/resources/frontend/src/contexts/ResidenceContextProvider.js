import React, { createContext, useState, useEffect } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residenceDetails, setResidenceDetails] = useState("");
  const [residenceImages, setResidenceImages] = useState("");

  const fetchResidence = async () => {
    let res = await fetch("/rest/residences");
    try {
      res = await res.json();
      setResidences(res);
      
    } catch {
      
    }
  };

  const fetchResidenceDetails = async (id) => {
    let res = await fetch("/rest/residences/" + id);
    res = await res.json();
    setResidenceDetails(res);
  };

  const fetchResidenceImages = async (id) => {
    let res = await fetch("/rest/images/" + id);
    res = await res.json();
    setResidenceImages(res)
  };

  useEffect(() => {
    fetchResidence();
  }, []);

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residenceDetails,
    setResidenceDetails,
    fetchResidenceDetails,
    fetchResidenceImages,
    residenceImages,
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
