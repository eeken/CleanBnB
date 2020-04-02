import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom"

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

  /* async function springRegister() {
    const credentials = {
      username,
      password
    }
  
    let response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    try {
      response = await response.json()
      setUser(response)
      props.history.push('/')
    } catch {
      console.log('Bad credentials');
    }
  } */

  let history = useHistory()

  return (
    <div className="registerMain ">
      <Form
        className="registerForm col-10 col-lg-3 col-md-6 darkbrown golden"
        onSubmit={submitRegister}
      >
        <p className="registerFormTitle" align="center">
          REGISTER
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
          CREATE ACCOUNT
        </Button>
        <p onClick={() => history.push("/login/")}
          align="right"
          className="logInText"
        >
          Already have an account? Click here!
        </p>
      </Form>
    </div>
  );
}
export default Register;
