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
    <div className="row text-left">
      <div className="col-5 image-container">
        <img
          className="cardImage"
          src="https://a0.muscache.com/im/pictures/690033e1-e80d-4966-be65-d968da63934f.jpg"
          alt="residence-preview"
        />
      </div>
      <div className="col-7">
        <p className="golden mt-3 mb-0 residenceDetailsTitle">
          {residence.title}
        </p>
        <p className="golden residenceDetailsCommonDetails">
          {residence.maxGuests} guests - {residence.numberOfBeds} beds -
          {residence.numberOfRooms} rooms
        </p>

        <div className="golden residencePriceDetails">
          <p>
            {residence.pricePerNight} kr
            <span className="residenceDetailsCommonDetails"> per night </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ResidenceCard;
