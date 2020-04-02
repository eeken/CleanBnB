import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = e => {
    e.preventDefault();
    console.log("Email entered :  " + email);
    console.log("Password entered  :  " + password);
  };

  let history = useHistory()

  return (
    <div className="loginMain ">
      <Form
        className="loginForm col-10 col-lg-3 col-md-6 darkbrown golden"
        onSubmit={submitLogin}
      >
        <p className="loginFormTitle" align="center">
          Log In
        </p>
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
          className="loginSubmitButton"
          style={{
            backgroundColor: "#B9986D"
          }}
        >
          Log In
        </Button>
        <p 
          onClick={() => history.push("/register/")}
          align="right"
          className="loginRegisterText"
        >
          Or become a member here!
        </p>
      </Form>
    </div>
  );
}
export default Login;
