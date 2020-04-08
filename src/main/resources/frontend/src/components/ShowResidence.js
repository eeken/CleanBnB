import React, { useContext, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { UserContext } from "../contexts/UserContextProvider";
import { ImageContext } from "../contexts/ImageContextProvider";
import { useHistory, useParams } from "react-router-dom";
import ResidenceCard from "../components/ResidenceCard";

function ShowResidence() {
  const { residences } = useContext(ResidenceContext);
  const { images } = useContext(ImageContext);
  const { user } = useContext(UserContext)
  console.log(user);

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

  let history = useHistory();

  function showResidenceImage(currentResidencyId) {
    
    if (images) {
     let residenceImages = images.filter(image => image.residencyId === currentResidencyId)
     return residenceImages[0].imagelink
    }
  }

  if (residences) {
    const list = () => {
      return residences.map((residence, i) => {
        return (
          <div
            key={i}
            onClick={() => history.push("/details/residence_id=" + residence.id)}
            className="row text-left residenceCard mb-2"
            style={{ cursor: "pointer" }}
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
                {residence.address.city}, {residence.address.country}<br></br>
                {residence.maxguests} guests - {residence.numberofbeds} beds - {residence.rooms}  rooms
              </p>
              
                <p className="golden mb-0 residencePriceDetails">
                  ${residence.pricepernight}
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

export default ShowResidence;
