import React from "react";
import { Container } from 'reactstrap';
import SearchAndFilerStart from "../components/SearchAndFilterStart";

function LandingPage() {
  return (
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <SearchAndFilerStart/>
      </Container>
  );
}

export default LandingPage;
