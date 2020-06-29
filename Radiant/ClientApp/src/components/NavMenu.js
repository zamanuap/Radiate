import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            <Container>
                    <NavbarBrand tag={Link} to="/" className="btn-donate">Radiate Love Foundation</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/gallery">Gallery</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/news">News</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/contact-us">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/login">Log In</NavLink>
                </NavItem>
                { /*   
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/donate">
                        <button className="btn btn-warning btn-donate">Donate Now</button>
                    </NavLink>
                </NavItem>
                */ }
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
