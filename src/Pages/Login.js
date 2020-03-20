import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("Email entered :  " + email);
    console.log("Password entered  :  " + password);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        width: "19em",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Form
        className="col-12 col-lg-4 col-md-6 darkbrown golden"
        style={{
          borderRadius: "5px",
          padding: "30px",
          fontWeight: "bold"
        }}
        onSubmit={submitLogin}
      >
        <p style={{ fontSize: "1.8em" }} align="center">
          Log In
        </p>
        <FormGroup align="left">
          <Label for="email-input" className="mb-1">E-mail</Label>
          <Input
            type="text"
            id="email-input"
            onChange={e => setEmail(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup align="left">
          <Label for="password-input" className="mb-1">Password</Label>
          <Input
            type="text"
            id="password-input"
            onChange={e => setPassword(e.target.value)}
          ></Input>
        </FormGroup>

        <Button
          style={{
            width: "100%",
            backgroundColor: "#B9986D",
            fontWeight: "Bold"
          }}
        >
          Log In
        </Button>
        <p style={{
          fontStyle: "italic",
          fontSize: "12px",
          marginLeft: "5em",
          marginTop: "3px"
          }}>Or become a member here!</p>
      </Form>
    </div>
  );
}
export default Login;
