//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";

function ConfirmBooking() {
  const [email, setEmail] = useState();

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
          <h3 className="confirmBookingTitle golden p-3" align="center">Confirm Booking</h3>
          <img
            width="100%"
            height="250vh"
            border="black"
            src="{residenceImages.imagePath}"
            className="userImage mr-3 mb-4"
          />

          <div className="confirmBookingText darkbrowntext text-left">
            <b>Residence:</b> Lake House in South Sweden<br></br>
            <b>Location:</b> Höör, Skåne, Sweden<br></br>
            <b>Amount of Guests:</b> 2<br></br>
            <b>Chosen date:</b> Sep 25 - Sep 28, 2020<br></br>
            <br></br>
            <b>Total Price:</b> 650 x 3 nights =
            <b className="priceText golden">$1950</b>
          </div>
          <hr></hr>
         
          <FormGroup className="col-10 offset-1 mb-4 mt-5">
            <div className="enterEmailText darkbrowntext" align="center">
              <b>Enter your e-mail address to complete the booking:</b>
            </div>
            <Input
              type="text"
              id="email-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your e-mail address here"
            ></Input>
          </FormGroup>


          <div className="golden darkbrowntext m-5" align="center">
            <input
              type="checkbox"
              className="mr-2"
              id="policies"
              onClick={confirmPolicies()}
            />
            <b>Agree to the
              <a
                href="https://www.airbnb.com/help/topic/250/terms-policies"
                target="_blank"
                className="ml-1 policiesLink"
              >
                terms and policies
            </a></b>
          </div>

          <Button className="bookingButton col-10 offset-1 mb-5 p-2">
            BOOK THIS RESIDENCE
          </Button>


        </div>
      </div>
    </div>



  )

}

export default ConfirmBooking;
