import React from "react";
import ResidenceCard from "../components/ResidenceCard";
import SearchBar from "../components/SearchBar";

export default function Explore() {
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
