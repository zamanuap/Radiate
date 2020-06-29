import React, { Component } from 'react';
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
import { NavMenu } from './components/NavMenu';
import Register from './components/Login/Register';
import Donate from './components/Donate/Donate';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <div>
            <NavMenu />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/news' component={News} />
            <Route path='/contact-us' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/donate' component={Donate} />
      </div>
    );
  }
}
