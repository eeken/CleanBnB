import React, { useContext } from "react";
import { FormGroup } from "reactstrap";
import { UserContext } from "../contexts/UserContextProvider";
import { BookingContext } from "../contexts/BookingContextProvider";

const ShowResidence = () => {
  const { user } = useContext(UserContext);
  const { bookings } = useContext(BookingContext);

  const convertDate = (date) => {
    return new Date(date*1000).toLocaleDateString()
  };

  if (bookings) {
    const list = () => {
      return user.bookingList.map((booking, i) => {
        return (
          <div className="pb-1 pt-1">
            <hr className="m-0 ml-4 mb-2" style={{ "width": "85%" }}></hr>
            <div className="row text-left pt-2">
              <div className="col-5 col-lg-2 col-md-3 ">
                <img
                  className="cardImage pl-3"
                  src={booking.residence.images[0].imagelink}
                  alt="residence-image"
                />
              </div>
              <div className="col-7">
                <p className="golden mb-0 mt-2 pr-2 residenceDetailsTitle">
                  {booking.residence.title}
                </p>
                <p className="mb-0 residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Amount of guests: </span>
                  {booking.amountOfGuests}
                </p>
                <p className="mb-0 residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Check in: </span>
                  {convertDate(booking.checkIn)}
                </p>
                <p className="residenceDetailsCommonDetails">
                  <span className="font-weight-bold">Check out: </span>
                  {convertDate(booking.checkOut)}
                </p>
              </div>
            </div>
            <div className="col-12 text-left">
              <p className="residenceDetailsCommonDetails m-3">
                <span className="font-weight-bold">Address: </span>
                {booking.residence.address.street} {booking.residence.address.streetNumber}, {booking.residence.address.city}, {booking.residence.address.country}
              </p>
            </div>
            <div className="col-12 text-right white r-2 font-weight-bold">
              <p className="golden totalpricetext mb-0 mr-4">
                Total price:
                <span className="ml-1 pricetext">
                  ${booking.totalPrice}</span>
              </p>
            </div>
          </div>
        );
      });
    };
    return (
      <FormGroup className="white">
        <p className="darkbrowntext currenttext font-weight-bold pt-4">CURRENT BOOKINGS</p>
        <div className="pb-3">{list()}</div>
      </FormGroup>
    )
  }
  return (
    <div className="white">
      <h1 className="golden"> No bookings yet</h1>
    </div>
  );
};
export default ShowResidence;
