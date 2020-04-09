//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";

function ConfirmBooking() {

  return (
    <div>
      <div className="white">
        <div className="justify-content-center">
          <h3 className="confirmBookingTitle golden p-3" align="center">
            Booking Complete</h3>
          <hr></hr>
          <h5 className="thankYouText mt-4 mb-4" align="center">
            Thank you for booking at ClearBNB!</h5>

          <div className="confirmBookingText darkbrowntext text-left">

            <b>Residence:</b> Lake House in South Sweden<br></br>
            <b>Location:</b> Höör, Skåne, Sweden<br></br>
            <b>Amount of Guests:</b> 2<br></br>
            <b>Chosen date:</b> Sep 25 - Sep 28, 2020<br></br>
            <br></br>
            <b>Total Price:</b> 650 x 3 nights =
            <b className="priceText golden">$1950</b>
          </div>

          <Button className="returnButton col-10 offset-1 mt-5 mb-5">
            RETURN TO THE HOME PAGE
          </Button>
          
        </div>
      </div>
    </div>
  )
}

export default ConfirmBooking;
