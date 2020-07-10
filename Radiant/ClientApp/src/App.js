import React, { Component, useState } from 'react';
import { Route } from 'react-router';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import './custom.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import NewNavMenu from './components/NewNavMenu';
import Register from './components/Login/Register';
import Donate from './components/Donate/Donate';
import LoggedNavItem from './components/Login/LoggedNavItem';
import ContextProvider from './components/ContextProvider';
import NavMenu from './components/NavMenu';
import MemberRegister from './components/Login/MemberRegister';
import Volunteer from './components/UserType/Volunteer';

export default class App extends Component {
  static displayName = App.name;

    render() {
        
    return (
        <div>
            <ContextProvider>
            <NewNavMenu />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/news' component={News} />
            <Route path='/contact-us' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/volunteer' component={Volunteer} />
            <Route path='/register' component={Register} />
            <Route path='/member-register' component={MemberRegister} />
            <Route path='/donate' component={Donate} />
            </ContextProvider>
      </div>
    );
  }
}
