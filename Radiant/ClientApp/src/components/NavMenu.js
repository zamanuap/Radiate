import React, { useState, useContext } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import About from './About/About'
import './NavMenu.css'
import { AppContext } from './ContextProvider'

const NavMenu = () => {

    const { user } = useContext(AppContext)
  const [collapsed, setCollapsed] = useState(true)
  
  const toggleNavbar = () => {
      setCollapsed(!collapsed)
  }

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            <Container>
                    <NavbarBrand tag={Link} to="/" className="btn-donate">Radiate Love Foundation</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink ><About /></NavLink>
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
                {
                user.isLogged ?
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/volunteer">Volunteer</NavLink>
                    </NavItem>
                    : 
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/login">Log In</NavLink>
                    </NavItem>
                }
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

export default NavMenu