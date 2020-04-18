import React from "react";
import { Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <Row>
        <Col
          xs="12"
          className="footer p-2 text-center"
          style={{
            fontSize: "0.7em",
          }}
        >
          &#169; 2020 CleanBnb, Inc. All rights reserved.
        </Col>
      </Row>
    </footer>
  );
}
