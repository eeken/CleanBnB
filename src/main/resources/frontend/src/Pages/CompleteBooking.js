//REACT
import React, { useContext, useEffect } from "react";
import { Button } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";

//CONTEXTPROVIDERS
import { ResidenceContext } from "../contexts/ResidenceContextProvider";

function ConfirmBooking() {
  let { id } = useParams();
  let history = useHistory();
  const { checkin, checkout, numberofguests, amountofnights, totalprice } = useParams();
  const {
    residence,
    fetchResidenceDetails,
  } = useContext(ResidenceContext);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    fetchResidenceDetails(id);
  }, []);

  if (!residence) {
    return null
  }
  
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let checkinDate = new Date(checkin * 1000);
  checkinDate = checkinDate.getDate() + " " + months[checkinDate.getMonth()] + " " + checkinDate.getFullYear()

  let checkoutDate = new Date(checkout * 1000);
  checkoutDate = checkoutDate.getDate() + " " + months[checkoutDate.getMonth()] + " " + checkoutDate.getFullYear()

  const returnHome = async () => {
    await history.push("/")
  }

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

            <b>Residence:</b> {residence.title} <br></br>
            <b>Location:</b>  {residence.address.city}, {residence.address.country} <br></br>
            <b>Amount of Guests:</b> {numberofguests} <br></br>
            <b>Chosen date:</b> {checkinDate} - {checkoutDate}<br></br>
            <br></br>
            <b>Total Price:</b> {residence.pricepernight} x {amountofnights} nights =
            <b className="priceText golden">${totalprice}</b>
          </div>

          <Button className="returnButton col-10 offset-1 mt-5 mb-5"
          onClick={returnHome}>
            RETURN TO THE HOME PAGE
          </Button>
          
        </div>
      </div>
    </div>
  )
}

export default ConfirmBooking;
