import React, { useContext, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { useParams } from "react-router-dom";

function ResidenceDetailsPage() {
  let { id } = useParams();
  const { residenceDetails } = useContext(ResidenceContext);
  const { fetchResidenceDetails } = useContext(ResidenceContext);

  useEffect(() => {
    fetchResidenceDetails(id);
  }, []);

  console.log(residenceDetails);

  return <div>
    <h1>ID: {residenceDetails.id} </h1>
    <h1>SIZE: {residenceDetails.size} </h1>
    <h1>ROOMS: {residenceDetails.rooms} </h1>
    <h1>PricePerNight: {residenceDetails.pricepernight} </h1>
    <h1>maxGuests: {residenceDetails.maxGuests} </h1>
  </div>;
}

export default ResidenceDetailsPage;
