import React from "react";

function ResidenceCard() {
  
  const residence = {
    title: "Lake House In South Sweden",
    maxGuests: 4,
    numberOfBeds: 2,
    numberOfRooms: 4,
    pricePerNight: 650
  };

  return (
    <div className="row" style={{ height: "25vh" }}>
      <div
        className="col-4"
        style={{
          backgroundImage:
            "url(https://a0.muscache.com/im/pictures/690033e1-e80d-4966-be65-d968da63934f.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto"
        }}
      ></div>
      <div className="col-8">
        <p className="golden mt-3 mb-0" style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {residence.title}
        </p>
        <p className="golden" style={{ fontSize: "0.75em" }}>
          {residence.maxGuests} guests - {residence.numberOfBeds} beds -
          {residence.numberOfRooms} rooms
        </p>
        <p className="golden">
          <span style={{ fontSize: "1.8em", fontWeight: "bold" }}
          className="self-align-end">
            {residence.pricePerNight}kr
          </span>
          <span style={{ fontSize: "1em" }}> per night</span>
        </p>
      </div>
      <hr></hr>
    </div>
  );
}
export default ResidenceCard;
