import React, { useContext, useEffect } from "react";
import { FormGroup } from "reactstrap";
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
            <div
              key={i}
              onClick={() => history.push("/details/residence_id=" + residence.id)}
              className="text-left residenceCard mb-2"
              style={{ cursor: "pointer" }}
            >
              <div className="col-5">
                <img
                  className="cardImage"
                  src={residence.images[0].imagelink}
                  alt="residence"
                />
              </div>
              <div className="col-7 ml-1">
                <p className="row golden mb-0 ml-1 residenceDetailsTitle">
                  {residence.title}
                </p>
                <p className="row golden residenceDetailsCommonDetails mb-2 ml-1">

                  {residence.maxguests} guests - {residence.numberofbeds} beds - {residence.rooms}  rooms
              </p>
              
              <p className="row golden m-0 residencePriceDetails d-flex align-items-end flex-column">
                  ${residence.pricepernight}
                  <span className="residenceDetailsCommonDetails ml-1">
                    per night
                </span>
                </p>
              
              </div>
         
            </div>
        );
      });
    };
    return (
      <FormGroup className="white">
        <div className="pt-4 pb-3">{list()}</div>
      </FormGroup>

    )
  }
  return <div></div>;
}

export default ShowResidence;
