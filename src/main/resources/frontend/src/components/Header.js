import React, { useState, useEffect, useContext } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, Button } from "reactstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();
  let location = useLocation();
  const toggle = () => setIsOpen(!isOpen);

  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    fetch("/logout");
    setUser(null);
    if (location.pathname == '/my-page') {
      history.push('/')
    }
  };
  const login = () => {
    history.push("/account-login");
  };

  const goToAccount = () => {
    history.push("/my-page");
  };

  const goToRegisterAccount = () => {
    history.push("/register");
  };

  return (
    <header>
      <Navbar className="darkbrown" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          {user ? (
            <a className="login-logout" onClick={logout}>
              <FiLogOut className="golden" size={30} />
            </a>
          ) : (
            <a className="login-logout" onClick={login}>
              <FiLogIn className="golden" size={30} />
            </a>
          )}
        </Button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {props.menuData.map((item) => (
              <li className="nav-item" key={item.route}>
                <NavLink className="nav-link" exact to={item.route}>
                  <span className="golden">{item.label}</span>
                </NavLink>
              </li>
            ))}
            <span className="nav-item" style={{ cursor: "pointer" }}>
              {user ? (
                <a className="nav-link" onClick={goToAccount}>
                  {" "}
                  <p className="golden"> My Page </p>{" "}
                </a>
              ) : (
                <a className="nav-link" onClick={goToRegisterAccount}>
                  {" "}
                  <p className="golden"> Register </p>{" "}
                </a>
              )}
            </span>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
