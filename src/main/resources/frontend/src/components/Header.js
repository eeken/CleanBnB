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

  console.log(location);


  const logout = () => {
    fetch("/logout");
    setUser(null);
    if (location.pathname == '/my-account') {
      history.push('/')
    }
  };
  const login = () => {
    history.push("/account-login");
  };

  const goToAccount = () => {
    history.push("/my-account");
  };

  const goToRegisterAccount = () => {
    history.push("/register");
  };

  return (
    <header>
      <Navbar className="darkbrown" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {props.menuData.map(item => (
              <li className="nav-item" key={item.route}>
                <NavLink className="nav-link" exact to={item.route}>
                  <span className="golden">{item.label}</span>
                </NavLink>
              </li>
            ))}
            <span className="nav-item" style={{ cursor: 'pointer' }}>
              {user ?
                <a className="nav-link" onClick={goToAccount}> <p className="golden"> My account </p> </a> : null
              }
            </span>
          </Nav>
        </Collapse>
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
      </Navbar>
    </header>
  );
}
