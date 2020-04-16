import React, { useContext, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { UserContext } from "../contexts/UserContextProvider";
import { useHistory, useParams } from "react-router-dom";

function ShowResidence() {
  const { user } = useContext(UserContext);

  let history = useHistory();

  if (user.residenceList !== null) {
    const list = () => {
      return user.residenceList.map((residence, i) => {
        return (
          <div style={{ backgroundColor: "White" }}>
            <div
              key={i}
              onClick={() => history.push("/details/residence_id=" + residence.id)}
              className="text-left residenceCard"
              style={{ cursor: "pointer", backgroundColor: "White" }}
            >
              <div className="col-5 col-lg-2 col-md-3">
                <img
                  className="cardImage"
                  src={residence.images[0].imagelink}
                  alt="residence-image"
                />
              </div>
              <div className="col-7 ml-1">
                <p className="golden mt-0 mb-0 residenceDetailsTitle">
                  {residence.title}
                </p>
                <p className="golden mb-0 residenceDetailsCommonDetails mb-2">

                  {residence.maxguests} guests - {residence.numberofbeds} beds - {residence.rooms}  rooms
              </p>
              </div>
              <div className="col-7 ml-1">
                <p className="golden m-0 residencePriceDetails">
                  ${residence.pricepernight}
                  <span className="residenceDetailsCommonDetails">
                    per night
                </span>
                </p>
              </div>
              
            </div>
          </div>
        );
      });
    };
    return (
    <div className="mb-3">
        <>{list()}</>
    </div>
    )
  }
  return <div></div>;
}

export default ShowResidence;
