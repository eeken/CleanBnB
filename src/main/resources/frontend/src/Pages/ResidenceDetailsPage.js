import React, { useContext, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { useParams } from "react-router-dom";

function ResidenceDetailsPage() {
  let { id } = useParams();
  const { residenceDetails } = useContext(ResidenceContext);
  const { fetchResidenceDetails } = useContext(ResidenceContext);
  const { residenceImages } = useContext(ResidenceContext);
  const { fetchResidenceImages } = useContext(ResidenceContext);

  useEffect(() => {
    fetchResidenceDetails(id);
  }, []);

  useEffect(() => {
    fetchResidenceImages(id);
  }, []);
  
  console.log(residenceImages);
  
  
  return (
    <div className="row white justify-content-center">
      <div className="residenceDetailsPageTitle golden col-12">  {residenceDetails.country}, {residenceDetails.city} </div>
      <div className=" sliderContainer container col-12 col-lg-6">  </div>
      <div>
        <h4 className="golden">{residenceDetails.pricepernight}kr per night </h4>
      </div>
    </div>
  );
}

export default ResidenceDetailsPage;
