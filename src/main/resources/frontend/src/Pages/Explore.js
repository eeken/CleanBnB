import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResidenceCard from "../components/ResidenceCard";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

export default function Explore() {
  const { fetchResidence } = useContext(ResidenceContext);
  const { destination } = useParams();
  const { numberofguests } = useParams();
  const { checkIn } = useParams();
  const { checkOut } = useParams();

  const params = {
    destination: destination,
    numberofguests: parseInt(numberofguests ? numberofguests : 0),
    checkIn: parseInt(checkIn ? checkIn : 0),
    checkOut: parseInt(checkOut ? checkOut : 0),
  }

  useEffect(() => {
    fetchResidence(params);
  }, []);

  return (

    <div className="col-12 white ">
      <h4 className="golden font-weight-bold p-4" align="center">Residences for rent</h4>
      <div className="pb-2">
        <ul>
          <ResidenceCard></ResidenceCard>
        </ul>
      </div>
    </div>

  );
}
