import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useContext(UserContext)
  let history = useHistory();

  async function submitLogin(e) {
    e.preventDefault();
    const credentials =
      "username=" +
      encodeURIComponent(email) +
      "&password=" +
      encodeURIComponent(password);

    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials
    });

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      console.log("Successfully logged in");
      history.push("/");
      fetchUser()
    }
  }

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
            type="password"
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
        <p align="right" className="loginRegisterText cursorPointer"
        onClick={() => history.push('/register')}>
          Or become a member here!
        </p>
      </Form>
    </div>
  );
}
export default Login;
