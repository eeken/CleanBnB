import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Button,
  /*NavLink,*/ // collides with router
} from 'reactstrap';

import {
  NavLink
} from 'react-router-dom';

export default function Header(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            {/* <div className="ml-5 login-logout-button">
              <Button color="dark" className="border">
                {props.userIsLoggedIn ?
                  <a href="#log-out" className="login-logout">LOG OUT</a> :
                  <a href="#log-in" className="login-logout">LOG IN</a>
                }
              </Button>
            </div> */}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}