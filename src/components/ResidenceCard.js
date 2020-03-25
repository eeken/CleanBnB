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
    <div className="row" style={{height: '20vh', display: 'flex', alignItems: 'center'}}>
      <div className="col-5">
        <img src="https://a0.muscache.com/im/pictures/690033e1-e80d-4966-be65-d968da63934f.jpg"
          style={{ height: 'auto', width: '100%', borderRadius: '10px' }}
        alt="imag"/>
      </div>
      <div className="col-7">
        <p className="golden mt-3 mb-0" style={{ fontSize: "2.1vh", fontWeight: "bold" }}>
          {residence.title}
        </p>
        <p className="golden" style={{ fontSize: "2vh" }}>
          {residence.maxGuests} guests - {residence.numberOfBeds} beds - 
          {residence.numberOfRooms} rooms
        </p>
        <p className="golden">
          <span style={{ fontSize: "2.8vh", fontWeight: "bold" }}
          className="self-align-end">
            {residence.pricePerNight}kr
          </span>
          <span style={{ fontSize: "1em" }}> per night</span>
        </p>
      </div>
    </div>
  );
}
export default ResidenceCard;
