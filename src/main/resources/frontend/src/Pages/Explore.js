import React, { useContext, useEffect } from "react";
import ResidenceCard from "../components/ResidenceCard";
import { useParams } from "react-router-dom";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

export default function Explore() {
  const { fetchResidenceSearchResults } = useContext(ResidenceContext);
  const { fetchResidence } = useContext(ResidenceContext);

  let { destination } = useParams();
  let { numberofguests } = useParams();

  useEffect(() => {
    if (destination == null ) {
      fetchResidence();
    } else {
      fetchResidenceSearchResults(destination);
    }
  }, []);

  useEffect(() => {
    if (destination == '') {
      fetchResidenceSearchResults( { destination , numberofguests } );
    }
  }, []);

  return (
    <div>
      <div className="white m-5 searchBar"> Click here to search... </div>
      <div className="col-12 white">
        <div className="whiteBackground p-4">
          <ul>
            <ResidenceCard></ResidenceCard>
          </ul>
        </div>
      </div>
    </div>
  );
}
