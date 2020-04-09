import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";

const ShowResidence = () => {
  const { residences } = useContext(ResidenceContext);

  let history = useHistory();

 if (residences) {
   const list = () => {
     return user.residenceList.map((residence, i) => {
       return (
         <div style={{ backgroundColor: "White" }}>
           <div
             key={i}
             onClick={() =>
               history.push("/details/residence_id=" + residence.id)
             }
             className="row text-left residenceCard"
             style={{ cursor: "pointer", backgroundColor: "White" }}
           >
             <div className="col-5 col-lg-2 col-md-3">
               <img
                 className="cardImage"
                 src={residence.images[0].imagelink}
                 alt="residence-image"
               />
             </div>
             <div className="col-7">
               <p className="golden mt-0 mb-0 residenceDetailsTitle">
                 {residence.title}
               </p>
               <p className="golden mb-0 residenceDetailsCommonDetails">
                 {residence.address.city}, {residence.address.country}
                 <br></br>
                 {residence.maxguests} guests - {residence.numberofbeds} beds -{" "}
                 {residence.rooms} rooms
               </p>

               <p className="golden mb-0 residencePriceDetails">
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
   return <>{list()}</>;
 }
 return (
   <div>
     {" "}
     <h1> No matches </h1>{" "}
   </div>
 ); 
}
export default ShowResidence;
