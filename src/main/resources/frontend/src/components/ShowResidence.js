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
              className="text-left residenceCard mb-3"
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
                <p className="row golden mb-0 ml-1 pr-1 residenceDetailsTitle">
                  {residence.title}
                </p>
                <p className="row golden residenceDetailsCommonDetails ml-1">

                  {residence.maxguests} guests - {residence.numberofbeds} beds - {residence.rooms}  rooms
              </p>

                <p className="golden residencePriceDetails ml-1">
                  ${residence.pricepernight}
                  <p className="golden detailtext ml-1">
                    p/n
                </p>
                </p>
              </div>

            </div>
        );
      });
    };
    return (
      <FormGroup className="white">
        <p className="darkbrowntext currenttext font-weight-bold pt-4">MY RESIDENCES</p>
        <div className="pb-3">{list()}</div>
      </FormGroup>

    )
  }
  return <div></div>;
}

export default ShowResidence;
