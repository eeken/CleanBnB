import React, { useContext } from "react";
import { FormGroup } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";

function ShowResidence() {
  const { user } = useContext(UserContext);

  let history = useHistory();

  if (user.residenceList !== null) {
    const list = () => {
      return user.residenceList.map((residence, i) => {
        return (
          <div className="pb-1 pt-1">
            <hr className="m-0 ml-4 mb-3" style={{ "width": "85%" }}></hr>
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
              <div className="col-7 ml-2">
                <p className="darkbrowntext mb-0 mt-2 pr-2 residenceDetailsTitle">
                  {residence.title}
                </p>
                <p className="mb-0 residenceDetailsCommonDetails">
                  {residence.maxguests} guests - {residence.numberofbeds} beds - {residence.rooms}  room(s)
                </p>
                <p className="golden totalpricetext mb-0 mt-4 mr-3 font-weight-bold text-right">
                  <span className="ml-1 pricetext">
                    ${residence.pricepernight}</span> per night
              </p>
              </div>
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
