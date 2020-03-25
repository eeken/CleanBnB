import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = e => {
    e.preventDefault();
    console.log("Email entered :  " + email);
    console.log("Password entered  :  " + password);
  };

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
          style={{
            backgroundColor: "#B9986D"
          }}
        >
          Log In
        </Button>
        <p
          align="right"
          style={{
            fontStyle: "italic",
            fontSize: "12px",
            marginTop: "3px"
          }}
        >
          Or become a member here!
        </p>
      </Form>
    </div>
  );
}
export default Login;
