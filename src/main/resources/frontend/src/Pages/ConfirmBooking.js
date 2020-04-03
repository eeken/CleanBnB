//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";

function ConfirmBooking() {

  function confirmPolicies() {
    var checkBox = document.getElementById("policies");
    /* if (checkBox.checked == true) {
      //allow client to book the residence
    } else {
      //don't allow client to book the residence
    } */
  }

  return (

    <div>
      <div className="white">
        <div className="justify-content-center">
          <h3 className="searchAndFilterFormTitle golden p-3" align="center">Confirm Booking</h3>
          <img
            width="100%"
            height="250vh"
            border="black"
            src="{residenceImages.imagePath}"
            className="userImage mr-3"
          />

          <div className="residenceDetailsPageDescription golden text-center">
            Residence: Lake House in South Sweden
            Location: Höör, Skåne, Sweden
            Amount of Guests: 2
            Chosen date: Sep 25 - Sep 28, 2020
            <br></br>
            <br></br>
            Total Price: 650 x 3 nights = $1950
               <hr></hr>
            Enter your e-mail address to complete the booking:
          </div>


          <div className="row golden">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              id="policies"
              onClick={confirmPolicies()}
            />
            Agree to the
            <a
              href="https://www.airbnb.com/help/topic/250/terms-policies"
              target="_blank"
              className="ml-1 policiesLink"
            >
              terms and policies
               
               

            </a>
          </div>



        </div>
      </div>
    </div>



  )

}

export default ConfirmBooking;
