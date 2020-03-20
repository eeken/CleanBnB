import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function LandingPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <main>
      <Form
        className="darkbrown golden"
        style={{
          borderRadius: "5px",
          width: "87.5%",
          marginTop: "20%",
          padding: "30px",
          fontWeight: "bold"
        }}
      >
        <p style={{ fontSize: "1.4em" }} align="center">
          {" "}
          Book your uniqe stay around the world!{" "}
        </p>
        <FormGroup className="col-sm-12" align="left">
          <Label for="destination-input">Destination </Label>
          <Input type="text" id="destination-input" className="mb-4"></Input>
        </FormGroup>

        <FormGroup className="col-sm-12 mb-4">
          <div className="row justify-content-around">
            <Input style={{ width: "40%" }} type="date" />
            <Input style={{ width: "40%" }} type="date" />
          </div>
        </FormGroup>

        <FormGroup className="col-sm-12 mb-4">
        <Label for="guestSelection" align="left">Guests</Label>
        <Input type="select" name="guestSelection" id="guestSelection">
          <option> </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6+</option>
        </Input>
      </FormGroup>

        <Button
          style={{
            width: "90%",
            backgroundColor: "#B9986D",
            fontWeight: "Bold"
          }}
          className="col-sm-12 mb-4"
        >
          SEARCH
        </Button>
      </Form>
    </main>
  );
}

export default LandingPage;
