import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = e => {
    e.preventDefault();
    console.log("First name entered :  " + firstName);
    console.log("Last name entered :  " + lastName);
    console.log("Email entered :  " + email);
    console.log("Password entered  :  " + password);
  };

  return (
    <div className="registerMain ">
      <Form
        className="registerForm col-10 col-lg-3 col-md-6 darkbrown golden"
        onSubmit={submitRegister}
      >
        <p className="registerFormTitle" align="center">
          Register
        </p>
         <FormGroup align="left">
          <Label for="email-input" className="mb-1">
            First Name
          </Label>
          <Input
            type="text"
            id="firstName-input"
            onChange={e => setFirstName(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup align="left">
          <Label for="lastName-input" className="mb-1">
            Last Name
          </Label>
          <Input
            type="text"
            id="email-input"
            onChange={e => setLastName(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup align="left">
          <Label for="email-input" className="mb-1">
            E-mail
          </Label>
          <Input
            type="text"
            id="email-input"
            onChange={e => setEmail(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup align="left">
          <Label for="password-input" className="mb-1">
            Password
          </Label>
          <Input
            type="text"
            id="password-input"
            onChange={e => setPassword(e.target.value)}
          ></Input>
        </FormGroup>

        <Button
          className="registerSubmitButton"
          style={{
            backgroundColor: "#B9986D"
          }}
        >
          Register
        </Button>
        <p
          align="right"
          className="logInText"
        >
          Or log in if you already have an account here!
        </p>
      </Form>
    </div>
  );
}
export default Register;
