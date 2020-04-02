import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResidenceCard from "../components/ResidenceCard";
//import SearchBar from "../components/SearchBar";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

export default function Explore() {
  const { fetchResidence } = useContext(ResidenceContext);
  const { destination } = useParams();
  const { numberofguests } = useParams();

  const params = {
    destination: destination,
    numberofguests: parseInt(numberofguests ? numberofguests : 0)
  }

  useEffect(() => {
    fetchResidence(params);
  }, []);

  return (
    <div>
      {/* <SearchBar></SearchBar> */}
      <div className="col-12 white">
        <div className="whiteBackground pt-2 pb-2">
          <ul>
            <ResidenceCard></ResidenceCard>
          </ul>
        </div>
      </div>
    </div>
  );
}
