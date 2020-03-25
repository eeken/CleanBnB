import React from "react";

function ResidenceCard(props) {
  return (
    <div className="row text-left residenceCard mb-0">
      <div className="col-5 prevImage">
        <img
          className="cardImage"
          src={props.residence.image}
          alt="residence-preview"
        />
      </div>
      <div className="col-7">
        <p className="golden mt-3 mb-0 residenceDetailsTitle">
          {props.residence.title}
        </p>
        <p className="golden residenceDetailsCommonDetails">
          {props.residence.maxGuests} guests - {props.numberOfBeds} beds -
          {props.residence.numberOfRooms} rooms
        </p>

        <div className="golden residencePriceDetails">
          <p>
            {props.residence.pricePerNight} kr
            <span className="residenceDetailsCommonDetails"> per night </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ResidenceCard;
