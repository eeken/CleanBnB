import React from "react";
import ResidenceCard from "../components/ResidenceCard";

export default function Explore() {
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
