import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  async function submitRegister(e) {
    e.preventDefault();
    const credentials = {
      firstName,
      lastName,
      email,
      password
    };

    let response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    try {
      response = await response.json();
      setUser(response);
      history.push("/my-page");
    } catch {
      console.log("Bad credentials");
    }
  }

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
            required
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
            required
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
            required
          ></Input>
        </FormGroup>

        <FormGroup align="left">
          <Label for="password-input" className="mb-1">
            Password
          </Label>
          <Input
            type="password"
            id="password-input"
            onChange={e => setPassword(e.target.value)}
            required
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
        <p
          onClick={() => history.push("/account-login")}
          align="right"
          className="logInText cursorPointer"
        >
          Already have an account? Click here!
        </p>
      </Form>
    </div>
  );
}
export default Register;
