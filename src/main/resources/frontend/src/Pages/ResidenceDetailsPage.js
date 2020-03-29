import React, { useContext, useEffect, useState } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { useParams } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";

function ResidenceDetailsPage() {
  let { id } = useParams();
  const { residence } = useContext(ResidenceContext);
  const { fetchResidenceDetails } = useContext(ResidenceContext);
  const { residenceImages } = useContext(ResidenceContext);
  const { fetchResidenceImages } = useContext(ResidenceContext);
  const { address } = useContext(ResidenceContext);
  const [numberOfGuests, setNumberOfGuests] = useState("");

  useEffect(() => {
    fetchResidenceDetails(id);
  }, []);

  useEffect(() => {
    fetchResidenceImages(id);
  }, []);

  console.log(residence.address);

  return (
    <div>
      <div className="white m-5 searchBar"> Click here to search... </div>

      <div className="white">
        <div className="row justify-content-center">
          <div className="residencePageTitle golden col-12">
            {" "}
            , {residence.city}{" "}
          </div>
          {/* <div className=" sliderContainer container col-12 col-lg-6">  </div> */}
        </div>

        <img width="100%" height="400vh" src={residenceImages.imagePath} />

        <div className="row m-4">
          <img
            width="70px"
            height="70px"
            src={residenceImages.imagePath}
            className="userImage mr-3"
          />
          <div className="residencePageAddress golden mr-5">
            {" "}
            {address.country}, {address.city}{" "}
          </div>
          <h4 className="golden">{residence.pricepernight}kr per night </h4>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="residencePageDescription golden m-3">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            iaculis eleifend diam non consequat. Maecenas faucibus, est eleifend
            venenatis dictum, eros elit laoreet lorem, quis imperdiet tortor
            lectus quis mi. In molestie tincidunt ante, blandit vulputate nisi
            aliquet sed. Suspendisse sit amet eros tortor. Nam ex lorem, porta
            id gravida ut, dictum a risus. Nulla feugiat massa vel ex
            scelerisque, ut sollicitudin massa fermentum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam tellus nisi,
            pharetra eu dui id. Ullamcorper laoreet elit.<br></br>
            <br></br>Vivamus pulvinar purus a velit dictum lobortis sit amet sit
            amet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Mauris nec gravida massa. Donec orci
            augue, pellentesque ac molestie eu, ultrices hendrerit ex. Aliquam
            lobortis, sem id condimentum semper, odio libero gravida velit,
            vitae bibendum libero dui quis lacus. Donec tincidunt, felis eu
            consectetur ultrices, sapien orci volutpat lectus, vel faucibus
            magna nibh a risus. Proin et felis ultrices nulla feugiat venenatis
            id vel risus.{" "}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residencePageAddress golden mr-5">
            Amenities{" "}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residencePageAddress golden mr-5">
            Availability
          </div>
        </div>
        <hr></hr>
        <div className="row m-4 justify-content-center">
          <div className="col-12 residencePageAddress golden ml-1.5">
            Guests{" "}
          </div>
          <div className="col-9 golden mt-3 mr-3">
            Amount of guests (including children):
            <FormGroup>
              <Input
                type="select"
                name="guestSelection"
                id="guestSelection"
                onChange={e => setNumberOfGuests(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </Input>
            </FormGroup>
          </div>
          <div className="col-9 golden m-3">
            <b>Total price:</b>
          </div>
          <Button className="bookingButton m-5 p-2">BOOK THIS RESIDENCE</Button>
        </div>
      </div>
    </div>
  );
}

export default ResidenceDetailsPage;
