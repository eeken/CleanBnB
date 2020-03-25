import React from "react";
import ResidenceCard from "../components/ResidenceCard";
function LandingPage() {
  return (
    <div className="row white" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col-12 col-md-8 col-lg-8">
        <div className="p-4"></div>
          <ResidenceCard />
      </div>
    </div>
  );
}

export default LandingPage;
