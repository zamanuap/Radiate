import React, { useState, useContext } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import About from './About/About'
import './NewNavMenu.css'
import { AppContext } from './ContextProvider'
import 'font-awesome/css/font-awesome.min.css'

const NewNavMenu = () => {

    const { userIsLogged, loggedIn } = useContext(AppContext)
    const [collapsed, setCollapsed] = useState({
        collapsed: true
    })

    const toggleNavbar = () => {
        setCollapsed({
            collapsed: !collapsed
        });
    }

    return (
        
        <div className="navbar">
            <div className="brand-title">
                <Link to="/"><img className="img-size" src="logo.jpg" alt="Company logo" /></Link>
            </div>
            <div className="nav-links">
                <ul className="top-list">
                    <li><Link className="main-link" to="/">Home</Link></li>
                    <li><Link className="main-link" to="/projects">Projects</Link></li>
                    <li><Link className="main-link" to="/gallery">Gallery</Link></li>
                    <li><Link className="main-link" to="/news">News</Link></li>
                    <li><Link className="main-link" to="/gallery">Gallery</Link></li>
                    {
                        userIsLogged
                            ?
                            <li><Link className="main-link" to="/volunteer">Volunteer</Link>
                                <ul className="bottom-list">
                                    <li><Link className="sub-link" to='/member-register'>Member Registration</Link></li>
                                    <li><Link className="sub-link" to='/' onClick={() => loggedIn(false)}>Logout</Link></li>
                                </ul>
                            </li>
                            :
                            <li><Link className="main-link" to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </div>
        
    );
}

export default NewNavMenu