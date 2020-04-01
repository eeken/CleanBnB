import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  const submitSearch = async e => {
    e.preventDefault();
    await history.push("explore");
  };

  return (
    <div className="col-12 col-lg-3 col-md-6">
      <Form
        className="darkbrown golden searchAndFilterForm"
        onSubmit={submitSearch}
      >
        <h2 className="searchAndFilterFormTitle" align="center">
          Book your unique stay around the world!
        </h2>
        <Button className="searchButton" style={{ backgroundColor: "#B9986D" }}>
          START BROWSING
        </Button>
      </Form>
    </div>
  );
}
export default LandingPage;
