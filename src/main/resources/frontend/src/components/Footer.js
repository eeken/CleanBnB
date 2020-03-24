import React from 'react';
import { Row, Col } from 'reactstrap'

export default function Footer() {
  return (
    <footer className="container-fluid">
      <Row>
        <Col xs="12" className="footer text light
        pt-3 text-center">
          &#169; 2020 CleanBNB, Inc. All rights reserved.
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="footer text light
         pb-3 text-center">
          About | Contact.
        </Col>
      </Row>
    </footer>
  )
}
