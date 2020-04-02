import React, { useState, useEffect, useContext } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, Button } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    fetch('/logout')
    setUser(null)
  }
  const login = () => {
    history.push('/account-login')
  }

  return (
    <header>
      <Navbar className="darkbrown asdf" dark expand="md">
        <div>
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
            </Nav>
          </Collapse>
        </div>
        <div className="ml-5">
          <Button className="border">
            {user ? (
              <a href="#log-out" className="login-logout"
              onClick={logout}>
                LOG OUT
              </a>
            ) : (
              <a
                href="#log-in"
                className="login-logout"
                onClick={login}>
                LOG IN
              </a>
            )}
          </Button>
        </div>
      </Navbar>
    </header>
  );
}
