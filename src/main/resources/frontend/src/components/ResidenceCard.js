import React, { useContext } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { ImageContext } from "../contexts/ImageContextProvider";
import { useHistory } from "react-router-dom";

function ResidenceCard() {
  const { residences } = useContext(ResidenceContext);
  const { images } = useContext(ImageContext);

  let history = useHistory();

  function showResidenceImage(currentResidencyId) {
    console.log(currentResidencyId)
    console.log(images)
    if (images) {
     let residenceImages = images.filter(image => image.residencyId == currentResidencyId)
     return residenceImages[0].imagelink
    }
  }

  if (residences) {
    const list = () => {
      return residences.map((residence, i) => {
        return (
          <div
            key={i}
            onClick={() => history.push("/residence/" + residence.id)}
            className="row text-left residenceCard mb-2"
            style={{cursor: 'pointer' }}
          >
            <div className="col-5 col-lg-2 col-md-3">
              <img
                className="cardImage"
                src={showResidenceImage(residence.id)}
                alt="residence-image"
              />
            </div>
            <div className="col-7">
              <p className="golden mt-0 mb-0 residenceDetailsTitle">
                {residence.title}
              </p>
              <p className="golden mb-0 residenceDetailsCommonDetails">
                {residence.city}, {residence.country}<br></br>
                {residence.maxGuests} guests - {residence.numberofbeds} beds - {residence.rooms}  rooms
              </p>
              
                <p className="golden mb-0 residencePriceDetails">
                  {residence.pricepernight} kr
                  <span className="residenceDetailsCommonDetails">
                    {" "}
                    per night{" "}
                </span>
      
                </p>
            
            </div>
          </div>
        );
      });
    };
    return <>{list()}</>;
  }
  return <div> <h1> No matches </h1> </div>;
}

export default ResidenceCard;
